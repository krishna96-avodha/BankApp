import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  currentAcno:any
  currentuname:any 

  database:any={
    1000:{acno:1000,uname:"Neel",password:1000,balance:5000,transaction:[]},
    1001:{acno:1001,uname:"Aysha",password:1001,balance:5000,transaction:[]},
    1002:{acno:1002,uname:"Ananaya",password:1002,balance:5000,transaction:[]}

  }

  constructor() { 
    this.getData()
  }

// to store data in local storage
storeData(){
  // database type is "any",hence localstorge only allow string data ,so data must be coverted to string by using JSON.Stringify()

  localStorage.setItem("database",JSON.stringify(this.database))    

  if(this.currentAcno){
    localStorage.setItem("currentAcno",JSON.stringify(this.currentAcno))
  }
  if(this.currentuname){
    localStorage.setItem("currentuname",JSON.stringify(this.currentuname))
  }
}

// to get data from localstorage
getData(){
  if(localStorage.getItem("database")){
    this.database=JSON.parse(localStorage.getItem("database")|| '')
  }

  if(localStorage.getItem("currentAcno")){
    this.currentAcno=JSON.parse(localStorage.getItem("currentAcno")|| '')
  }

  if(localStorage.getItem("currentuname")){
    this.currentuname=JSON.parse(localStorage.getItem("currentuname")|| '')
  }

}






  login(accno:any,password:any){

      let database=this.database
      if(accno in database)
      {
        if(password == database[accno]["password"])
        {
          this.currentAcno=accno
          this.currentuname=database[accno]["uname"]
          this.storeData()

          return true

        }
        else
        {
          alert("incorrect password")
          return false
        }
      }
      else
       {
        alert("user doesnt exist")
        return false
        
      }


  }

  // Rgister

  register (acno:any,password:any,uname:any)
  {
    if(acno in this.database){
      return false
    }
    else{
      this.database[acno]={
        acno,
        uname,
        password,
        balance:0,
        transaction:[]

      }
      this.storeData()
      return true

    }
  }


  //Deposit

  deposit(acno:any,password:any,amt:any)
  {
    let amount=parseInt(amt)
    let database=this.database

    if(acno in database)
    {
      
      if(password == database[acno]["password"])
      {

        database[acno]["balance"]+=amount

        // 
        database[acno]["transaction"].push({
          amount:amount,
          type:"CREDIT"
        })
        this.storeData()


        return database[acno]["balance"]
      }
      else
      {
        alert("incorrect password")
        return false
      }

    }
    else
    {
      alert("user doesnot exist")
    }

  }


  // withdraw

  withdraw(acno:any,password:any,amt:any)
  {
    let amount=parseInt(amt)
    let database=this.database

    if(acno in database)
    {
      
      if(password == database[acno]["password"])
      {

        if( database[acno]["balance"] > amount)
        {

        database[acno]["balance"] -= amount

        database[acno]["transaction"].push({
          amount:amount,
          type:"DEBIT"
        })

        // calling local storage function
        this.storeData()


        return database[acno]["balance"]
        }
        else
        {
          alert("insuffient balance")
        }
      }
      else
      {
        alert("incorrect password")
        return false
      }

    }
    else
    {
      alert("user doesnot exist")
    }
  }

    // transaction

    getTransaction(acno:any)
    {
console.log(this.database[acno]["transaction"]);

      return this.database[acno]["transaction"]
      

    }

  
  




}
