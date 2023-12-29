import { Component, OnInit } from '@angular/core';
import { EnrollService } from 'src/app/Services/enroll.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers:[EnrollService]
})
export class HomeComponent implements OnInit {
  titles  ="Courses";
  constructor(private enrollser: EnrollService) { }

  ngOnInit() {
  }

  title  = [
   {header: "Learn Software Courses online for free"} ,
   {name:"Popular Courses"}

  ];
  courses = [
    {image:"/assets/angular.png",topic:"Advanced Angular Courses", desc:" This course provides all the concept",pre:"Premium",cost:"Price:$263.3",dis:"Enroll"},
    {image:"/assets/ux.jpg",topic:"UX Design  Courses", desc:" This course provides all the concept",pre:"Premium",cost:"Price:$65.45",dis:"Enroll"},
    {image:"/assets/react.png",topic:"React js Courses", desc:" This course provides all the concept",pre:"Premium",cost:"Price:$456.6",dis:"Enroll"}

  ];
  onEnroll(){
    // const enrollser = new EnrollService();
    this.enrollser.Onenrollclicked(this.titles);
  }

}
