import { Injectable } from "@angular/core";
import { LoggerService } from "./logger.service";

@Injectable()
export class UserService{

    constructor(private Logger:LoggerService){

    }


    users=[
        {name:'Monika', status:'active'},
        {name:'Moni', status:'inactive'},
        {name:'Mona', status:'active'}
    ]
    Addnewuser(name:string, status:string){
        this.users.push({name:name,status:status});
        this.Logger.LogMessage(name,status);
    }

    Deletenewuser(name:string, status:string){
        this.users.pop()
    }


}