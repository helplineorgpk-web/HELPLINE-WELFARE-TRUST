import React, { useMemo, useState } from "react";
import Layout1 from "../Components/Layout/Layout1";
import styles from "../styles/FundraiserForm.module.css";

const FORM_RECIPIENT_EMAIL = "info@helpline.org.pk";

const initialForm = {
  fullName: "",
  email: "",
  phone: "",
  whatsapp: "",
  cnic: "",
  city: "",
  country: "Pakistan",
  fundraiserType: "",
  organizationName: "",
  campaignTitle: "",
  campaignCategory: "",
  targetAmount: "",
  campaignStartDate: "",
  campaignEndDate: "",
  expectedDonors: "",
  fundsUsagePlan: "",
  motivation: "",
  previousExperience: "",
  socialLinks: "",
  agreeDeclaration: false,
};

function toMessage(form) {
  return `
New Fundraiser Application

Applicant details
- Full name: ${form.fullName}
- Email: ${form.email}
- Phone: ${form.phone}
- WhatsApp: ${form.whatsapp || "N/A"}
- CNIC: ${form.cnic}
- City: ${form.city}
- Country: ${form.country}

Fundraiser profile
- Type: ${form.fundraiserType}
- Organization name: ${form.organizationName || "N/A"}

Campaign plan
- Campaign title: ${form.campaignTitle}
- Campaign category: ${form.campaignCategory}
- Target amount (PKR): ${form.targetAmount}
- Start date: ${form.campaignStartDate}
- End date: ${form.campaignEndDate}
- Expected donors: ${form.expectedDonors || "N/A"}

Details
- Planned use of funds:
${form.fundsUsagePlan}

- Why you want to fundraise:
${form.motivation}

- Previous fundraising experience:
${form.previousExperience || "N/A"}

- Social profile links:
${form.socialLinks || "N/A"}

Declaration accepted: ${form.agreeDeclaration ? "Yes" : "No"}
`.trim();
}

