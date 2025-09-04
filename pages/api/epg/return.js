export default async function handler(req, res) {
  // Set CORS headers
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");

  // Handle preflight
  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }

  // Handle both GET and POST methods
  if (req.method !== "GET" && req.method !== "POST") {
    res.setHeader("Allow", ["GET", "POST"]);
    return res.status(405).json({
      error: "Method Not Allowed",
      message: `Method ${req.method} not allowed`,
      allowedMethods: ["GET", "POST"],
    });
  }

  try {
    let transactionId;

    // Handle both GET and POST requests
    if (req.method === "POST") {
      // For POST requests, check both JSON and form data
      if (req.headers["content-type"]?.includes("application/json")) {
        transactionId =
          req.body?.TransactionID ||
          req.body?.transactionId ||
          req.body?.transactionID;
      } else {
        // For form data
        transactionId =
          req.body?.TransactionID ||
          req.body?.transactionId ||
          req.body?.transactionID;
      }
    } else {
      // For GET requests, check query parameters
      transactionId =
        req.query.TransactionID ||
        req.query.transactionId ||
        req.query.transactionID;
    }

    console.log("Received EPG return with transaction ID:", transactionId);
    console.log("Request method:", req.method);
    console.log("Request headers:", req.headers);
    console.log("Request body:", req.body);
    console.log("Request query:", req.query);

    if (
      !transactionId ||
      (typeof transactionId === "string" && transactionId.trim() === "")
    ) {
      console.error("Missing or invalid TransactionID");
      return res.status(400).json({
        error: "Bad Request",
        message: "Missing or invalid TransactionID",
        receivedData: {
          method: req.method,
          body: req.body,
          query: req.query,
        },
      });
    }

    // Ensure we have a valid base URL
    const baseUrl =
      process.env.NEXT_PUBLIC_BASE_URL ||
      (req.headers.origin
        ? new URL(req.headers.origin).origin
        : "http://localhost:3000");

    // Create the redirect URL with the transaction ID
    const redirectUrl = new URL("/", baseUrl);
    redirectUrl.searchParams.set("transactionId", transactionId);

    console.log("Redirecting to:", redirectUrl.toString());

    // Use 302 for temporary redirect (browsers might cache 301)
    return res.redirect(302, redirectUrl.toString());
  } catch (err) {
    console.error("EPG return bridge error:", err);
    return res.status(500).json({
      error: "Internal Server Error",
      message: "An error occurred while processing your request",
      details: process.env.NODE_ENV === "development" ? err.message : undefined,
    });
  }
}
