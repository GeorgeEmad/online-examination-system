import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../User';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export default class AuthServiceService {
  constructor(private http: HttpClient, private router: Router) { }
  
  private dbUrl = "https://hci-project-f3637-default-rtdb.firebaseio.com/exams.json";
  private showAddTask: boolean = false;

  getExams(): Observable<Object> {
    return this.http.get(this.dbUrl)
  }


  setUserRole(user:User) {
    this.http.post("https://hci-project-f3637-default-rtdb.firebaseio.com/user.json", user).subscribe( res => {
      console.log(res)
    })
  }

  register(user:User) {
    this.http.post("https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=AIzaSyDYKyzaGQN02z7idmosPvwAZwOHUVANx4U", {
      email: user.email,
      password: user.password,
      returnSecureToken: true
    }).subscribe( (res:any) => {
      let id = res.idToken
      localStorage.setItem('idToken', id)
      user.id = id
      this.setUserRole(user)
      this.router.navigate(['/']);
    })
  }


  login(user:User):void {
    this.http.post("https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=AIzaSyDYKyzaGQN02z7idmosPvwAZwOHUVANx4U", {
      email: user.email,
      password: user.password,
      returnSecureToken: true
    }).subscribe( (res:any) => {
      let id = res.idToken
      localStorage.setItem('idToken', id)
      user.id = id
      this.router.navigate(['/']);
    }
    // ,
    // (error:any) => {
    //     console.log(error)
    //   }
      )
  }
}


