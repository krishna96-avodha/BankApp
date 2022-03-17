import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  acno=""
  pswd=""
  amount=""
  acno1=""
  pswd1=""
  amount1=""


  user:any
  lDate:any
  accno:any
 
  // deposit Group Model Creation

  depositForm=this.fb.group({

    // form arry create

acno:[ "",[Validators.required,Validators.pattern('[0-9]*')]],
pswd:[ "",[Validators.required,Validators.pattern('[0-9a-zA-Z]*')]],
amount:[ "",[Validators.required,Validators.pattern('[0-9]*')]]

})

// Withdraw
WithdrawForm=this.fb.group({

  // form arry create

acno1:[ "",[Validators.required,Validators.pattern('[0-9]*')]],
pswd1:[ "",[Validators.required,Validators.pattern('[0-9a-zA-Z]*')]],
amount1:[ "",[Validators.required,Validators.pattern('[0-9]*')]]

})


  constructor(private ds:DataService,private fb:FormBuilder,private router:Router) {

this.user=this.ds.currentuname

this.lDate = new Date()

   }

  ngOnInit(): void {
if(!localStorage.getItem("currentAcno")){
  alert("please Login")
  this.router.navigateByUrl("")
}

  }

  // Deposit functiom
  deposit(){

    var acno=this.depositForm.value.acno
    var pswd=this.depositForm.value.pswd 
    var amount=this.depositForm.value.amount
    const result=this.ds.deposit(acno,pswd,amount)
    
    if (result){
      alert(amount+"successfully deposited....And your Balance is"+result)
    }

  }




  withdraw(){


    var acno=this.WithdrawForm.value.acno1
    var pswd=this.WithdrawForm.value.pswd1
    var amount=this.WithdrawForm.value.amount1
    const result=this.ds.withdraw(acno,pswd,amount)
    
    if (result){
      alert(amount+"successfully debited....And your Balance is"+result)
    }
  }

  // logout function 

  logout(){
    localStorage.removeItem("currentAcno")
    localStorage.removeItem("currentuname")
    this.router.navigateByUrl("")

  }

  deleteMyaccount(){
    this.accno= (localStorage.getItem("currentAcno") ||'')
  }

  cancel(){
    this.accno= ""
  }

  delete(event:any){
    alert("Account Deleted"+event+"from parent")
    this.router.navigateByUrl("")

  }

}


