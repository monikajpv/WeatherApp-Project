import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable  } from 'rxjs';
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor(private route: Router) { }

  
  myoberservable = new Observable((observer)=>{
    console.log("Observable starts")
    setTimeout(()=>{observer.next("1")},1000 )
    setTimeout(()=>{observer.next("2")},2000 )
   // setTimeout(()=>{observer.error(new Error('error'))},3000 )
    setTimeout(()=>{observer.next("3")},4000 )
    setTimeout(()=>{observer.next("4")},5000 )
    setTimeout(()=>{observer.next("5")},6000 )
    setTimeout(()=>{observer.complete()},7000 )


    // observer.next("2")
    // observer.next("3")

  });
  ngOnInit() {
    this.myoberservable.subscribe( (val)=>{
      console.log(val);

    },//(error)=>{
     // alert(error.message);

      ()=>{
        alert('completed');

    });
  }
  navigate(){
    this.route.navigate(["home"]);

  }

 
  

}
