# Project Pricing Calculator

A comprehensive web-based calculator for programmers to estimate project prices based on scope, complexity, and experience level.

## 🌟 Features

### Core Functionality
- **Real-time price calculation** based on project requirements
- **Hour estimation** that updates dynamically as you build your project
- **Professional pricing algorithm** considering multiple factors
- **Payment installment options** (3, 6, 12 months)

### Technical Features
- **10 technical requirements** checkboxes covering all aspects of development
- **4 programmer experience levels** (Inexperienced, Junior, Pleno, Senior)
- **Complexity levels** (Low, Medium, High, Very High)
- **Tech stack selection** with pricing multipliers
- **Team size options** (1-4+ people)
- **Optional timeline** with rush job pricing

### User Experience
- **3 languages**: English, Portuguese, Spanish
- **3 currencies**: USD, BRL, EUR with real-time conversion
- **Light/Dark theme** with smooth animations
- **Particle background effect** with mouse interaction
- **Help system** with detailed explanations for every field
- **Responsive design** works on all devices

### Advanced Features
- **IndexedDB persistence** - saves all user preferences
- **Real-time hours calculation** updates as you type
- **Professional result breakdown** with all pricing factors
- **Modern monochromatic design** with smooth transitions

## 🚀 Quick Start

### Online Version
Visit the live calculator at: [Your deployment URL]

### Local Development

1. **Clone or download** the project files
2. **Open terminal** in the project directory
3. **Start local server**:
   ```bash
   python3 -m http.server 8000
   ```
4. **Open browser** and go to `http://localhost:8000`

## 📋 How to Use

### 1. Basic Information
- **Project Name**: Enter a descriptive name for your project
- **Number of Features**: Count each distinct functionality (login, cart, admin panel, etc.)

### 2. Technical Requirements
Check all applicable technical requirements:
- Frontend Development
- Backend Development
- Database Design
- API Development
- Responsive Design
- Testing (Unit/Integration)
- Deployment & Hosting Setup
- Documentation
- 3 Months Maintenance
- Technical Support

### 3. Project Settings
- **Complexity**: Choose project complexity level
- **Timeline**: Optionally enable and set project deadline (affects pricing)
- **Programmer Level**: Select your experience level (affects hourly rate)
- **Team Size**: Choose team configuration
- **Tech Stack**: Select preferred technology stack

### 4. Preferences
- **Language**: Choose interface language (English/Portuguese/Spanish)
- **Currency**: Select pricing currency (USD/BRL/EUR)
- **Theme**: Toggle between light and dark modes

### 5. Calculate Price
Click "Calculate Price" to see:
- **Total project cost**
- **Estimated hours required**
- **Payment installment options**
- **Detailed pricing breakdown**

## 💰 Pricing Algorithm

### Hourly Rates by Experience Level
- **Inexperienced**: $6/hour (~R$30)
- **Junior**: $8/hour (~R$40)
- **Pleno**: $12/hour (~R$60)
- **Senior**: $18/hour (~R$90)

### Base Hours Calculation
- **8 hours per feature** (base functionality)
- **Additional hours** for technical requirements:
  - Frontend: +20 hours
  - Backend: +30 hours
  - Database: +15 hours
  - API: +25 hours
  - Responsive: +10 hours
  - Testing: +15 hours
  - Deployment: +8 hours
  - Documentation: +12 hours
  - Maintenance: +40 hours
  - Support: +20 hours

### Multipliers Applied
- **Complexity**: 1.0x to 2.0x (based on difficulty)
- **Tech Stack**: 1.0x to 2.2x (based on technology choice)
- **Timeline**: 1.0x to 1.35x (rush jobs cost more)
- **Team Size**: 1.0x to 1.15x (larger teams cost more)

## 🎨 Design Features

### Monochromatic Theme
- **Gray color palette** throughout the interface
- **No bright colors** for professional appearance
- **Consistent visual hierarchy**

### Interactive Elements
- **Particle background** with mouse-following connections
- **Smooth animations** on form interactions
- **Custom-styled checkboxes** with checkmarks
- **Hover effects** on all interactive elements

### Responsive Design
- **Mobile-friendly** layout
- **Tablet optimized** interface
- **Desktop enhanced** experience

## 🛠️ Technical Stack

- **HTML5** - Semantic markup
- **CSS3** - Modern styling with CSS Grid/Flexbox
- **Vanilla JavaScript** - No frameworks, pure JS
- **IndexedDB** - Client-side data persistence
- **Canvas API** - Particle effect animations

## 📁 Project Structure

```
project-pricing-calculator/
├── index.html          # Main HTML file
├── styles.css          # CSS styling
├── script.js           # JavaScript functionality
└── README.md           # This file
```

## 🌍 Supported Languages

### English (en)
- Complete interface translation
- Help documentation in English

### Portuguese (pt)
- Complete interface translation
- Help documentation in Portuguese

### Spanish (es)
- Complete interface translation
- Help documentation in Spanish

## 💡 Help System

Click the **"!" buttons** next to any form field to see detailed explanations:

- **Project Name**: How naming helps with organization
- **Features**: What counts as a feature
- **Complexity**: Detailed complexity level explanations
- **Timeline**: Optional deadline information
- **Team Size**: Team configuration guidance
- **Programmer Level**: Experience level pricing impact

## 🔧 Customization

### Adding New Languages
1. Add language code to `translations` object in `script.js`
2. Include all required translation keys
3. Add language option to HTML select element

### Modifying Pricing
- Edit `hourlyRateByLevel` for different experience rates
- Adjust `hoursAdditions` for different technical requirements
- Modify multipliers in the calculation functions

### Styling Changes
- Update CSS custom properties for color scheme
- Modify particle effect parameters
- Adjust responsive breakpoints

## 📊 Use Cases

### For Programmers
- **Quote preparation** for potential clients
- **Project planning** and time estimation
- **Pricing strategy** based on experience level
- **Scope definition** with clear deliverables

### For Clients
- **Budget planning** for development projects
- **Understanding pricing factors** in development costs
- **Comparing options** across different requirements

### For Agencies
- **Standardized quoting** process
- **Team capacity planning**
- **Project profitability** analysis

## 🤝 Contributing

Feel free to contribute by:
- Adding new languages
- Improving the pricing algorithm
- Enhancing the user interface
- Adding new features

## 📄 License

This project is open source and available under the MIT License.

## 📞 Support

For questions or suggestions, please create an issue in the project repository.

---

**Built with ❤️ for the developer community**
