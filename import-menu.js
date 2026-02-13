// Import Menu Items to Appwrite
// Run this script with: node import-menu.js

const { Client, Databases, ID } = require('node-appwrite');
require('dotenv').config();

// Initialize Appwrite
const client = new Client()
    .setEndpoint(process.env.REACT_APP_APPWRITE_ENDPOINT)
    .setProject(process.env.REACT_APP_APPWRITE_PROJECT_ID)
    .setKey(process.env.APPWRITE_API_KEY); // Add this to your .env file

const databases = new Databases(client);

const databaseId = process.env.REACT_APP_APPWRITE_DATABASE_ID;
const categoriesCollectionId = process.env.REACT_APP_APPWRITE_CATEGORIES_COLLECTION_ID;
const menuItemsCollectionId = process.env.REACT_APP_APPWRITE_MENU_ITEMS_COLLECTION_ID;

// Categories with images
const categories = [
    {
        name: 'Starters',
        nameEn: 'Starters',
        namePt: 'Entradas',
        description: 'Delicious appetizers to start your meal',
        imageUrl: 'https://images.unsplash.com/photo-1541529086526-db283c563270?w=800&q=80',
        order: 10
    },
    {
        name: 'Pizza',
        nameEn: 'Pizza',
        namePt: 'Pizza',
        description: 'Authentic Italian pizzas',
        imageUrl: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=800&q=80',
        order: 20
    },
    {
        name: 'Pasta',
        nameEn: 'Pasta',
        namePt: 'Massa',
        description: 'Fresh pasta dishes',
        imageUrl: 'https://images.unsplash.com/photo-1612874742237-6526221588e3?w=800&q=80',
        order: 30
    },
    {
        name: 'Salads',
        nameEn: 'Salads',
        namePt: 'Saladas',
        description: 'Fresh and healthy salads',
        imageUrl: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800&q=80',
        order: 40
    },
    {
        name: 'Desserts',
        nameEn: 'Desserts',
        namePt: 'Sobremesas',
        description: 'Sweet treats to end your meal',
        imageUrl: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=800&q=80',
        order: 50
    },
    {
        name: 'Drinks',
        nameEn: 'Drinks',
        namePt: 'Bebidas',
        description: 'Refreshing beverages',
        imageUrl: 'https://images.unsplash.com/photo-1581006852262-e4307cf6283a?w=800&q=80',
        order: 60
    }
];

