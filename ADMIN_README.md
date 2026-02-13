# Bella Canto Pizzaria - Admin Panel Setup

## 🎯 What's Been Created

A complete admin panel system with:
- ✅ Secure authentication (email/password)
- ✅ Category management (CRUD operations)
- ✅ Menu item management (CRUD operations)
- ✅ Beautiful, responsive UI matching your restaurant theme
- ✅ Real-time data synchronization with Appwrite

## 📁 New Files Created

```
restaurant/
├── src/
│   ├── lib/
│   │   └── appwrite.js              # Appwrite configuration
│   └── pages/
│       ├── AdminLogin.js            # Login page component
│       ├── AdminLogin.css           # Login page styles
│       ├── AdminDashboard.js        # Dashboard component
│       └── AdminDashboard.css       # Dashboard styles
├── .env                             # Environment variables (DO NOT COMMIT)
├── .env.example                     # Template for environment variables
├── APPWRITE_SETUP.md               # Detailed Appwrite setup guide
├── ADMIN_PANEL_GUIDE.md            # How to use the admin panel
└── ADMIN_README.md                 # This file
```

## 🚀 Quick Start (3 Steps)

### Step 1: Setup Appwrite Backend
Follow the instructions in `APPWRITE_SETUP.md` to:
1. Create database and collections in Appwrite
2. Set up permissions
3. Create admin user
4. Update `.env` with your collection IDs

### Step 2: Install Dependencies (if needed)
```bash
cd restaurant
npm install
```

### Step 3: Start the Application
```bash
npm start
```

Then navigate to: `http://localhost:3000/admin`

## 🔑 Default Admin Access

After setting up Appwrite, create an admin user with:
- Email: `admin@bellacanto.com` (or your choice)
- Password: (create a strong password)

## 📚 Documentation

- **APPWRITE_SETUP.md** - Complete Appwrite backend setup instructions
- **ADMIN_PANEL_GUIDE.md** - How to use the admin panel features

## 🎨 Features

### Authentication
- Secure login with Appwrite Auth
- Session management
- Protected routes
- Logout functionality

### Category Management
- Create new categories
- Edit existing categories
- Delete categories
- Set display order
- Add descriptions

### Menu Item Management
- Create menu items with:
  - Name
  - Category assignment
  - Description
  - Ingredients list
  - Price (in euros)
  - Display order
  - Availability toggle
- Edit all item details
- Delete items
- View by category

## 🔧 Environment Variables

Your `.env` file should contain:

```env
REACT_APP_APPWRITE_ENDPOINT=https://fra.cloud.appwrite.io/v1
REACT_APP_APPWRITE_PROJECT_ID=698e354d002b0a79c630
REACT_APP_APPWRITE_PROJECT_NAME=bellacantopizzaria
REACT_APP_APPWRITE_DATABASE_ID=restaurant_db
REACT_APP_APPWRITE_CATEGORIES_COLLECTION_ID=categories
REACT_APP_APPWRITE_MENU_ITEMS_COLLECTION_ID=menu_items
```

**Important**: Replace collection IDs with actual IDs from your Appwrite setup.

## 🛣️ Routes

| Route | Description | Auth Required |
|-------|-------------|---------------|
| `/` | Main restaurant website | No |
| `/admin` | Admin login page | No |
| `/admin/dashboard` | Admin dashboard | Yes |

## 🎯 Data Models

### Category
```javascript
{
  name: String (required),
  description: String (optional),
  order: Integer (required, default: 0)
}
```

### Menu Item
```javascript
{
  name: String (required),
  categoryId: String (required),
  description: String (optional),
  ingredients: String (optional),
  price: Float (required),
  available: Boolean (required, default: true),
  order: Integer (required, default: 0),
  image: String (optional)
}
```

## 🔒 Security Notes

1. **Never commit `.env`** - It's already in `.gitignore`
2. Use strong passwords for admin accounts
3. Enable 2FA on your Appwrite account
4. Regularly update dependencies
5. Review Appwrite permissions regularly

## 🐛 Troubleshooting

### "Cannot find module 'appwrite'"
```bash
npm install appwrite
```

### "Cannot find module 'react-router-dom'"
Already installed in your project (v7.13.0)

### Environment variables not working
1. Ensure `.env` is in the `restaurant/` directory
2. Restart the development server
3. Variables must start with `REACT_APP_`

### Login fails
1. Verify admin user exists in Appwrite Auth
2. Check credentials are correct
3. Verify project ID in `.env`

### Data not loading
1. Check browser console for errors
2. Verify collection IDs in `.env`
3. Ensure permissions are set in Appwrite
4. Check Appwrite connection: Look for "✅ Appwrite connection successful" in console

## 📱 Responsive Design

The admin panel is fully responsive:
- Desktop: Full grid layout
- Tablet: Adjusted columns
- Mobile: Single column, optimized touch targets

## 🎨 Theme

The admin panel uses your restaurant's color scheme:
- Primary: Gold (#d4af37)
- Background: Dark (#0a0a0a, #1a1a1a)
- Accents: Matching your main website

## 🔄 Next Steps

1. Complete Appwrite setup (see `APPWRITE_SETUP.md`)
2. Create your first category
3. Add menu items
4. Test the public menu display
5. Consider adding image upload functionality

## 📞 Support

If you encounter issues:
1. Check the browser console for errors
2. Review Appwrite logs
3. Verify all setup steps are completed
4. Check that `.env` variables are correct

## 🚀 Deployment Notes

Before deploying to production:
1. Set up production Appwrite project
2. Update `.env` with production values
3. Build the app: `npm run build`
4. Deploy the `build` folder
5. Ensure environment variables are set on hosting platform

## 📝 License

Part of Bella Canto Pizzaria project.

---

**Ready to start?** Open `APPWRITE_SETUP.md` and follow the setup instructions!
