# Quick Menu Import Guide

Since you have hundreds of menu items, here are the fastest ways to add them:

## Option 1: Use Admin Panel (Recommended - No coding needed)

### Step 1: Create Categories First
Login to `/admin` and create these 6 categories:

1. **Starters** / **Entradas**
   - Image: `https://images.unsplash.com/photo-1541529086526-db283c563270?w=800&q=80`
   - Order: 10

2. **Pizza** / **Pizza**
   - Image: `https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=800&q=80`
   - Order: 20

3. **Pasta** / **Massa**
   - Image: `https://images.unsplash.com/photo-1612874742237-6526221588e3?w=800&q=80`
   - Order: 30

4. **Salads** / **Saladas**
   - Image: `https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800&q=80`
   - Order: 40

5. **Desserts** / **Sobremesas**
   - Image: `https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=800&q=80`
   - Order: 50

6. **Drinks** / **Bebidas**
   - Image: `https://images.unsplash.com/photo-1581006852262-e4307cf6283a?w=800&q=80`
   - Order: 60

### Step 2: Add Menu Items

For each category, add items using the admin panel. Here's a quick reference:

#### Starters (9 items):
1. Garlic Bread with Cheese - 2,50€
2. Avocado Toast - 6,00€
3. Garlic Finger with Cheese - 6,50€
4. Burrata - 6,50€
5. Pepperoni Roll - 6,99€
6. Cheese Stick - 6,99€
7. Shrimp Finger - 7,99€
8. Bruschetta Prosciutto - 4,99€
9. Bruschetta Milano - 4,99€

#### Pizza (32+ items):
Start with the most popular ones:
1. Pizza Margherita - M: 8,50€ / R: 9,50€
2. Pizza Funghi - M: 8,50€ / R: 9,50€
3. Pizza Parma - M: 8,50€ / R: 9,50€
4. Spicy Chorizo Pizza - M: 8,50€ / R: 9,50€
... (add more as needed)

#### Pasta (15+ items):
1. Tagliatelle Carbonara - 8,50€
2. Spaghetti Bolognese - 8,00€
3. Spaghetti Chicken - 8,00€
... (add more as needed)

#### Salads (5 items):
1. Greek Salad - 7,00€
2. Caprese Salad - 6,50€
3. Mixed Salad - 6,50€
4. Tuna Salad - 6,50€
5. Avocado Salad - 7,99€

#### Desserts (5+ items):
1. Pizza Nutella - 5,99€
2. Nutella and Banana Pizza - 6,50€
3. Ben & Jerry's Ice Cream - 3,50€ / 6,50€
... (add more as needed)

#### Drinks (20+ items):
1. Coca-Cola - 1,50€ / 3,50€
2. Coca-Cola Zero - 1,50€ / 3,50€
3. Red Bull - 2,50€
4. Water - 1,30€ / 2,50€
... (add more as needed)

## Option 2: Use Import Script (For developers)

If you're comfortable with Node.js:

### Step 1: Install node-appwrite
```bash
npm install node-appwrite
```

### Step 2: Create API Key in Appwrite
1. Go to Appwrite Console → Settings → API Keys
2. Click "Create API Key"
3. Name: "Menu Import"
4. Scopes: Select "documents.read" and "documents.write"
5. Copy the API key

### Step 3: Update import-menu.js
Open `import-menu.js` and replace `YOUR_API_KEY_HERE` with your actual API key

### Step 4: Run the script
```bash
node import-menu.js
```

This will create all categories and sample menu items automatically.

## Option 3: Appwrite Console (Direct)

1. Go to Appwrite Console
2. Navigate to Databases → restaurant_db
3. Click on "categories" or "menu_items"
4. Click "Create Document"
5. Fill in the fields manually

This is the slowest method but gives you full control.

## Tips for Faster Entry:

1. **Start with popular items** - Add your best-sellers first
2. **Use copy-paste** - Copy descriptions from menu.md
3. **Batch similar items** - Add all pizzas at once, then all pastas
4. **Use order increments** - 10, 20, 30... makes reordering easy
5. **Test as you go** - Check the website after adding a few items

## Time Estimates:

- **Categories only**: 5 minutes
- **Categories + 20 items**: 30 minutes
- **Categories + 50 items**: 1 hour
- **Full menu (100+ items)**: 2-3 hours

## Recommendation:

Start with **categories + 20-30 popular items** to get your website live quickly. You can always add more items later through the admin panel!

The admin panel is designed to be fast and easy - you can add an item in about 1 minute once you get the hang of it.
