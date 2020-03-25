import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.scss']
})
export class RegisterUserComponent implements OnInit {
registerForm:FormGroup
@Input() isEdit = false;
@Input() userDetails:any;

  constructor(private formBuilder:FormBuilder) { }

  ngOnInit() {
    
    if (this.userDetails) {
      this.registerForm = this.setUserDetails();
    } else {
      this.registerForm = this.createForm();
    }
  }
createForm() {
return this.formBuilder.group({
  name: ['' ,Validators.required],
  email: ['', [Validators.required, Validators.email]],
  phoneNumber: ['', Validators.required]
})
}
  setUserDetails() {
    console.log(this.userDetails);// set user details in form control name
    return this.formBuilder.group({
      name: [this.userDetails.name ,Validators.required],
      email: [this.userDetails.email, [Validators.required, Validators.email]],
      phoneNumber: [this.userDetails.phoneNumber, Validators.required]
    })
  }
}
