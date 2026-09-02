import { Component, OnInit } from '@angular/core';
import {MatSnackBar} from "@angular/material/snack-bar";
import {Router} from "@angular/router";
import {ResetService} from "../../services/reset.service";

@Component({
    selector: 'app-resetpassword',
    templateUrl: './resetpassword.component.html',
    styleUrls: ['./resetpassword.component.css'],
    standalone: false
})
export class ResetpasswordComponent implements OnInit {

  typedData = {
    username: '',
    password: '',
    confirmpassword:'',
  };
  constructor(private snack: MatSnackBar, private reset: ResetService,private router:Router) { }



  ngOnInit(): void {
  }

  formSubmit() {
    console.log('submit btn clicked')
    if (this.typedData.username.trim() == '' ||
      this.typedData.username == null) {

      this.snack.open('username is required !!', '', {
        duration: 3000
      })
      return;
    }
    if (this.typedData.password.trim() == '' ||
      this.typedData.password == null) {

      this.snack.open('New password is required !!', '', {
        duration: 3000
      })
      return;
    }
    if (this.typedData.confirmpassword.trim() == '' ||
      this.typedData.confirmpassword == null) {

      this.snack.open('Confirm password is required !!', '', {
        duration: 3000
      })
      return;
    }
    if(this.typedData.password!=this.typedData.confirmpassword){
      this.snack.open('Passwords do not match !!', '', {
        duration: 3000
      })
      return;
    }
    this.reset.resetPassword(this.typedData).subscribe((response:any)=> {
      if (response) {
        this.router.navigate(['login']);
      } else {
        this.snack.open("Invalid Details !! Try again", '', {
          duration: 3000
        })
      }
    })
  }
}
