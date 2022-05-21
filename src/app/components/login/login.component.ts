import { Component, OnInit } from '@angular/core';
import AuthServiceService from '../../services/auth-service.service'   
import { User } from '../../User';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authService:AuthServiceService) { }

  loginForm = new FormGroup({
    password: new FormControl('',[Validators.required,Validators.minLength(6)]),
    email: new FormControl('',[Validators.required,Validators.email])
  })

  user:User ={ 
    email: '',
    password: '',
  }

  userLogin(){
    this.user.email = this.loginForm.controls['email'].value
    this.user.password = this.loginForm.controls['password'].value
    this.authService.login(this.user)
    
  }

  ngOnInit(): void {
  }

}
