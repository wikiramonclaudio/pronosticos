import { Component, OnInit } from '@angular/core';
import { UserService } from 'app/services/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users: any[];
  constructor(
    private userService: UserService
  ) { }

  ngOnInit() {
    this.userService.getUsers().subscribe(
      (response:any)=>{        
        this.users = response.users;
      }
    )
  }

  updateUser(user: any){  
    this.userService.updateUser(user).subscribe(
      (response:any)=>{
        this.ngOnInit();
      }
    )
  }

  updateRole(user:any){
    if(user.role == 'ROLE_USER1' || user.role == 'ROLE_ADMIN')
      user.role = 'ROLE_USER';
    else    
      user.role = 'ROLE_USER1'
  }
}
