# LabMath - Pediatric IV Fluid Calculator

A React-based web application for calculating pediatric IV fluid compositions using D70% (70% dextrose solution).

## What This App Does

LabMath is a medical calculator designed to help healthcare professionals prepare pediatric IV fluid solutions. It calculates the required volumes of various components needed to create a custom IV fluid mixture based on:

- **Total Volume**: The desired total volume of the IV fluid
- **Dextrose (70%)**: Calculates the volume of 70% dextrose solution needed for a specified dextrose concentration
- **Sodium Chloride (23.4%)**: Calculates the volume of 23.4% NaCl solution needed for a specified sodium chloride concentration
- **Potassium Chloride (2 mEq/mL)**: Calculates the volume of potassium chloride needed for a specified mEq/L concentration
- **Heparin (100 unit/mL)**: Calculates the volume of heparin needed for a specified units/L concentration
- **Sterile Water**: Automatically calculates the remaining volume needed to reach the total volume

The app performs real-time calculations as you input values, making it easy to adjust parameters and see results instantly.

## How to Run

### Prerequisites

- Node.js (v8 or higher)
- npm or yarn package manager

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/thebho/labmath.git
   cd labmath
   ```

2. Install dependencies:
   ```bash
   npm install
   ```
   or
   ```bash
   yarn install
   ```

### Running the Development Server

Start the development server with:
```bash
npm start
```
or
```bash
yarn start
```

The app will open automatically in your default browser at `http://localhost:3000`. The page will reload whenever you make changes to the code.

### Building for Production

To create an optimized production build:
```bash
npm run build
```
or
```bash
yarn build
```

This creates a `build` folder with optimized files ready for deployment.

### Running Tests

To run the test suite:
```bash
npm test
```
or
```bash
yarn test
```

## Project Structure

```
labmath/
├── public/              # Static files
│   ├── index.html      # Main HTML file
│   ├── favicon.ico     # App icon
│   └── manifest.json   # PWA manifest
├── src/                # React source code
│   ├── App.js          # Main app component
│   ├── App.css         # App styles
│   ├── simple.js       # Calculator logic component
│   ├── simple.css      # Calculator styles
│   ├── volinput.js     # Volume input component
│   ├── index.js        # React entry point
│   └── index.css       # Global styles
├── package.json        # Project dependencies and scripts
└── README.md          # This file
```

## Technologies Used

- **React** (v16.4.0): JavaScript library for building user interfaces
- **React DOM** (v16.4.0): React package for working with the DOM
- **React Scripts** (v1.1.4): Build and development tools for Create React App

## Deployment

The app is currently deployed at: http://labmath.s3-website.us-east-2.amazonaws.com/

## License

See the LICENSE file for details.

## Notes

This calculator is designed as a tool to assist healthcare professionals. Always verify calculations and follow institutional protocols when preparing IV fluids.
