import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { GlobalVariablesServiceService } from '../../shared/global-variables-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {


  otpBlock = false
  personalBlock = false
  signinblock = true

  phnInput: string = '';

  constructor( private titleService: Title, public globalVariablesService: GlobalVariablesServiceService) {
    this.titleService.setTitle("DeliFood | Login");
  }
  
  getOtp() {
    this.otpBlock = true
    this.signinblock = false
    this.globalVariablesService.isLogin = true
  }
  getpersonalize() {
    this.otpBlock = false
    this.personalBlock = true
  }
}
