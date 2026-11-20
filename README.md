# Lab Math

A pediatric IV fluid calculator for computing dextrose concentrations and fluid volumes.

## Prescription Overview

Lab Math is a web-based calculator designed to help healthcare professionals quickly and accurately calculate pediatric IV fluid parameters using D70% (70% dextrose) solutions. The application provides an intuitive interface for computing fluid volumes and dextrose concentrations, along with calculations for sodium chloride, potassium chloride, heparin, and sterile water volumes.

### Therapeutic Capabilities

- **Dextrose Calculation**: Computes D70% dextrose volumes based on desired concentration
- **Sodium Chloride (NaCl)**: Calculates 23.4% NaCl volumes
- **Potassium Chloride (KCl)**: Determines potassium chloride volumes using 2 mEq/mL standard
- **Heparin**: Calculates heparin volumes using 100 unit/mL standard
- **Sterile Water**: Automatically computes remaining sterile water volume needed
- **Real-time Calculations**: Results update instantly as parameters are entered

## Dispensary Access

The application is deployed and available at: http://labmath.s3-website.us-east-2.amazonaws.com/

## Pharmaceutical Stack

- **Frontend Framework**: React 16.4
- **Build Tool**: Create React App (react-scripts)
- **Hosting**: AWS S3 static website
- **Package Manager**: Yarn or npm

## Compounding Instructions

### Prerequisites

- Node.js (v8 or higher recommended)
- npm or Yarn

### Preparation

1. Clone the repository:
   ```bash
   git clone https://github.com/thebho/labmath.git
   cd labmath
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

### Formulation

To start the development server:

```bash
npm start
# or
yarn start
```

The application will open in your browser at `http://localhost:3000` and automatically reload when you make changes.

### Production Dispensing

To create an optimized production build:

```bash
npm run build
# or
yarn build
```

The build output will be in the `build/` directory, ready for deployment.

### Quality Assurance

To run the test suite:

```bash
npm test
# or
yarn test
```

## Dosage Administration

1. Open the application in your web browser
2. Enter the required parameters:
   - **Total Volume**: The desired total volume in mL
   - **Dextrose Concentration**: The target dextrose percentage
   - **NaCl Concentration**: The target sodium chloride percentage
   - **mEq per Liter**: Potassium chloride concentration (optional)
   - **Units per Liter**: Heparin concentration (optional)
3. The calculator will automatically compute:
   - Volume of D70% dextrose needed
   - Volume of 23.4% NaCl needed
   - Volume of potassium chloride needed
   - Volume of heparin needed
   - Remaining sterile water volume
4. Results are displayed immediately for clinical reference

## Compounding Workspace

```
labmath/
├── public/              # Static assets and HTML template
├── src/
│   ├── App.js          # Main application component
│   ├── App.css         # Application styles
│   ├── simple.js       # Calculator logic component
│   ├── volinput.js     # Volume input component
│   ├── simple.css      # Calculator styles
│   └── index.js        # React entry point
├── package.json        # Project dependencies and scripts
└── README.md          # This file
```

## Contraindications & Warnings

- **React Scripts Version**: The project uses react-scripts 1.1.4, which is outdated. Consider upgrading to a more recent version for security updates and improved build performance.
- **Input Validation**: The calculator does not validate clinical parameters (e.g., maximum safe concentrations or volumes). Users should verify calculations against clinical guidelines.
- **Decimal Precision**: Results are rounded to 2 decimal places, which may not be sufficient for all clinical scenarios. Consider implementing configurable precision.
- **Browser Compatibility**: Testing has been limited. Verify compatibility with all target browsers and devices.
- **Accessibility**: The application may not fully comply with WCAG accessibility standards. Consider adding ARIA labels and keyboard navigation improvements.

## Collaboration & Refills

Contributions are welcome. Please feel free to submit a pull request or open an issue for bugs and feature requests.

## Licensing & Regulations

See the LICENSE file for details.
