# EmailJS Quick Start - 5 Minutes Setup

## Step 1: Install Package (30 seconds)

```bash
cd restaurant
npm install @emailjs/browser
```

## Step 2: Get Your EmailJS Credentials (2 minutes)

1. Go to https://www.emailjs.com/ and login
2. Get your **Public Key**: Account → Public Key → Copy
3. Get your **Service ID**: Email Services → Your Service → Copy ID
4. Get your **Template ID**: Email Templates → Your Template → Copy ID

## Step 3: Update .env File (1 minute)

Open `restaurant/.env` and replace these values:

```env
REACT_APP_EMAILJS_PUBLIC_KEY=your_actual_public_key
REACT_APP_EMAILJS_SERVICE_ID=your_actual_service_id
REACT_APP_EMAILJS_TEMPLATE_ID=your_actual_template_id
```

## Step 4: Restart Server (30 seconds)

```bash
# Stop the server (Ctrl+C)
# Start it again
npm start
```

## Step 5: Test! (1 minute)

1. Go to your website
2. Scroll to the reservation form
3. Fill it out and submit
4. Check your email!

---

## Template Variables (Copy/Paste for EmailJS)

When creating your template in EmailJS, use these exact variable names:

- `{{customer_name}}`
- `{{customer_email}}`
- `{{customer_phone}}`
- `{{reservation_date}}`
- `{{reservation_time}}`
- `{{number_of_guests}}`
- `{{special_requests}}`

## Need Help?

See `EMAILJS_SETUP.md` for detailed instructions with screenshots and troubleshooting.

## Quick Checklist

- [ ] Installed `@emailjs/browser` package
- [ ] Created EmailJS template with correct variables
- [ ] Copied Public Key to `.env`
- [ ] Copied Service ID to `.env`
- [ ] Copied Template ID to `.env`
- [ ] Restarted development server
- [ ] Tested reservation form
- [ ] Received test email

**Done!** Your reservation system is now live! 🎉
