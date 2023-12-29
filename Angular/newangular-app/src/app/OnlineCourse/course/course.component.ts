import { Component, OnInit } from '@angular/core';
import { log } from 'console';
import { UserService } from 'src/app/Services/user.service';
import { LoggerService } from 'src/app/Services/logger.service';
@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css'],
  providers:[UserService,LoggerService]
})
export class CourseComponent implements OnInit {
  username: string='';
  status:string='active';
  constructor(private userService:UserService, private LoggerService: LoggerService) { }

  
  users : {name:string,status:string}[]=[];

  ngOnInit() {
     this.users= this.userService.users;
  }
  Adduser(){
    
    this.userService.Addnewuser(this.username,this.status);
    
  }
  Deleteuser(){
    
    this.userService.Deletenewuser(this.username,this.status);
    

  }

}
