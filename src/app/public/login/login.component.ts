import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  // variables
  loginForm: FormGroup;
  submitted: boolean;
  // end of the variables

  constructor(private fb: FormBuilder) { }

  ngOnInit() {

    this.buildForm();
  }

  private buildForm() 
  {
    this.loginForm = this.fb.group({
      'email'    :['', Validators.required],
      'password':['', Validators.required]
    })
  }

  private login()
  {
    this.submitted = true;
    if(this.loginForm.valid)
    {
      // carry out the authentication process
    }
  }

  get email()
  {
    return this.loginForm.get('email');
  }
  get password()
  {
    return this.loginForm.get('password');
  }



}
