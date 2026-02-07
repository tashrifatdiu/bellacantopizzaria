# Restaurant Website Image Integration Guide

## Step 1: Download Images
1. Visit https://unsplash.com/s/photos/fine-dining-restaurant
2. Download these specific types:
   - Hero image: 1920x1080 elegant restaurant interior
   - About image: 800x600 dining room or chef
   - Food images: High-res gourmet dishes

## Step 2: Add Images to Project
1. Create `src/assets/images/` folder
2. Save images with descriptive names:
   - `hero-restaurant.jpg`
   - `about-interior.jpg`
   - `dish-1.jpg`, `dish-2.jpg`, etc.

## Step 3: Update Components

### Hero Component (src/components/Hero.css):
Replace the background with:
```css
.hero {
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
              url('../assets/images/hero-restaurant.jpg');
  background-size: cover;
  background-position: center;
}
```

### About Component (src/components/About.js):
```javascript
import restaurantImage from '../assets/images/about-interior.jpg';

// Replace the image-placeholder div with:
<img src={restaurantImage} alt="Restaurant Interior" className="about-image" />
```

### Menu Component:
Add food images to menu items for visual appeal.

## Recommended Image Searches:
- "elegant restaurant dining room"
- "fine dining interior design"
- "gourmet food plating"
- "upscale restaurant atmosphere"
- "chef preparing food"
- "wine glasses restaurant"

## Image Optimization:
- Compress images before adding (use tinypng.com)
- Recommended formats: JPG for photos, PNG for graphics
- Max file size: 500KB per image for web performance