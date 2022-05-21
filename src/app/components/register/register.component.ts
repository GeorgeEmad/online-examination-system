import { Component, Inject, OnInit } from '@angular/core';
import AuthServiceService from '../../services/auth-service.service'   
import { User } from '../../User';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  providers:  [ AuthServiceService ]
})


export class RegisterComponent implements OnInit {

  constructor(private authService:AuthServiceService) { } 

  regForm = new FormGroup({
    name: new FormControl('',[Validators.required,Validators.minLength(2)]),
    password: new FormControl('',[Validators.required,Validators.minLength(6)]),
    email: new FormControl('',[Validators.required,Validators.email])
  })



  user:User ={ 
    name: '',
    email: '',
    password: '',
    role: ''
  }

  userRegister(){
    this.user.name = this.regForm.controls['name'].value
    this.user.email = this.regForm.controls['email'].value
    this.user.password = this.regForm.controls['password'].value

    this.authService.register(this.user)
  }
  ngOnInit(): void {
  }

}
