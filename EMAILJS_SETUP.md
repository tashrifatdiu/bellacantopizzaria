# EmailJS Setup Guide for Bella Canto Reservations

This guide will help you set up EmailJS to receive reservation emails from your website.

## Step 1: Create EmailJS Account

1. Go to https://www.emailjs.com/
2. Sign up or login to your account
3. You should already have created a service ✓

## Step 2: Create Email Template

1. In EmailJS Dashboard, click **"Email Templates"** in the left sidebar
2. Click **"Create New Template"** button

### Template Configuration:

**Template Name:** `reservation_template` (or any name you prefer)

**Template ID:** Copy this ID - you'll need it for the code (e.g., `template_abc123`)

### Email Template Content:

**Subject Line:**
```
New Reservation Request - {{customer_name}}
```

**Email Body (HTML):**

```html
<!DOCTYPE html>
<html>
<head>
    <style>
        body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
            color: #333;
        }
        .container {
            max-width: 600px;
            margin: 0 auto;
            padding: 20px;
            background-color: #f9f9f9;
            border: 1px solid #ddd;
            border-radius: 8px;
        }
        .header {
            background-color: #d4af37;
            color: #000;
            padding: 20px;
            text-align: center;
            border-radius: 8px 8px 0 0;
            font-size: 24px;
            font-weight: bold;
        }
        .content {
            background-color: white;
            padding: 30px;
            border-radius: 0 0 8px 8px;
        }
        .field {
            margin-bottom: 15px;
            padding: 10px;
            background-color: #f5f5f5;
            border-left: 4px solid #d4af37;
        }
        .label {
            font-weight: bold;
            color: #d4af37;
            display: block;
            margin-bottom: 5px;
        }
        .value {
            color: #333;
            font-size: 16px;
        }
        .footer {
            text-align: center;
            margin-top: 20px;
            padding-top: 20px;
            border-top: 1px solid #ddd;
            color: #666;
            font-size: 14px;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            🍕 New Reservation Request
        </div>
        <div class="content">
            <p style="font-size: 18px; margin-bottom: 20px;">
                You have received a new reservation request from your website.
            </p>
            
            <div class="field">
                <span class="label">Customer Name:</span>
                <span class="value">{{customer_name}}</span>
            </div>
            
            <div class="field">
                <span class="label">Email:</span>
                <span class="value">{{customer_email}}</span>
            </div>
            
            <div class="field">
                <span class="label">Phone:</span>
                <span class="value">{{customer_phone}}</span>
            </div>
            
            <div class="field">
                <span class="label">Date:</span>
                <span class="value">{{reservation_date}}</span>
            </div>
            
            <div class="field">
                <span class="label">Time:</span>
                <span class="value">{{reservation_time}}</span>
            </div>
            
            <div class="field">
                <span class="label">Number of Guests:</span>
                <span class="value">{{number_of_guests}}</span>
            </div>
            
            <div class="field">
                <span class="label">Special Requests:</span>
                <span class="value">{{special_requests}}</span>
            </div>
            
            <div class="footer">
                <p>This email was sent from Bella Canto Pizzaria website reservation form.</p>
                <p>Please respond to the customer at: {{customer_email}}</p>
            </div>
        </div>
    </div>
</body>
</html>
```

**Important Variables to Include:**
- `{{customer_name}}` - Customer's name
- `{{customer_email}}` - Customer's email
- `{{customer_phone}}` - Customer's phone number
- `{{reservation_date}}` - Reservation date
- `{{reservation_time}}` - Reservation time
- `{{number_of_guests}}` - Number of guests
- `{{special_requests}}` - Any special requests

3. Click **"Save"** button

## Step 3: Get Your Credentials

### Public Key (User ID):
1. Click on **"Account"** in the left sidebar
2. Find **"Public Key"** section
3. Copy your public key (e.g., `user_abc123xyz`)

### Service ID:
1. Click on **"Email Services"** in the left sidebar
2. Find your service
3. Copy the **Service ID** (e.g., `service_abc123`)

### Template ID:
1. Click on **"Email Templates"**
2. Find your reservation template
3. Copy the **Template ID** (e.g., `template_abc123`)

## Step 4: Update Environment Variables

Add these to your `.env` file:

```env
REACT_APP_EMAILJS_PUBLIC_KEY=your_public_key_here
REACT_APP_EMAILJS_SERVICE_ID=your_service_id_here
REACT_APP_EMAILJS_TEMPLATE_ID=your_template_id_here
```

**Example:**
```env
REACT_APP_EMAILJS_PUBLIC_KEY=user_abc123xyz
REACT_APP_EMAILJS_SERVICE_ID=service_abc123
REACT_APP_EMAILJS_TEMPLATE_ID=template_abc123
```

## Step 5: Install EmailJS Package

Run this command in your terminal:

```bash
cd restaurant
npm install @emailjs/browser
```

## Step 6: Test Your Setup

1. Restart your development server: `npm start`
2. Go to the Contact/Reservation section on your website
3. Fill out the reservation form
4. Submit the form
5. Check your email (the one configured in EmailJS service)

## Troubleshooting

### Email Not Received?

1. **Check Spam Folder**: EmailJS emails might go to spam initially
2. **Verify Service**: Make sure your EmailJS service is connected to your email
3. **Check Template ID**: Ensure the template ID in `.env` matches EmailJS
4. **Check Console**: Open browser console (F12) for error messages
5. **Verify Public Key**: Make sure you're using the correct public key

### Common Errors:

**"Invalid public key"**
- Check that `REACT_APP_EMAILJS_PUBLIC_KEY` is correct
- Make sure you copied the full key from EmailJS Account page

**"Template not found"**
- Verify `REACT_APP_EMAILJS_TEMPLATE_ID` matches your template
- Check that the template is saved and active

**"Service not found"**
- Verify `REACT_APP_EMAILJS_SERVICE_ID` is correct
- Make sure the service is connected to your email provider

## Email Service Configuration

### Recommended Email Services:

1. **Gmail** (Most common)
   - Easy to set up
   - Free tier available
   - Good deliverability

2. **Outlook/Hotmail**
   - Microsoft email service
   - Free tier available

3. **Custom SMTP**
   - Use your own email server
   - More control

### Setting Up Gmail Service:

1. In EmailJS, click "Add New Service"
2. Select "Gmail"
3. Click "Connect Account"
4. Login with your Gmail account
5. Allow EmailJS permissions
6. Done!

## Security Notes

1. **Never commit `.env` file** - It's already in `.gitignore`
2. **Public Key is safe** - It's meant to be public (client-side)
3. **Limit requests** - EmailJS has rate limits on free tier
4. **Monitor usage** - Check EmailJS dashboard for usage stats

## Free Tier Limits

EmailJS Free Tier:
- 200 emails per month
- 2 email templates
- 1 email service

If you need more, upgrade to a paid plan.

## Testing Checklist

- [ ] EmailJS account created
- [ ] Email service connected
- [ ] Template created with all variables
- [ ] Public key copied to `.env`
- [ ] Service ID copied to `.env`
- [ ] Template ID copied to `.env`
- [ ] EmailJS package installed (`npm install @emailjs/browser`)
- [ ] Development server restarted
- [ ] Test reservation submitted
- [ ] Email received successfully

## Support

- EmailJS Documentation: https://www.emailjs.com/docs/
- EmailJS Support: https://www.emailjs.com/support/

---

**Ready to go?** Once you've completed all steps, your reservation form will send emails automatically!
