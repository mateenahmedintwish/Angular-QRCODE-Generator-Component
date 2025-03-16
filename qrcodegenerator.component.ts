import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Component, ElementRef, Inject, PLATFORM_ID, Renderer2, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { Meta, Title } from '@angular/platform-browser';
import QRCode from 'qrcode';

@Component({
  selector: 'app-qrcodegenerator',
  standalone: true,
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    FormsModule,
    MatCardModule,
  ],
  templateUrl: './qrcodegenerator.component.html',
  styleUrl: './qrcodegenerator.component.scss',
})
export class QrcodegeneratorComponent {
  @ViewChild('canvas', { static: false }) canvas!: ElementRef; // Make it non-static
  qrlink: any = '';
  qr_generated= false

  constructor(@Inject(PLATFORM_ID) private platformId: any,
      private titleService: Title,
      private metaService: Meta,
      private renderer: Renderer2
      ) {
        this.setSEO();
      }
  
    ngAfterViewInit() {
      this.addJsonLd();
    }

  generate() {
    if (!this.qrlink) return;

    // Ensure the canvas exists before trying to use it
    setTimeout(() => {
      if (this.canvas) {
        const canvasElement = this.canvas.nativeElement;
        QRCode.toCanvas(
          canvasElement,
          this.qrlink,
          { width: 800 },
          (error: any) => {
            if (error) console.error(error);
          }
        );

        this.qr_generated = true;
      } else {
        console.warn('Canvas element not found');
      }
    }, 0);
  }

  downloadQRCode() {
    if (this.canvas) {
      const canvasElement = this.canvas.nativeElement;
      const image = canvasElement.toDataURL('image/png');

      // Create a temporary anchor element to trigger the download
      const link = document.createElement('a');
      link.href = image;
      link.download = 'qrcode.png';
      link.click();
    } else {
      console.warn('Canvas element not found');
    }
  }

  private setSEO() {
    this.titleService.setTitle(
      'QR Code Generator | Create Custom QR Codes for Free'
    );
    this.metaService.addTags([
      {
        name: 'description',
        content:
          'Generate high-quality QR codes for URLs, business links, text, and more. Download QR codes instantly for free.',
      },
      {
        name: 'keywords',
        content:
          'QR Code Generator, Free QR Code Maker, Custom QR Code, QR Code for Business, QR Code for Website, Download QR Code PNG',
      },
      {
        property: 'og:title',
        content: 'QR Code Generator | Create Custom QR Codes for Free',
      },
      {
        property: 'og:description',
        content:
          'Easily generate and download QR codes for your website, business, and personal use. Perfect for marketing and customer engagement.',
      },
      {
        property: 'og:image',
        content: 'https://toolteeno.com/assets/tools/qr_code_scanner.svg',
      },
      {
        property: 'og:url',
        content: 'https://toolteeno.com/qr-code-generator',
      },
    ]);
  }

  private addJsonLd() {
    if (isPlatformBrowser(this.platformId)) {
      const jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'SoftwareApplication',
        name: 'QR Code Generator',
        description:
          'A free tool to generate and download QR codes for websites, business links, and personal use.',
        applicationCategory: 'Utility',
        operatingSystem: 'Web',
        offers: {
          '@type': 'Offer',
          price: '0.00',
          priceCurrency: 'USD',
        },
        url: 'https://toolteeno.com/qr-code-generator',
        author: {
          '@type': 'Organization',
          name: 'ToolTeeno',
        },
      };
  
      const script = this.renderer.createElement('script');
      script.type = 'application/ld+json';
      script.text = JSON.stringify(jsonLd);
      this.renderer.appendChild(document.head, script);
    }
  }
}
