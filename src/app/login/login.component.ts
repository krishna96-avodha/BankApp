import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';
import { FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  aim="your Perfect Banking Partner"
  accno="Your Account Number Please"
  pass="Enter Your Password"
  acno=""
  pswd=""
  

   // register Group Model Creation

   loginForm=this.fb.group({

    // form arry create

acno:[ "",[Validators.required,Validators.pattern('[0-9]*')]],
pswd:[ "",[Validators.required,Validators.pattern('[0-9a-zA-Z]*')]],

})


  database:any={
    1000:{acno:1000,uname:"Neel",password:1000,balance:5000},
    1001:{acno:1001,uname:"Aysha",password:1001,balance:5000},
    1002:{acno:1002,uname:"Ananaya",password:1002,balance:5000}

  }

  constructor(private routerLogin:Router,private ds:DataService,private fb:FormBuilder) { }

  ngOnInit(): void {
  }

  // account number chnage

  acnoChange(event:any)
  {
    this.acno=event.target.value
    console.log(this.acno);

  }

// password chnage

  pwdChnage(event:any)
  {
    this.pswd=event.target.value
    console.log(this.acno);
  }



// // login
  login()
  {
    var accno=this.loginForm.value.acno
    var pswd=this.loginForm.value.pswd

    const result=this.ds.login(accno,pswd)
    if(result)
    {
   
        alert("login successfully")
        this.routerLogin.navigateByUrl("dashboard")
      }
      // else
      // {
      //   alert("incorrect password")
      // }
    
   
}


// login using template reference
// login(a:any,p:any)
// {
//   console.log(a);
//   var accno=a.value
//     var pswd=p.value
//     let database=this.database
//   if(accno in database)
//     {
//       if(pswd == database[accno]["password"])
//       {
//         alert("login successfully")
//       }
//       else
//       {
//         alert("incorrect password")
//       }
//     }
//   else
//      {
//   alert("user doesnt exist")
      
//     }

   
//   }

}
