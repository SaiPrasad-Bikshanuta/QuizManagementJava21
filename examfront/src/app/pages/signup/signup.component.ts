import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import Swal from 'sweetalert2';
import { NgForm } from '@angular/forms';
@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.css'],
    standalone: false
})
export class SignupComponent implements OnInit {

  constructor(private userService:UserService,private snack:MatSnackBar,private router:Router) { }

//1. you can make oject by using inrerface or class or 2. direct create object                         
  public user={               
    username:'',
    password:'',
    firstName:'',
    lastName:'',
    email:'',
    phone:''
  };    
  condition:Boolean=true;                

  ngOnInit(): void {}

// formSubmit(){
//   // alert("submit")
//   console.log(this.user);
//   if(this.user.username=='' || this.user.username == null){
//     // alert('user is required !!')
//     this.snack.open("Username is required !!",'',{
//       duration:3000,
//       // verticalPosition:'top',
//       // horizontalPosition:'right'
//     });}
//     if(this.user.password=='' || this.user.password == null){
      
//       this.snack.open("Password is required !!",'',{
//         duration:3000,
      
//       });}
    
//     if(this.user.firstName=='' || this.user.firstName== null){
      
//       this.snack.open("FirstName is required !!",'',{
//         duration:3000,
      
//       });
//     return;
//   }
//     // validate

    

//   //add :userservice
//   this.userService.addUser(this.user).subscribe(
//     (data:any)=>{
//       //success
//       console.log(data)
//       // alert('success')
//       Swal.fire('Successfully done !!','user id is'+ data.id, 'success');
//     },
//     (error:any)=>{
//       // error
//       console.log(error)
//       // alert('something went wrong')
//       this.snack.open(error.error.text,'',{
//         duration:3000
//       })
//     }
//   )
// }
// validate(){
//   if(this.user.username!==null || this.user.username=='' && this.user.password!==null || this.user.password=='' &&
//   this.user.firstName!==null || this.user.firstName=='' && this.user.lastName!==null || this.user.lastName=='' &&
//   this.user.email!==null || this.user.email=='' && this.user.phone!==null || this.user.phone=='')
//    this.condition=true;
// }


// }



 
// formSubmit(registrationForm: NgForm) {
//   if (registrationForm.valid) {
//     // Call your registration service here
//     // For demonstration, let's log the user object
//     console.log("Registered User:", this.user);
//     // Show a success message
//     Swal.fire('Registration Successful!', 'User registered successfully.', 'success');
//   } else {
//     // Show an error message if the form is invalid
//     Swal.fire('Error!', 'Please fill out all the fields.', 'error');
//   }
// }
// } 

formSubmit(registrationForm: NgForm) {
  if (registrationForm.valid) {
    // Call your registration service here to save the user
    this.userService.addUser(this.user).subscribe(
      (response) => {
        // Show a success message
        Swal.fire('Registration Successful!', 'User registered successfully.', 'success');
        // Clear the form
        registrationForm.resetForm();
      //  this.user = {}; // Clear user object
      },
      (error) => {
        // Show an error message if the registration fails
        Swal.fire('Error!', 'Failed to register user.', 'error');
      }
    );
  } else {
    // Show an error message if the form is invalid
    Swal.fire('Error!', 'Please fill out all the fields.', 'error');
  }
}
}