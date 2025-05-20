import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  template: `
    <footer class="footer">
      <div class="container">
        <p>
          Made with ❤️ by
          <a
            href="https://www.seolyphant.com/"
            target="_blank"
            rel="noopener noreferrer nofollow"
            >Seolyphant</a
          >
        </p>
      </div>
    </footer>
  `,
  styles: [
    `
      .footer {
        padding: 1rem 0;
        background-color: #f8f9fa;
        text-align: center;
        margin-top: auto;
      }
      .footer a {
        color: #007bff;
        text-decoration: none;
      }
      .footer a:hover {
        text-decoration: underline;
      }
    `,
  ],
})
export class FooterComponent {}
