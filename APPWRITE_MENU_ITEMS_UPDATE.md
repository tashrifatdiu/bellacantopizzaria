# Appwrite Menu Items Collection Update

## Adding imageUrl Field to Menu Items

To add the optional image field to your menu items, you need to update the Appwrite collection schema.

### Steps to Update in Appwrite Console:

1. **Login to Appwrite Console**
   - Go to https://cloud.appwrite.io/console
   - Login with your credentials

2. **Navigate to Your Database**
   - Click on "Databases" in the left sidebar
   - Select your restaurant database (the one with ID: `REACT_APP_APPWRITE_DATABASE_ID`)

3. **Open Menu Items Collection**
   - Find and click on the "menu_items" collection (ID: `REACT_APP_APPWRITE_MENU_ITEMS_COLLECTION_ID`)
   - Click on the "Attributes" tab

4. **Add New Attribute**
   - Click the "+ Create Attribute" button
   - Select "String" as the attribute type

5. **Configure the Attribute**
   - **Attribute Key**: `imageUrl`
   - **Size**: `2000` (to accommodate long URLs)
   - **Required**: `No` (uncheck this - it's optional)
   - **Array**: `No` (uncheck this)
   - **Default Value**: Leave empty
   - Click "Create"

6. **Wait for Attribute Creation**
   - Appwrite will create the attribute
   - Wait for the status to show "Available" (usually takes a few seconds)

### Verification

After adding the attribute, you should see it in the attributes list:
- `imageUrl` - String (2000) - Optional

### Using the Image Field

#### In Admin Panel:
1. Go to `/admin/dashboard`
2. Navigate to "Menu Items" tab
3. When adding or editing an item, you'll see a new field: "Item Image URL (optional)"
4. Paste any image URL (e.g., from Unsplash, your own hosting, etc.)
5. Save the item

#### Image URL Sources:
- **Unsplash**: https://unsplash.com/ (free high-quality images)
- **Your own hosting**: Upload images to your server or cloud storage
- **CDN**: Use any CDN service like Cloudinary, ImageKit, etc.

#### Example Image URLs:
```
https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400
https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=400
https://images.unsplash.com/photo-1612874742237-6526221588e3?w=400
```

### Frontend Display

Once you add images to menu items:
- **Admin Panel**: Images will appear at the top of each menu item card
- **Customer Menu**: Images will display above the item name and description
- **No Image**: If no image URL is provided, the item displays normally without an image

### Available Status

The "available" field now properly filters items on the frontend:
- **Available = Yes**: Item shows on the customer menu
- **Available = No**: Item is hidden from customers but visible in admin panel

To hide an item from customers:
1. Edit the menu item in admin panel
2. Uncheck "This item is available"
3. Save
4. The item will no longer appear on the public menu

### Troubleshooting

**Images not showing?**
- Check that the URL is valid and publicly accessible
- Make sure the URL starts with `https://`
- Try opening the URL in a new browser tab to verify it works
- Check browser console for CORS or loading errors

**Available filter not working?**
- Make sure the `available` attribute exists in your collection
- It should be a Boolean type
- Default value should be `true`
- Verify in Appwrite Console under Attributes

### Need Help?

If you encounter any issues:
1. Check the browser console for errors (F12)
2. Verify all environment variables in `.env` are correct
3. Ensure you're logged in as admin
4. Try refreshing the page after making changes in Appwrite Console
