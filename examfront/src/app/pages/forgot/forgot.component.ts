import { Component, OnInit } from '@angular/core';
import { MatLegacySnackBar as MatSnackBar } from '@angular/material/legacy-snack-bar';
import { Router } from '@angular/router';
import { ForgotService } from 'src/app/services/forgot.service';

@Component({
  selector: 'app-forgot',
  templateUrl: './forgot.component.html',
  styleUrls: ['./forgot.component.css']
})
export class ForgotComponent implements OnInit {
  enteredData = {
    username: '',
    email: ''
  };
  constructor(private snack: MatSnackBar, private forgot: ForgotService,private router:Router) { }



  ngOnInit(): void {
  }

  formSubmit() {
    console.log('submit btn clicked')
    if (this.enteredData.username.trim() == '' ||
      this.enteredData.username == null) {

      this.snack.open('username is required !!', '', {
        duration: 3000
      })
      return;
    }
    if (this.enteredData.email.trim() == '' ||
      this.enteredData.email == null) {

      this.snack.open('email is required !!', '', {
        duration: 3000
      })
      return;
    }

    this.forgot.getUserIfExists(this.enteredData).subscribe((response:any)=>{
      if(response){
        this.router.navigate(['resetpassword']);
    }
      else{
        this.snack.open("Invalid Details !! Try again",'',{
                duration:3000
              })
      }
    })
  }
}





