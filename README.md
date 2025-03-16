# QR Code Generator

This is a standalone Angular component that generates QR codes from user input. It supports generating QR codes, downloading them as PNG images, and includes SEO enhancements.

## Features

- **Generate QR Codes**: Enter a URL or text and generate a QR code instantly.
- **Download as PNG**: Download the generated QR code as an image file.
- **SEO Optimized**: Adds meta tags and JSON-LD schema for improved search engine visibility.
- **Responsive UI**: Uses Angular Material components for a clean and modern design.

## Installation

1. Navigate to your Angular project's `src` folder:
   ```sh
   cd path/to/your-angular-project/src
   ```
2. Clone the repository:
   ```sh
   git clone https://github.com/yourusername/qrcode-generator.git
   ```
3. Import the component in `app.module.ts`:
   ```typescript
   import { QrcodegeneratorComponent } from './qrcode-generator/qrcodegenerator.component';
   ```
4. Go to the root of your angular project and install the required dependencies:
   ```sh
   npm install @angular/common @angular/core @angular/forms @angular/material @angular/platform-browser qrcode
   ```

## Usage

### Using the Component

Include it in your template:

```html
<app-qrcodegenerator></app-qrcodegenerator>
```

## How It Works

1. Enter a URL or text in the input field.
2. Click the **Generate** button to create a QR code.
3. Click the **Download** button to save the QR code as a PNG file.

## Technologies Used

- **Angular** (Standalone Component)
- **Angular Material** (UI Components)
- **QRCode.js** (QR Code Generation)
- **TypeScript**
- **SEO Optimization** (Meta tags & JSON-LD schema)

## SEO Optimization

The component sets dynamic metadata for better visibility on search engines:

- **Title & Description**
- **Open Graph Meta Tags** (for social sharing)
- **JSON-LD Schema** (for structured data)

## Demo

![QR Code Generator](https://toolteeno.com/assets/tools/qr_code_scanner.svg)
https://toolteeno.com/qr-code-generator


## License

This project is licensed under the MIT License.

---

Feel free to contribute by submitting pull requests or issues!

