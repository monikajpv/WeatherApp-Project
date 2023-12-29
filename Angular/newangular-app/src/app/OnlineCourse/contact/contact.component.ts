import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  title =' ReactiveForms';
  reactiveForm: FormGroup;

  // constructor() { }

  ngOnInit() {

      this.reactiveForm = new FormGroup({
        //FormGroup
        details: new FormGroup({
          name:new FormControl(null,Validators.required),
        email:new FormControl(null,[Validators.required,Validators.email]),
        address:new FormControl(null,Validators.required),

        }),
        country:new FormControl(null),
        gender:new FormControl(null)

       
      });
  }
  onSubmit(){
    console.log(this.reactiveForm);
  }

}
