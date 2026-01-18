import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  contactForm: FormGroup;
  submitted = false;
  isSubmitting = false;
  errorMessage = '';

  constructor(private fb: FormBuilder, private http: HttpClient) {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.contactForm.valid) {
      this.isSubmitting = true;
      this.errorMessage = '';
      
      this.http.post('https://mailing-sender.onrender.com/contact-adnangobeljic', this.contactForm.value, { responseType: 'text' })
        .subscribe({
          next: () => {
            this.submitted = true;
            this.isSubmitting = false;
            this.contactForm.reset();
            Object.keys(this.contactForm.controls).forEach(key => {
              this.contactForm.get(key)?.setErrors(null);
            });
            
            setTimeout(() => {
              this.submitted = false;
            }, 5000);
          },
          error: (error) => {
            console.error('Error sending message', error);
            this.errorMessage = 'Failed to send message. Please try again later.';
            this.isSubmitting = false;
          }
        });
    }
  }
}
