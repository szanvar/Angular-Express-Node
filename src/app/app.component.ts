import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AppServiceService } from './app-service.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'angular-app';

  additionForm : any;
  public ans : any;

  constructor(private service : AppServiceService, private formBuilder : FormBuilder,private http : HttpClient) 
  {
    this.additionForm = this.formBuilder.group({
      no1 : ['', [Validators.required, Validators.pattern(/^-?(0|[1-9]\d*)?$/)]],
      no2 : ['', [Validators.required, Validators.pattern(/^-?(0|[1-9]\d*)?$/)]]
    })
  }

  ngOnInit()
  {
    //this.getDataFromAPI();
    this.addition();
  }

  addition()
  {
    var formData : any = new FormData();
    this.http.post('/api/add',formData).subscribe((response) => {
      console.log(response);
      
    },(error) =>{
      console.log("Error is", error);
      
    })
    // this.service.additionData().subscribe((response) => {
    //   console.log(response);
    // })
  }

  getDataFromAPI()
  {
     this.service.getData().subscribe((response) =>{
        console.log("Response from API is", response)
     }, (error) =>{
       console.log("Error is", error);
       
     });
  }
}
