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

- **Node.js**: v8.0.0 or higher (v12+ recommended for better performance)
- **npm**: v5.0.0 or higher (comes with Node.js), or
- **Yarn**: v1.0.0 or higher (optional alternative to npm)
- **Git**: for cloning the repository
- A modern web browser (Chrome, Firefox, Safari, or Edge)

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/thebho/labmath.git
   cd labmath
   ```

2. **Verify Node.js and npm installation**:
   ```bash
   node --version
   npm --version
   ```

3. **Install dependencies**:
   ```bash
   npm install
   ```
   
   Or if you prefer Yarn:
   ```bash
   yarn install
   ```

   This will install all required packages listed in `package.json`.

### Development

To start the development server:

```bash
npm start
```

Or with Yarn:
```bash
yarn start
```

The application will automatically open in your browser at `http://localhost:3000`. The page will reload automatically when you make changes to the code.

### Building for Production

To create an optimized production build:

```bash
npm run build
```

Or with Yarn:
```bash
yarn build
```

The build output will be in the `build/` directory, ready for deployment to AWS S3 or other hosting services.

### Testing

To run the test suite:

```bash
npm test
```

Or with Yarn:
```bash
yarn test
```

Press `a` to run all tests, or follow the interactive prompts to run specific tests.

## Troubleshooting

### Port 3000 already in use
If port 3000 is already in use, you can specify a different port:
```bash
PORT=3001 npm start
```

### Dependencies installation fails
Try clearing the npm cache and reinstalling:
```bash
npm cache clean --force
rm -rf node_modules package-lock.json
npm install
```

### Module not found errors
Ensure you're in the correct directory (`labmath/`) and have run `npm install`:
```bash
cd labmath
npm install
```

### Build fails
Try removing the build directory and rebuilding:
```bash
rm -rf build
npm run build
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
