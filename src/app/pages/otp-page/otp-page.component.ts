import { Component } from '@angular/core';
import { GlobalVariablesServiceService } from '../../shared/global-variables-service.service';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-otp-page',
  templateUrl: './otp-page.component.html',
  styleUrl: './otp-page.component.scss'
})
export class OtpPageComponent {

  constructor( private titleService: Title, public globalVariablesService: GlobalVariablesServiceService) {
    this.titleService.setTitle("DeliFood | OTP");
  }
}
