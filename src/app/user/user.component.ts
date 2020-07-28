import { Component, OnInit } from '@angular/core';

import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  loginForm;
  constructor(
    private formBuilder: FormBuilder,
  ) {
    this.loginForm = this.formBuilder.group({
      email: '',
      password: ''
    });
   }

  ngOnInit(): void {
  }

  onSubmit(customerData) {
    // Process checkout data here
    this.loginForm.reset();

    console.warn('Logado');
  }

}
