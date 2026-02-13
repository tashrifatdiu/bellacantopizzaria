# Setup Checklist ✅

Use this checklist to ensure everything is set up correctly.

## Prerequisites
- [ ] Node.js and npm installed
- [ ] Appwrite account created at https://cloud.appwrite.io
- [ ] Project created in Appwrite (ID: 698e354d002b0a79c630)

## Backend Setup (Appwrite)

### Database
- [ ] Created database named "Restaurant Database"
- [ ] Noted database ID: `_________________`

### Collections
- [ ] Created "Categories" collection
  - [ ] Added `name` attribute (String, Required, 255)
  - [ ] Added `description` attribute (String, Optional, 500)
  - [ ] Added `order` attribute (Integer, Required, Default: 0)
  - [ ] Set permissions: Any (Read), Users (Create, Update, Delete)
  - [ ] Noted collection ID: `_________________`

- [ ] Created "Menu Items" collection
  - [ ] Added `name` attribute (String, Required, 255)
  - [ ] Added `description` attribute (String, Optional, 1000)
  - [ ] Added `ingredients` attribute (String, Optional, 1000)
  - [ ] Added `price` attribute (Float, Required)
  - [ ] Added `categoryId` attribute (String, Required, 255)
  - [ ] Added `image` attribute (String, Optional, 500)
  - [ ] Added `available` attribute (Boolean, Required, Default: true)
  - [ ] Added `order` attribute (Integer, Required, Default: 0)
  - [ ] Set permissions: Any (Read), Users (Create, Update, Delete)
  - [ ] Noted collection ID: `_________________`

### Authentication
- [ ] Created admin user in Appwrite Auth
  - Email: `_________________`
  - Password: `_________________` (keep secure!)
  - Name: Admin

## Frontend Setup

### Dependencies
- [ ] Ran `npm install` in restaurant directory
- [ ] Verified `appwrite` package is installed
- [ ] Verified `react-router-dom` is installed

### Environment Variables
- [ ] Updated `.env` file with:
  - [ ] REACT_APP_APPWRITE_ENDPOINT
  - [ ] REACT_APP_APPWRITE_PROJECT_ID
  - [ ] REACT_APP_APPWRITE_DATABASE_ID (from step above)
  - [ ] REACT_APP_APPWRITE_CATEGORIES_COLLECTION_ID (from step above)
  - [ ] REACT_APP_APPWRITE_MENU_ITEMS_COLLECTION_ID (from step above)

### Testing
- [ ] Started development server: `npm start`
- [ ] Checked console for "✅ Appwrite connection successful"
- [ ] Navigated to `http://localhost:3000/admin`
- [ ] Successfully logged in with admin credentials
- [ ] Accessed admin dashboard at `/admin/dashboard`

## Admin Panel Testing

### Categories
- [ ] Created a test category
- [ ] Edited the test category
- [ ] Verified category appears in list
- [ ] Deleted the test category (optional)

### Menu Items
- [ ] Created a real category (e.g., "Pizza")
- [ ] Created a test menu item in that category
- [ ] Edited the test menu item
- [ ] Verified item appears in list with correct category
- [ ] Tested availability toggle
- [ ] Deleted the test item (optional)

## Production Readiness
- [ ] Created all real categories
- [ ] Added all menu items with correct information
- [ ] Verified prices are correct
- [ ] Checked ingredients lists
- [ ] Set proper display order for categories
- [ ] Set proper display order for menu items
- [ ] Tested on mobile device
- [ ] Tested on tablet
- [ ] Tested on desktop

## Security
- [ ] Verified `.env` is in `.gitignore`
- [ ] Never committed `.env` to git
- [ ] Used strong password for admin account
- [ ] Enabled 2FA on Appwrite account (recommended)
- [ ] Reviewed Appwrite permissions

## Documentation Review
- [ ] Read `APPWRITE_SETUP.md`
- [ ] Read `ADMIN_PANEL_GUIDE.md`
- [ ] Read `ADMIN_README.md`
- [ ] Bookmarked admin login URL

## Troubleshooting (if needed)
- [ ] Checked browser console for errors
- [ ] Verified all collection IDs are correct
- [ ] Confirmed Appwrite project is active
- [ ] Tested with different browsers
- [ ] Cleared browser cache if issues persist

## Notes

Write down your collection IDs here for reference:

```
Database ID: _________________

Categories Collection ID: _________________

Menu Items Collection ID: _________________

Admin Email: _________________
```

## Quick Commands

```bash
# Install dependencies
npm install

# Start development server
npm start

# Build for production
npm run build
```

## Quick Links

- Appwrite Console: https://cloud.appwrite.io/console
- Admin Login: http://localhost:3000/admin
- Main Website: http://localhost:3000

---

**Status**: 
- [ ] Setup in progress
- [ ] Setup complete
- [ ] Production ready

**Date Completed**: _________________

**Setup By**: _________________
