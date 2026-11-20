# Lab Math

A pediatric IV fluid calculator for computing dextrose concentrations and fluid volumes.

## Overview

Lab Math is a web-based calculator designed to help healthcare professionals quickly and accurately calculate pediatric IV fluid parameters using D70% (70% dextrose) solutions. The application provides an intuitive interface for computing fluid volumes and dextrose concentrations.

## Live Application

The application is deployed and available at: http://labmath.s3-website.us-east-2.amazonaws.com/

## Tech Stack

- **Frontend Framework**: React 16.4
- **Build Tool**: Create React App (react-scripts)
- **Hosting**: AWS S3 static website
- **Package Manager**: Yarn or npm

## Getting Started

### Prerequisites

- Node.js (v8 or higher recommended)
- npm or Yarn

### Installation

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

### Development

To start the development server:

```bash
npm start
# or
yarn start
```

The application will open in your browser at `http://localhost:3000` and automatically reload when you make changes.

### Building for Production

To create an optimized production build:

```bash
npm run build
# or
yarn build
```

The build output will be in the `build/` directory, ready for deployment.

### Testing

To run the test suite:

```bash
npm test
# or
yarn test
```

## Usage

1. Open the application in your web browser
2. Enter the required patient parameters (weight, desired dextrose concentration, etc.)
3. The calculator will compute the necessary IV fluid volume and dextrose concentration
4. Results are displayed immediately for clinical reference

## Project Structure

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

## License

See the LICENSE file for details.

## Contributing

Contributions are welcome. Please feel free to submit a pull request or open an issue for bugs and feature requests.
