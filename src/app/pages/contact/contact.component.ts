import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { ContactService } from '../../services/contact.service';
import { Email } from '../../models/email.model';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {



  constructor( private fb: FormBuilder, private contactService: ContactService) { }

  contactForm: FormGroup = this.fb.group({
    name: [''],
    email: [''],
    phone: [''],
    message: [''],
  });


  ngOnInit(): void {
  }

// getters
  get name() {
    return this.contactForm.get('name');
  }

  get email() {
    return this.contactForm.get('email');
  }

  get phone() {
    return this.contactForm.get('phone');
  }
  get message() {
    return this.contactForm.get('message');
  }

  sendMail(){
    const newMail: Email = this.contactForm.value;
    const name = this.name.value;
    const email = this.email.value;
    const phone = this.phone.value;
    const message = this.message.value;
    this.contactService.sendMail(name, email, phone, message).subscribe(
      (error) => console.log(error)
    );
    Swal.fire('Your message is sent. Thanks :)');
  }


}

