# Admin Login Quick Reference

## 🔐 Creating Admin User (One-Time Setup)

### Step 1: Go to Appwrite Console
```
https://cloud.appwrite.io/console
```

### Step 2: Navigate to Auth
1. Select project: `bellacantopizzaria`
2. Click **"Auth"** in left sidebar
3. Click **"Create User"** button

### Step 3: Fill in User Details
```
Email:    admin@bellacanto.com
Password: [CREATE A STRONG PASSWORD]
Name:     Admin
```

**⚠️ IMPORTANT**: Save these credentials securely!

### Step 4: Click "Create"

---

## 🚀 Logging In

### Access Admin Panel
```
http://localhost:3000/admin
```

### Login Credentials
```
Email:    [The email you created in Appwrite]
Password: [The password you set in Appwrite]
```

### After Login
You'll be redirected to:
```
http://localhost:3000/admin/dashboard
```

---

## 📋 Quick Actions After Login

### Managing Categories
1. Click **"Categories"** tab
2. Click **"+ Add Category"** to create new
3. Fill in:
   - Name (Internal): `Pizza`
   - Name (English): `Pizza`
   - Name (Portuguese): `Pizza`
   - Image URL: `https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=800&q=80`
   - Order: `10`

### Managing Menu Items
1. Click **"Menu Items"** tab
2. Click **"+ Add Menu Item"** to create new
3. Fill in:
   - Name (English): `Pizza Margherita`
   - Name (Portuguese): `Pizza Margherita`
   - Category: Select from dropdown
   - Description (English): `Caputo flour, tomato sauce, mozzarella...`
   - Description (Portuguese): `Farinha Caputo, molho de tomate, mozzarella...`
   - Price: `M: 8,50€ / R: 9,50€`
   - Order: `10`
   - Available: ✓ (checked)

---

## 🔑 Default Credentials Template

**Save this information securely:**

```
═══════════════════════════════════════
    BELLA CANTO ADMIN CREDENTIALS
═══════════════════════════════════════

Admin Panel URL:
http://localhost:3000/admin

Production URL:
[YOUR_PRODUCTION_URL]/admin

Email:    _______________________________

Password: _______________________________

Created:  _______________________________

Notes:    _______________________________
          _______________________________

═══════════════════════════════════════
```

---

## 🛡️ Security Best Practices

### Password Requirements
- ✅ Minimum 8 characters
- ✅ Mix of uppercase and lowercase
- ✅ Include numbers
- ✅ Include special characters
- ✅ Example: `BellaCanto2024!@#`

### Security Tips
1. **Never share** admin credentials
2. **Use unique password** (not used elsewhere)
3. **Enable 2FA** on Appwrite account
4. **Change password** regularly
5. **Don't commit** credentials to git
6. **Log out** when finished

---

## 🔄 Session Management

### Auto Logout
- Sessions expire after inactivity
- You'll be redirected to login page

### Manual Logout
- Click **"Logout"** button in dashboard header
- Located in top-right corner

### Session Issues
If you can't login:
1. Clear browser cache
2. Check credentials in Appwrite Console
3. Verify Appwrite project ID in `.env`
4. Check browser console for errors

---

## 👥 Multiple Admin Users

### Creating Additional Admins
1. Go to Appwrite Console → Auth
2. Click "Create User"
3. Use different email for each admin
4. Example:
   - `admin@bellacanto.com` (Main Admin)
   - `manager@bellacanto.com` (Manager)
   - `staff@bellacanto.com` (Staff)

### Managing Permissions
All users created in Appwrite Auth have full admin access.
For role-based access, you'll need to implement custom roles.

---

## 🐛 Troubleshooting

### Can't Login?

**Check 1: User Exists**
- Go to Appwrite Console → Auth
- Verify user is created
- Check email is correct

**Check 2: Password**
- Passwords are case-sensitive
- No extra spaces
- Try resetting in Appwrite Console

**Check 3: Project ID**
- Open `.env` file
- Verify `REACT_APP_APPWRITE_PROJECT_ID=698e354d002b0a79c630`

**Check 4: Connection**
- Open browser console (F12)
- Look for "✅ Appwrite connection successful"
- If not, check endpoint URL in `.env`

### Error Messages

**"Invalid credentials"**
- Email or password is incorrect
- Check Appwrite Console for correct email

**"Session expired"**
- Login again
- Sessions expire after inactivity

**"Network error"**
- Check internet connection
- Verify Appwrite endpoint is correct
- Check if Appwrite service is online

---

## 📞 Quick Support Checklist

Before asking for help, check:
- [ ] Admin user created in Appwrite Console
- [ ] Correct email and password
- [ ] `.env` file has correct project ID
- [ ] Development server is running (`npm start`)
- [ ] Browser console shows no errors
- [ ] Appwrite connection successful message appears

---

## 🎯 Quick Start Workflow

### First Time Setup (5 minutes)
1. ✅ Create admin user in Appwrite Console
2. ✅ Save credentials securely
3. ✅ Start app: `npm start`
4. ✅ Login at `/admin`
5. ✅ Create 6 categories (Starters, Pizza, Pasta, Salads, Desserts, Drinks)
6. ✅ Start adding menu items

### Daily Usage
1. Navigate to `http://localhost:3000/admin`
2. Login with saved credentials
3. Manage menu items as needed
4. Logout when finished

---

## 📱 Mobile Access

The admin panel is responsive and works on:
- ✅ Desktop (recommended)
- ✅ Tablet
- ✅ Mobile (limited functionality)

**Best experience**: Use desktop or tablet for admin tasks

---

## 🔗 Important URLs

| Purpose | URL |
|---------|-----|
| Main Website | `http://localhost:3000` |
| Admin Login | `http://localhost:3000/admin` |
| Admin Dashboard | `http://localhost:3000/admin/dashboard` |
| Appwrite Console | `https://cloud.appwrite.io/console` |

---

## 📝 Notes Section

Use this space to write down your specific details:

```
My Admin Email: _________________________________

Password Hint: __________________________________

Last Login: _____________________________________

Categories Created: _____________________________

Menu Items Count: _______________________________

Last Updated: ___________________________________
```

---

**Remember**: Keep this document secure and never commit it to version control!