// Menu items (sample - you'll need to add all items)
const menuItems = {
    'Starters': [
        { nameEn: 'Garlic Bread with Cheese', namePt: 'Pão de Alho com Queijo', descriptionEn: '100% mozzarella, garlic, oregano, olive oil', descriptionPt: '100% mozzarella, alho, orégãos, azeite', price: '2,50€', order: 10 },
        { nameEn: 'Avocado Toast', namePt: 'Torrada de Abacate', descriptionEn: 'Toast, avocado, feta, olive oil, salt, lemon, pepper', descriptionPt: 'Torrada, abacate, feta, azeite, sal, limão, pimenta', price: '6,00€', order: 20 },
        { nameEn: 'Garlic Finger with Cheese', namePt: 'Dedo de Alho com Queijo', descriptionEn: 'Cheese, garlic, butter, oregano', descriptionPt: 'Queijo, alho, manteiga, orégãos', price: '6,50€', order: 30 },
        { nameEn: 'Burrata', namePt: 'Burrata', descriptionEn: 'Burrata 120gm cheese, arugula, cherry tomatoes, olive oil, oregano', descriptionPt: 'Queijo burrata 120gm, rúcula, tomate cereja, azeite, orégãos', price: '6,50€', order: 40 },
        { nameEn: 'Pepperoni Roll (6 units)', namePt: 'Rolo de Pepperoni (6 unidades)', descriptionEn: 'Pepperoni, mozzarella, olive oil, oregano', descriptionPt: 'Pepperoni, mozzarella, azeite, orégãos', price: '6,99€', order: 50 },
        { nameEn: 'Cheese Stick', namePt: 'Palito de Queijo', descriptionEn: 'Made capatu, mozzarella, basil, oregano', descriptionPt: 'Feito capatu, mozzarella, manjericão, orégãos', price: '6,99€', order: 60 },
        { nameEn: 'Shrimp Finger', namePt: 'Dedo de Camarão', descriptionEn: 'Tomato sauce, mozzarella, shrimp, and mayonnaise', descriptionPt: 'Molho de tomate, mozzarella, camarão e maionese', price: '7,99€', order: 70 },
        { nameEn: 'Bruschetta Prosciutto', namePt: 'Bruschetta Prosciutto', descriptionEn: 'Toasted bread, ricotta cheese, ham, basil pesto', descriptionPt: 'Pão torrado, queijo ricota, presunto, pesto de manjericão', price: '4,99€', order: 80 },
        { nameEn: 'Bruschetta Milano', namePt: 'Bruschetta Milano', descriptionEn: 'Toasted buffalo bread, rocket, cherry tomatoes, fresh', descriptionPt: 'Pão de búfala torrado, rúcula, tomate cereja, fresco', price: '4,99€', order: 90 }
    ],
    'Pizza': [
        { nameEn: 'Pizza Margherita', namePt: 'Pizza Margherita', descriptionEn: 'Caputo flour, tomato sauce, mozzarella, Parmesan, Basil, oregano', descriptionPt: 'Farinha Caputo, molho de tomate, mozzarella, parmesão, manjericão, orégãos', price: 'M: 8,50€ / R: 9,50€', order: 10 },
        { nameEn: 'Pizza Funghi', namePt: 'Pizza Funghi', descriptionEn: 'Caputo flour, tomato sauce, mozzarella, mushrooms, olives, oregano', descriptionPt: 'Farinha Caputo, molho de tomate, mozzarella, cogumelos, azeitonas, orégãos', price: 'M: 8,50€ / R: 9,50€', order: 20 },
        { nameEn: 'Pizza Parma', namePt: 'Pizza Parma', descriptionEn: 'Caputo flour, tomato sauce, mozzarella, arugula, pomodorini, ham, olives, oregano', descriptionPt: 'Farinha Caputo, molho de tomate, mozzarella, rúcula, pomodorini, presunto, azeitonas, orégãos', price: 'M: 8,50€ / R: 9,50€', order: 30 },
        { nameEn: 'Spicy Chorizo Pizza', namePt: 'Pizza Chouriço Picante', descriptionEn: 'Caputo flour, tomato sauce, mozzarella, chorizo, oregano', descriptionPt: 'Farinha Caputo, molho de tomate, mozzarella, chouriço, orégãos', price: 'M: 8,50€ / R: 9,50€', order: 40 }
    ],
    'Pasta': [
        { nameEn: 'Tagliatelle Carbonara', namePt: 'Tagliatelle Carbonara', descriptionEn: 'Tagliatelle pasta, fresh cream, egg, smoked veal bacon, basil, parmesan', descriptionPt: 'Massa tagliatelle, natas frescas, ovo, bacon de vitela fumado, manjericão, parmesão', price: '8,50€', order: 10 },
        { nameEn: 'Spaghetti Bolognese', namePt: 'Esparguete à Bolonhesa', descriptionEn: 'Ground beef, tomato San Marzano, basil, parmesan', descriptionPt: 'Carne picada, tomate San Marzano, manjericão, parmesão', price: '8,00€', order: 20 }
    ],
    'Salads': [
        { nameEn: 'Greek Salad', namePt: 'Salada Grega', descriptionEn: 'Tomato, cucumber, green pepper, red onion, olive, feta cheese', descriptionPt: 'Tomate, pepino, pimento verde, cebola roxa, azeitona, queijo feta', price: '7,00€', order: 10 },
        { nameEn: 'Caprese Salad', namePt: 'Salada Caprese', descriptionEn: 'Tomato, buffalo mozzarella, basil, olive oil, oregano', descriptionPt: 'Tomate, mozzarella de búfala, manjericão, azeite, orégãos', price: '6,50€', order: 20 }
    ],
    'Desserts': [
        { nameEn: 'Pizza Nutella', namePt: 'Pizza Nutella', descriptionEn: 'Pizza with nutella', descriptionPt: 'Pizza com nutella', price: '5,99€', order: 10 },
        { nameEn: 'Nutella and Banana Pizza', namePt: 'Pizza Nutella e Banana', descriptionEn: 'Pizza with nutella and banana', descriptionPt: 'Pizza com nutella e banana', price: '6,50€', order: 20 },
        { nameEn: "Ben & Jerry's Ice Cream", namePt: "Gelado Ben & Jerry's", descriptionEn: 'Chocolate Fudge Brownie, Peanut Butter Cup, Cookie Dough, Strawberry Cheesecake', descriptionPt: 'Chocolate Fudge Brownie, Peanut Butter Cup, Cookie Dough, Strawberry Cheesecake', price: '100ml: 3,50€ / 465ml: 6,50€', order: 30 }
    ],
    'Drinks': [
        { nameEn: 'Coca-Cola', namePt: 'Coca-Cola', descriptionEn: '33cl / 1.5L', descriptionPt: '33cl / 1.5L', price: '1,50€ / 3,50€', order: 10 },
        { nameEn: 'Coca-Cola Zero', namePt: 'Coca-Cola Zero', descriptionEn: '33cl / 1.5L', descriptionPt: '33cl / 1.5L', price: '1,50€ / 3,50€', order: 20 },
        { nameEn: 'Red Bull', namePt: 'Red Bull', descriptionEn: '25cl', descriptionPt: '25cl', price: '2,50€', order: 30 },
        { nameEn: 'Water', namePt: 'Água', descriptionEn: '50cl / 1.5L', descriptionPt: '50cl / 1.5L', price: '1,30€ / 2,50€', order: 40 }
    ]
};

