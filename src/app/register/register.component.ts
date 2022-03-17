import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  uname="Enter user name"
  acno=""
  pswd=""


  // register Group Model Creation

  registerForm=this.fb.group({

      // form arry create

  acno:[ "",[Validators.required,Validators.pattern('[0-9]*')]],
  pswd:[ "",[Validators.required,Validators.pattern('[0-9a-zA-Z]*')]],
  uname:[ "",[Validators.required,Validators.pattern('[a-zA-Z ]*')]]

  })



  constructor(private ds:DataService,private router:Router, private fb:FormBuilder) { }

  ngOnInit(): void {
  }
  register(){
    // alert("submitted")
    console.log(this.registerForm)

    var acno=this.registerForm.value.acno
    var pswd=this.registerForm.value.pswd
    var uname=this.registerForm.value.uname
    // let database=this.ds.database

    if(this.registerForm.valid){
    const result=this.ds.register(acno,pswd,uname)
    if(result){
      alert("successfully registered")
      this.router.navigateByUrl("")
    }
    else{
      alert("user already exist......please login!!!")
    }
  }
  else{
    alert("invalid form")
  }
    
  }

}