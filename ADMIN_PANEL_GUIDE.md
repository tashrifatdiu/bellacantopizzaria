# Admin Panel Quick Start Guide

## Overview

The admin panel allows you to manage your restaurant's menu categories and items through a user-friendly interface.

## Features

- 🔐 Secure login with email/password authentication
- 📁 Category management (Create, Read, Update, Delete)
- 🍕 Menu item management with full details
- 💰 Price management
- 📝 Ingredients tracking
- 🎯 Order management for display sequence
- ✅ Availability toggle for menu items

## Getting Started

### 1. Setup Appwrite Backend

Follow the detailed instructions in `APPWRITE_SETUP.md` to:
- Create your database and collections
- Set up proper permissions
- Create your admin user account
- Configure environment variables

### 2. Start the Application

```bash
cd restaurant
npm start
```

The app will run on `http://localhost:3000`

### 3. Access Admin Panel

Navigate to: `http://localhost:3000/admin`

Login with your admin credentials created in Appwrite.

## Admin Panel Structure

### Login Page (`/admin`)
- Email and password authentication
- Secure session management
- Redirects to dashboard on success

### Dashboard (`/admin/dashboard`)
- Two main tabs: Categories and Menu Items
- Add, Edit, Delete functionality for both
- Real-time data updates

## Managing Categories

### Add Category
1. Click "Categories" tab
2. Click "+ Add Category" button
3. Fill in:
   - Name (required)
   - Description (optional)
   - Order (for display sequence)
4. Click "Save"

### Edit Category
1. Find the category card
2. Click "Edit" button
3. Modify fields
4. Click "Save"

### Delete Category
1. Find the category card
2. Click "Delete" button
3. Confirm deletion

**Note**: Deleting a category won't automatically delete its menu items. Consider reassigning items first.

## Managing Menu Items

### Add Menu Item
1. Click "Menu Items" tab
2. Click "+ Add Menu Item" button
3. Fill in:
   - Name (required)
   - Category (required - select from dropdown)
   - Description (optional)
   - Ingredients (optional - comma separated)
   - Price (required - in euros)
   - Order (for display sequence)
   - Available (checkbox - default: checked)
4. Click "Save"

### Edit Menu Item
1. Find the menu item card
2. Click "Edit" button
3. Modify fields
4. Click "Save"

### Delete Menu Item
1. Find the menu item card
2. Click "Delete" button
3. Confirm deletion

## Data Structure

### Category Fields
- **Name**: Display name of the category (e.g., "Pizza", "Pasta")
- **Description**: Brief description of the category
- **Order**: Numeric value for sorting (lower numbers appear first)

### Menu Item Fields
- **Name**: Display name of the dish
- **Category**: Link to parent category
- **Description**: Detailed description of the dish
- **Ingredients**: Comma-separated list of ingredients
- **Price**: Price in euros (supports decimals)
- **Order**: Numeric value for sorting within category
- **Available**: Toggle to show/hide item from public menu

## Best Practices

### Organizing Categories
1. Use the "Order" field to control display sequence
2. Start with order values like 10, 20, 30 to allow easy insertion
3. Common categories: Starters, Pizza, Pasta, Salads, Desserts, Drinks

### Managing Menu Items
1. Use clear, descriptive names
2. Include allergen information in ingredients
3. Keep descriptions concise but informative
4. Use the "Available" toggle instead of deleting seasonal items
5. Group similar items with sequential order numbers

### Pricing
- Always use 2 decimal places (e.g., 12.50, not 12.5)
- Update prices consistently across similar items
- Consider creating price tiers for different sizes

## Security

### Authentication
- Sessions are managed by Appwrite
- Automatic logout on session expiry
- Manual logout available in header

### Permissions
- Only authenticated users can modify data
- Public users can only read menu data
- Configure additional roles in Appwrite for multiple admins

## Troubleshooting

### Can't Login
- Verify admin user exists in Appwrite Auth
- Check email and password are correct
- Ensure Appwrite project ID is correct in `.env`

### Data Not Showing
- Check browser console for errors
- Verify collection IDs in `.env` match Appwrite
- Ensure permissions are set correctly in Appwrite

### Can't Save Changes
- Check browser console for error messages
- Verify all required fields are filled
- Ensure you have proper permissions in Appwrite

### Connection Errors
- Verify Appwrite endpoint in `.env`
- Check internet connection
- Confirm Appwrite project is active

## Environment Variables

Required in `.env` file:

```env
REACT_APP_APPWRITE_ENDPOINT=https://fra.cloud.appwrite.io/v1
REACT_APP_APPWRITE_PROJECT_ID=698e354d002b0a79c630
REACT_APP_APPWRITE_DATABASE_ID=restaurant_db
REACT_APP_APPWRITE_CATEGORIES_COLLECTION_ID=categories
REACT_APP_APPWRITE_MENU_ITEMS_COLLECTION_ID=menu_items
```

**Important**: Restart the development server after changing `.env` values.

## Tips & Tricks

1. **Bulk Updates**: Use the order field strategically to reorder multiple items
2. **Seasonal Items**: Use the "Available" toggle for seasonal specials
3. **Testing**: Create test categories/items to familiarize yourself with the system
4. **Backup**: Regularly export your data from Appwrite console
5. **Images**: Currently text-based; image URLs can be added to the image field for future use

## Future Enhancements

Potential features to add:
- Image upload functionality
- Bulk import/export
- Menu item duplication
- Advanced filtering and search
- Sales analytics
- Multi-language support for menu items
- Customer reviews integration

## Support

For issues:
1. Check browser console for errors
2. Review Appwrite logs in the console
3. Verify all setup steps in `APPWRITE_SETUP.md`
4. Check that all dependencies are installed

## Quick Reference

| Action | Path | Auth Required |
|--------|------|---------------|
| View Website | `/` | No |
| Admin Login | `/admin` | No |
| Admin Dashboard | `/admin/dashboard` | Yes |

| Shortcut | Action |
|----------|--------|
| Click category name | View category details |
| Click "+ Add" | Open creation modal |
| Click "Edit" | Open edit modal |
| Click "Delete" | Delete with confirmation |
| ESC key | Close modal |

---

**Remember**: Always test changes in a development environment before deploying to production!
