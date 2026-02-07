# Quick Image Download Guide for Your Restaurant Website

## 🎯 **Immediate Action Steps**

### 1. **Hero Image** (Main background)
**Go to**: https://unsplash.com/photos/restaurant-interior
**Search**: "elegant restaurant dining room dark lighting"
**Download**: Large size (1920x1080+)
**Save as**: `src/assets/images/hero-restaurant.jpg`

### 2. **About Section Image**
**Go to**: https://unsplash.com/photos/restaurant-interior-design  
**Search**: "upscale restaurant interior warm lighting"
**Download**: Medium size (800x600+)
**Save as**: `src/assets/images/about-interior.jpg`

### 3. **Food Images** (Optional for menu)
**Go to**: https://unsplash.com/photos/gourmet-food
**Search**: "fine dining food plating", "gourmet dishes"
**Download**: 3-5 food images
**Save as**: `src/assets/images/dish-1.jpg`, `dish-2.jpg`, etc.

## 🔧 **After Downloading Images**

### Update Hero Component:
1. Open `src/components/Hero.css`
2. Replace line 3-4 with:
```css
background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
            url('../assets/images/hero-restaurant.jpg');
```

### Update About Component:
1. Open `src/components/About.js`
2. Add at top: `import aboutImage from '../assets/images/about-interior.jpg';`
3. Replace the `image-placeholder` div with:
```jsx
<img src={aboutImage} alt="Restaurant Interior" style={{width: '100%', height: '400px', objectFit: 'cover', borderRadius: '8px'}} />
```

## 📱 **Alternative: Use Placeholder Service**
If you want to test immediately, I can update the components to use placeholder images from a service like Lorem Picsum.

## 🎨 **Recommended Image Styles**
- **Hero**: Dark, moody restaurant interior with warm lighting
- **About**: Bright, welcoming dining space or chef in action  
- **Food**: Clean, professional food photography with elegant plating

Would you like me to update the components with placeholder images first, or do you want to download real images from Unsplash?