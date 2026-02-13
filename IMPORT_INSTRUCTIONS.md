# CSV Import Instructions for Appwrite

## Step 1: Import Categories First

1. Go to Appwrite Console → Databases → restaurant_db → categories collection
2. Click **Import** button
3. Upload `categories.csv`
4. Click Import
5. **IMPORTANT:** After import, note down the category IDs:

Open each category and copy its ID:
- Starters: `___________________` (copy ID here)
- Pizza: `___________________`
- Pasta: `___________________`
- Salads: `___________________`
- Desserts: `___________________`
- Drinks: `___________________`

## Step 2: Update menu_items.csv with Category IDs

Before importing menu items, you need to replace the category names with actual IDs.

### Option A: Manual Find & Replace (Fastest)

Open `menu_items.csv` in a text editor and do Find & Replace:

1. Find: `Starters,` → Replace with: `YOUR_STARTERS_ID,`
2. Find: `Pizza,` → Replace with: `YOUR_PIZZA_ID,`
3. Find: `Pasta,` → Replace with: `YOUR_PASTA_ID,`
4. Find: `Salads,` → Replace with: `YOUR_SALADS_ID,`
5. Find: `Desserts,` → Replace with: `YOUR_DESSERTS_ID,`
6. Find: `Drinks,` → Replace with: `YOUR_DRINKS_ID,`

Also update the header:
- Find: `categoryName,` → Replace with: `categoryId,`

### Option B: Use the Admin Panel (Slower but Easier)

Skip the CSV import for menu items and use your admin panel at `/admin/dashboard` to add items manually. The panel is designed for this and will handle category linking automatically.

## Step 3: Import Menu Items

1. Go to Appwrite Console → Databases → restaurant_db → menu_items collection
2. Click **Import** button
3. Upload the updated `menu_items.csv`
4. Map columns and import

## Alternative: Use Admin Panel

The easiest way is to just use your admin panel at `http://localhost:3000/admin/dashboard`:
- Categories are already imported
- Add menu items one by one (takes about 1 minute per item)
- No need to worry about IDs

For 130 items, this would take about 2 hours, but it's the most reliable method.
