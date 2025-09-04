const config = {
  registrationUrl:
    process.env.EPG_REGISTRATION_URL ||
    "https://demoipg.comtrust.ae/ipg/servlet/PaymentInitHTTPServlet",
  finalizationUrl:
    process.env.EPG_FINALIZATION_URL ||
    "https://demoipg.comtrust.ae/ipg/servlet/PaymentFinalizeHTTPServlet",

  customer: process.env.EPG_CUSTOMER || "COMTRUST",
  username: process.env.EPG_USERNAME || "COMTRUST",
  password: process.env.EPG_PASSWORD || "COMTRUST",

  store: process.env.EPG_STORE || "COMTRUST",
  terminal: process.env.EPG_TERMINAL || "COMTRUST",
  channel: process.env.EPG_CHANNEL || "Web",
  currency: process.env.EPG_CURRENCY || "PKR",
  transactionHint: process.env.EPG_TRANSACTION_HINT || "CPT:Y",

  baseUrl: process.env.NEXT_PUBLIC_BASE_URL || "https://helplinewelfare.org",

  mock: process.env.EPG_MOCK === "true",
};

console.log("EPG Config Loaded:", {
  ...config,
  password: "***REDACTED***",
});

export default config;
