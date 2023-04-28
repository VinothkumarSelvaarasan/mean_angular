import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register-component',
  templateUrl: './register-component.component.html',
  styleUrls: ['./register-component.component.css']
})
export class RegisterComponentComponent  implements OnInit{
  firstName: string="";
  lastName: string="";
  email: string ="";
  password:string="";

  constructor(private http:HttpClient)
  {

  }
  ngOnInit(): void {
    
  }
  register()
  {
    let bodyData={
      "firstname" :this.firstName,
      "lastname"  :this.lastName,
      "email"     :this.email,
      "password"  :this.password,
    };
    this.http.post("http://localhost:8081/student/registeration",bodyData).subscribe((resultData:any )=>
    {
      console.log(resultData);
      alert("Student Registeration Done Successfully");

    });
  }
  save()
  {
    this.register();
    
  }
}
