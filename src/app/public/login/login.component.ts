import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  // variables
  loginForm: FormGroup;
  submitted: boolean;
  failedAttempt: boolean;
  // end of the variables

  constructor(private fb: FormBuilder , private auth: AuthService) { }

  ngOnInit() {

    this.buildForm();
  }

  private buildForm() 
  {
    this.loginForm = this.fb.group({
      'userName'    :['', Validators.required],
      'password':['', Validators.required]
    })
  }

  public login()
  {
    this.submitted = true;
    if(this.loginForm.valid)
    {
      // carry out the authentication process
      this.auth.authenticate(this.userName.value, this.password.value)
      .subscribe((token) => {
        // case success
        console.log(token);
      },(error) => {error.error.error === 'invalid_grant' ? this.failedAttempt = true : this.failedAttempt = false; } );
    }
  }

  get userName()
  {
    return this.loginForm.get('userName');
  }
  get password()
  {
    return this.loginForm.get('password');
  }



}
