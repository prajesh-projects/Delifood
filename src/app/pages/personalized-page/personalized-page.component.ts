import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { GlobalVariablesServiceService } from '../../shared/global-variables-service.service';

@Component({
  selector: 'app-personalized-page',
  templateUrl: './personalized-page.component.html',
  styleUrl: './personalized-page.component.scss'
})
export class PersonalizedPageComponent {
  constructor( private titleService: Title, public globalVariablesService: GlobalVariablesServiceService) {
    this.titleService.setTitle("DeliFood | Personalized");
  }
}