async function importData() {
    console.log('🚀 Starting menu import...\n');

    try {
        // Step 1: Create categories and store their IDs
        console.log('📁 Creating categories...');
        const categoryIds = {};

        for (const category of categories) {
            try {
                const result = await databases.createDocument(
                    databaseId,
                    categoriesCollectionId,
                    ID.unique(),
                    category
                );
                categoryIds[category.name] = result.$id;
                console.log(`✅ Created category: ${category.nameEn}`);
            } catch (error) {
                console.error(`❌ Error creating category ${category.nameEn}:`, error.message);
            }
        }

        console.log('\n🍕 Creating menu items...');

        // Step 2: Create menu items
        for (const [categoryName, items] of Object.entries(menuItems)) {
            const categoryId = categoryIds[categoryName];
            
            if (!categoryId) {
                console.error(`❌ Category ${categoryName} not found, skipping items`);
                continue;
            }

            console.log(`\n  Category: ${categoryName}`);
            
            for (const item of items) {
                try {
                    await databases.createDocument(
                        databaseId,
                        menuItemsCollectionId,
                        ID.unique(),
                        {
                            ...item,
                            categoryId: categoryId,
                            available: true
                        }
                    );
                    console.log(`  ✅ ${item.nameEn}`);
                } catch (error) {
                    console.error(`  ❌ Error creating ${item.nameEn}:`, error.message);
                }
            }
        }

        console.log('\n\n🎉 Import completed successfully!');
        console.log('\n📊 Summary:');
        console.log(`   Categories: ${categories.length}`);
        console.log(`   Menu Items: ${Object.values(menuItems).flat().length}`);
        console.log('\n💡 Note: This is a sample import. Add more items to the menuItems object for a complete menu.');

    } catch (error) {
        console.error('\n❌ Import failed:', error.message);
        console.error('\nMake sure:');
        console.error('1. You have created an API key in Appwrite Console');
        console.error('2. The API key is added to this script');
        console.error('3. Your .env file has correct values');
        console.error('4. Collections exist in Appwrite');
    }
}

// Run the import
importData();
