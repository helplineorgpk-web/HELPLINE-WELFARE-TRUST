# Email Setup Instructions

## Problem
Your contact form is getting the error: **"Gmail_API: Invalid grant. Please reconnect your Gmail account"**

This happens when EmailJS's Gmail OAuth token expires.

## Quick Fix: Reconnect Gmail in EmailJS

1. Go to [EmailJS Dashboard](https://dashboard.emailjs.com/)
2. Log in to your account
3. Navigate to **Email Services** → Find your service (`service_sn43jtj`)
4. Click on the service
5. Click **"Reconnect"** or **"Re-authorize"** next to Gmail
6. Follow the OAuth flow to reconnect your Gmail account

## Better Solution: Use a Reliable Email Service

I've added a fallback API route (`/api/send-email`) that will automatically try alternative email services if EmailJS fails.

### Option 1: Resend (Recommended - Free Tier Available)

1. Sign up at [resend.com](https://resend.com)
2. Get your API key from the dashboard
3. Add to your `.env.local` file:
   ```
   RESEND_API_KEY=re_xxxxxxxxxxxxx
   RESEND_FROM_EMAIL=contact@helpline.org.pk
   ```
4. Verify your domain in Resend dashboard

### Option 2: SendGrid (Free Tier Available)

1. Sign up at [sendgrid.com](https://sendgrid.com)
2. Create an API key in Settings → API Keys
3. Add to your `.env.local` file:
   ```
   SENDGRID_API_KEY=SG.xxxxxxxxxxxxx
   SENDGRID_FROM_EMAIL=contact@helpline.org.pk
   ```
4. Verify your sender email

### Option 3: Switch EmailJS to SMTP

Instead of Gmail API, use SMTP in EmailJS:
1. Go to EmailJS Dashboard → Email Services
2. Add a new service or edit existing
3. Choose **SMTP** instead of Gmail
4. Enter your SMTP credentials (Gmail SMTP or your email provider's SMTP)

## What I've Changed

1. **Improved Error Handling**: The form now detects Gmail API errors and shows a helpful message
2. **Automatic Fallback**: If EmailJS fails, it automatically tries the API route
3. **API Route Created**: `/pages/api/send-email.js` supports Resend and SendGrid

## Testing

After setting up an email service:
1. Fill out the contact form
2. Submit it
3. Check your email inbox (and spam folder)
4. Check the browser console for any errors

## Current Status

The form will now:
- Try EmailJS first (you need to reconnect Gmail)
- If EmailJS fails, automatically try the API route
- If no email service is configured in the API route, it will log the email to console

**Next Step**: Choose one of the options above and configure it!

