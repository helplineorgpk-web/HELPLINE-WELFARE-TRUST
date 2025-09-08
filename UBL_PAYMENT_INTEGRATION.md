# UBL Payment Gateway Integration

This document provides a comprehensive guide for the UBL Payment Gateway integration implemented for Helpline Welfare Trust.

## Overview

The integration uses the Etisalat Payment Gateway (EPG) REST API v1.6 to process online donations through UBL Pay. The implementation includes:

- Payment registration and finalization
- 3D Secure authentication
- Payment success/failure handling
- Test transaction functionality
- Compliance with UBL requirements

## Files Created/Modified

### New Files Created

1. **`utils/ublPaymentGateway.js`** - Core payment gateway service
2. **`pages/api/ubl-payment.js`** - API routes for payment operations
3. **`Components/Elements/Payment/UBLPaymentForm.js`** - Payment form component
4. **`Components/Elements/Payment/UBLPaymentForm.module.css`** - Payment form styles
5. **`pages/payment/callback.js`** - Payment callback handler
6. **`pages/payment/PaymentCallback.module.css`** - Callback page styles
7. **`env.example`** - Environment variables template

### Modified Files

1. **`Components/Elements/Donation/DonationDonationArea.js`** - Added online payment integration
2. **`public/css/Contact.module.css`** - Added payment form styles
3. **`Components/Layout/Footer1.js`** - Added UBL Pay compliance logos
4. **`public/css/Footer.module.css`** - Added footer payment logos styles
5. **`pages/api/data.js`** - Updated donation methods

### Payment Logos Added

- **`public/img/payment/ubl-pay-logo.png`** - UBL Pay logo
- **`public/img/payment/visa-mastercard.png`** - Card logos
- **`public/img/payment/visa.png`** - Visa logo
- **`public/img/payment/mastercard.png`** - Mastercard logo
- **`public/img/payment/amex.png`** - American Express logo

## Configuration

### Environment Variables

Create a `.env.local` file with the following variables:

```env
# Environment
NODE_ENV=development

# UBL Payment Gateway Credentials (Sandbox)
UBL_CUSTOMER_ID=Demo Merchant
UBL_STORE_ID=0000
UBL_TERMINAL_ID=0000
UBL_USERNAME=Demo_fY9c
UBL_PASSWORD=Comtrust@20182018

# Callback URL
NEXT_PUBLIC_CALLBACK_URL=http://localhost:3000/payment/callback
```

### Production Configuration

For production, update the environment variables with your live credentials:

```env
NODE_ENV=production
UBL_CUSTOMER_ID=your_live_customer_id
UBL_STORE_ID=your_live_store_id
UBL_TERMINAL_ID=your_live_terminal_id
UBL_USERNAME=your_live_username
UBL_PASSWORD=your_live_password
NEXT_PUBLIC_CALLBACK_URL=https://yourdomain.com/payment/callback
```

## API Endpoints

### Payment Registration
- **URL:** `/api/ubl-payment`
- **Method:** POST
- **Action:** `register`

### Payment Finalization
- **URL:** `/api/ubl-payment`
- **Method:** POST
- **Action:** `finalize`

### Payment Callback
- **URL:** `/payment/callback`
- **Method:** GET/POST
- **Purpose:** Handle payment completion

## Payment Flow

1. **User initiates donation** on the donation page
2. **Payment form** collects donor information and amount
3. **Registration API** creates payment session with UBL
4. **User redirected** to UBL payment portal for 3D Secure
5. **Payment processed** on UBL's secure platform
6. **Callback received** at `/payment/callback`
7. **Finalization API** confirms payment status
8. **Success/failure page** displayed to user

## Test Cards

### Sandbox Test Cards

| Card Number | Amount | Expected Result |
|-------------|--------|-----------------|
| 4111111111111111 | Any | Success |
| 4012888888881881 | Any | Insufficient Funds |
| 5105105105105100 | Any | Do Not Honor |

**Expiry:** Any future date  
**CVV:** 123

## Testing

### Test Payment Page

Visit `/test-payment` to access the comprehensive test interface:

- Test different payment scenarios
- View API responses in real-time
- Test with different card numbers
- Monitor payment flow

### Manual Testing

1. Go to `/donation` page
2. Click "Donate Now" button
3. Fill in donation form
4. Use test card numbers
5. Complete 3D Secure authentication
6. Verify payment completion

## Compliance Requirements

### UBL Pay Branding

- UBL Pay logo displayed on payment pages
- Payment provider mentioned in footer
- Visa/Mastercard logos shown
- "Powered by UBL Pay" text included

### Security Features

- 3D Secure authentication
- PCI DSS compliant processing
- Secure tokenization
- Encrypted communication

## Error Handling

The integration handles various error scenarios:

- Network errors
- Payment failures
- 3D Secure authentication failures
- Invalid card details
- Insufficient funds
- System errors

## Monitoring and Logging

- All payment transactions are logged
- API responses stored for debugging
- Error tracking implemented
- Transaction status monitoring

## Production Deployment

### Pre-deployment Checklist

1. ✅ Update environment variables with production credentials
2. ✅ Configure production callback URL
3. ✅ Test with live credentials
4. ✅ Verify UBL Pay logos are displayed
5. ✅ Test complete payment flow
6. ✅ Verify compliance requirements

### Post-deployment

1. Monitor payment success rates
2. Check error logs regularly
3. Verify callback URL functionality
4. Test with real cards (small amounts)
5. Monitor UBL dashboard for transactions

## Support

For technical support:

- **UBL Integration Team:** merchant-integration@etisalat.ae
- **UBL Manager:** israr.ahmed@ubl.com.pk
- **Phone:** 021-99033-2623

## API Documentation

Refer to the official UBL Payment Gateway Integration Guide v1.6 for detailed API specifications:

- Registration API
- Finalization API
- Authorization API
- Capture API
- Refund API
- Query API

## Security Considerations

- Never log sensitive card data
- Use HTTPS for all communications
- Validate all inputs
- Implement rate limiting
- Regular security audits

## Troubleshooting

### Common Issues

1. **Payment not processing:** Check API credentials
2. **Callback not working:** Verify callback URL configuration
3. **3D Secure failing:** Check card details and issuer
4. **Styling issues:** Verify CSS file paths

### Debug Mode

Enable debug logging by setting:
```env
NODE_ENV=development
```

This will log detailed API responses and transaction data.

## Version History

- **v1.0** - Initial UBL payment integration
- **v1.1** - Added test functionality
- **v1.2** - Enhanced error handling
- **v1.3** - Added compliance requirements