export default function BecomeAFundraiserPage() {
  const [form, setForm] = useState(initialForm);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitState, setSubmitState] = useState({ type: "", message: "" });

  const minEndDate = useMemo(
    () => form.campaignStartDate || undefined,
    [form.campaignStartDate]
  );

  const onChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    setSubmitState({ type: "", message: "" });

    if (!form.agreeDeclaration) {
      setSubmitState({
        type: "error",
        message: "Please accept the declaration before submitting.",
      });
      return;
    }

    if (form.campaignStartDate && form.campaignEndDate) {
      const start = new Date(form.campaignStartDate);
      const end = new Date(form.campaignEndDate);
      if (end < start) {
        setSubmitState({
          type: "error",
          message: "Campaign end date cannot be earlier than start date.",
        });
        return;
      }
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          to: FORM_RECIPIENT_EMAIL,
          subject: "New Fundraiser Application - Helpline Welfare Trust",
          name: form.fullName,
          email: form.email,
          phone: form.phone,
          message: toMessage(form),
        }),
      });

      const data = await response.json();
      if (!response.ok) {
        throw new Error(data?.error || "Unable to submit right now.");
      }

      setSubmitState({
        type: "success",
        message:
          "Application submitted successfully. Our team will contact you soon.",
      });
      setForm(initialForm);
    } catch (error) {
      setSubmitState({
        type: "error",
        message:
          error?.message ||
          "Submission failed. Please try again or contact support.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Layout1>
      <section className={styles.wrapper}>
        <div className={styles.headerBlock}>
          <p className={styles.eyebrow}>HELPLINE WELFARE TRUST</p>
          <h1 className={styles.title}>Become a Fundraiser</h1>
          <p className={styles.subtitle}>
            Fill this application so we can verify and approve your campaign.
            Once approved, you can raise funds on behalf of Helpline Welfare
            Trust.
          </p>
        </div>

        <form className={styles.formCard} onSubmit={onSubmit}>
          <h2 className={styles.sectionTitle}>Personal information</h2>
          <div className={styles.grid}>
            <label className={styles.field}>
              <span>Full name *</span>
              <input
                type="text"
                name="fullName"
                value={form.fullName}
                onChange={onChange}
                required
              />
            </label>
            <label className={styles.field}>
              <span>Email address *</span>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={onChange}
                required
              />
            </label>
            <label className={styles.field}>
              <span>Phone number *</span>
              <input
                type="tel"
                name="phone"
                value={form.phone}
                onChange={onChange}
                required
              />
            </label>
            <label className={styles.field}>
              <span>WhatsApp number</span>
              <input
                type="tel"
                name="whatsapp"
                value={form.whatsapp}
                onChange={onChange}
              />
            </label>
            <label className={styles.field}>
              <span>CNIC number *</span>
              <input
                type="text"
                name="cnic"
                value={form.cnic}
                onChange={onChange}
                placeholder="e.g. 35202-1234567-8"
                required
              />
            </label>
            <label className={styles.field}>
              <span>City *</span>
              <input
                type="text"
                name="city"
                value={form.city}
                onChange={onChange}
                required
              />
            </label>
            <label className={styles.field}>
              <span>Country *</span>
              <input
                type="text"
                name="country"
                value={form.country}
                onChange={onChange}
                required
              />
            </label>
          </div>

          <h2 className={styles.sectionTitle}>Fundraiser profile</h2>
          <div className={styles.grid}>
            <label className={styles.field}>
              <span>Fundraiser type *</span>
              <select
                name="fundraiserType"
                value={form.fundraiserType}
                onChange={onChange}
                required
              >
                <option value="">Select one</option>
                <option value="Individual">Individual</option>
                <option value="Team">Team</option>
                <option value="Organization">Organization</option>
                <option value="Corporate partner">Corporate partner</option>
              </select>
            </label>
            <label className={styles.field}>
              <span>Organization / Team name</span>
              <input
                type="text"
                name="organizationName"
                value={form.organizationName}
                onChange={onChange}
              />
            </label>
          </div>

          <h2 className={styles.sectionTitle}>Campaign details</h2>
          <div className={styles.grid}>
            <label className={styles.field}>
              <span>Campaign title *</span>
              <input
                type="text"
                name="campaignTitle"
                value={form.campaignTitle}
                onChange={onChange}
                required
              />
            </label>
            <label className={styles.field}>
              <span>Campaign category *</span>
              <select
                name="campaignCategory"
                value={form.campaignCategory}
                onChange={onChange}
                required
              >
                <option value="">Select category</option>
                <option value="Education">Education</option>
                <option value="Healthcare">Healthcare</option>
                <option value="Food support">Food support</option>
                <option value="Disaster relief">Disaster relief</option>
                <option value="Water and sanitation">Water and sanitation</option>
                <option value="Shelter and housing">Shelter and housing</option>
                <option value="Other">Other</option>
              </select>
            </label>
            <label className={styles.field}>
              <span>Target amount (PKR) *</span>
              <input
                type="number"
                name="targetAmount"
                value={form.targetAmount}
                onChange={onChange}
                min="1000"
                step="1"
                required
              />
            </label>
            <label className={styles.field}>
              <span>Expected number of donors</span>
              <input
                type="number"
                name="expectedDonors"
                value={form.expectedDonors}
                onChange={onChange}
                min="1"
                step="1"
              />
            </label>
            <label className={styles.field}>
              <span>Campaign start date *</span>
              <input
                type="date"
                name="campaignStartDate"
                value={form.campaignStartDate}
                onChange={onChange}
                required
              />
            </label>
            <label className={styles.field}>
              <span>Campaign end date *</span>
              <input
                type="date"
                name="campaignEndDate"
                value={form.campaignEndDate}
                min={minEndDate}
                onChange={onChange}
                required
              />
            </label>
          </div>

          <div className={styles.gridSingle}>
            <label className={styles.field}>
              <span>How will funds be used? *</span>
              <textarea
                name="fundsUsagePlan"
                value={form.fundsUsagePlan}
                onChange={onChange}
                rows={4}
                placeholder="Share budget split, beneficiaries, and implementation plan."
                required
              />
            </label>
            <label className={styles.field}>
              <span>Why do you want to become a fundraiser? *</span>
              <textarea
                name="motivation"
                value={form.motivation}
                onChange={onChange}
                rows={4}
                placeholder="Tell us your motivation and expected impact."
                required
              />
            </label>
            <label className={styles.field}>
              <span>Previous fundraising experience</span>
              <textarea
                name="previousExperience"
                value={form.previousExperience}
                onChange={onChange}
                rows={3}
                placeholder="Mention past campaigns or relevant community work."
              />
            </label>
            <label className={styles.field}>
              <span>Social media or website links</span>
              <input
                type="text"
                name="socialLinks"
                value={form.socialLinks}
                onChange={onChange}
                placeholder="https://..."
              />
            </label>
          </div>

          <label className={styles.declaration}>
            <input
              type="checkbox"
              name="agreeDeclaration"
              checked={form.agreeDeclaration}
              onChange={onChange}
            />
            <span>
              I confirm that all information provided is accurate, and I agree
              to Helpline Welfare Trust verification and compliance checks. *
            </span>
          </label>

          {submitState.message ? (
            <p
              className={
                submitState.type === "success"
                  ? styles.successMessage
                  : styles.errorMessage
              }
            >
              {submitState.message}
            </p>
          ) : null}

          <button className={styles.submitBtn} type="submit" disabled={isSubmitting}>
            {isSubmitting ? "Submitting..." : "Submit Fundraiser Application"}
          </button>
        </form>
      </section>
    </Layout1>
  );
}
