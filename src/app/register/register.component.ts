import { Component, OnInit } from '@angular/core';
import {FormControl,FormGroup, Validators} from '@angular/forms'
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  repeatepassword :string = 'none'
  check : boolean = true
  constructor() { }

  ngOnInit(): void {
  }

  formData = new FormGroup({
    firstName : new FormControl("",[Validators.required,Validators.minLength(3),Validators.pattern("[a-zA-Z].*")]),
    lastName : new FormControl("",[Validators.required,Validators.minLength(3),Validators.pattern("[a-zA-Z].*")]),
    email : new FormControl("",[Validators.email,Validators.required]),
    mobileNumber : new FormControl("",[Validators.required,Validators.minLength(10),Validators.maxLength(10),Validators.pattern("[0-9]*")]),
    gender : new FormControl(""),
    password : new FormControl("",[Validators.required,Validators.minLength(6),Validators.maxLength(15)]),
    repeatPassword : new FormControl(""),
  })

  registerSubmit(){ 
    if(this.Password.value == this.RepeatPassword.value){
      console.warn("submitted");
      this.repeatepassword = 'none'
    }else{
      this.repeatepassword = 'inline'
      this.check = false;
    }
    console.warn(this.formData);
  }

  get Firstname() : FormControl{
    return this.formData.get("firstName") as FormControl;
  }

  get LastName() : FormControl{
    return this.formData.get("lastName") as FormControl;
  }

  get Email() : FormControl{
    return this.formData.get("email") as FormControl;
  }

  get MobileNumber() : FormControl{
    return this.formData.get("mobileNumber") as FormControl;
  }

  get gender() : FormControl{
    return this.formData.get("gender") as FormControl;
  }

  get Password() : FormControl{
    return this.formData.get("password") as FormControl;
  }

  get RepeatPassword() : FormControl{
    return this.formData.get("repeatPassword") as FormControl;
  }
}
