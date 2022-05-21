import { Component, OnInit } from '@angular/core';
import AuthServiceService from '../../services/auth-service.service'   
import{User} from '../../User'
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(private authService:AuthServiceService) { }
  isLoading:boolean = false
  users:User[]= []

  delete(user:User):void {
    this.authService.deleteUser(user)
    this.fetchUsers()
  }

  fetchUsers(){
    this.authService.fetchUsers().subscribe( (res:any) => {
      let users:any = Object.keys(res).map((key) => {
        let tempUser:any = res[key]
        tempUser.key = key 
        return tempUser
      });
      this.users = users
      console.log(this.users)
    })
  }

  ngOnInit(): void {
    this.fetchUsers()
  }

}
