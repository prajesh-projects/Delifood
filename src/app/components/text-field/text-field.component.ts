import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-text-field',
  templateUrl: './text-field.component.html',
  styleUrl: './text-field.component.scss'
})
export class TextFieldComponent {
  @Input() label?: string;
  @Input() img?: string;
  @Input() btn?: string;
  @Input() type?: string;
  @Input() value?: string;
  @Input() class?: string;
  @Input() disable?: string;
  @Input() callLink?: string;
  @Input() required?: boolean;
}
