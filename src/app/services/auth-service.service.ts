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
  role:any = ''

  fetchUserRole(user:any) {
    this.http.get("https://hci-project-f3637-default-rtdb.firebaseio.com/user.json").subscribe( (res:any) => {
      let users:any = Object.keys(res).map((key) => { return res[key] });
      for(let i = 0; i < users.length ; i++){
        if(users[i].email == user.email){
          console.log(users[i])
          localStorage.setItem('role', users[i].role);
          this.router.navigate(['/']);
        }
      }
    })
  }

  fetchUsers(): Observable<Object> {
    return this.http.get("https://hci-project-f3637-default-rtdb.firebaseio.com/user.json",)
  }



  deleteUser(user:User){
    // this.http.post("https://identitytoolkit.googleapis.com/v1/accounts:delete?key=AIzaSyDYKyzaGQN02z7idmosPvwAZwOHUVANx4U", {
    //   idToken: user.id,
    // }).subscribe( (res:any) => {
    //     console.log(res)
    //   }
    // )

    this.http.delete(`https://hci-project-f3637-default-rtdb.firebaseio.com/user/${user.key}.json`).subscribe( (res:any) => {
      console.log(res)
    })
  }

  setUserRole(user:any) {
    localStorage.setItem('role', user.role);
    this.http.post("https://hci-project-f3637-default-rtdb.firebaseio.com/user.json", user).subscribe( (res:any) => {
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
      this.fetchUserRole(user)      
      }
    )
  }

  isLoggedIn():boolean{
    return  localStorage.getItem('idToken') !== null
  }

  getRole() {
    this.role = localStorage.getItem('role');
    return this.role;
  }
  


}


