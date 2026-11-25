import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-custom-buttom',
  templateUrl: './custom-buttom.component.html',
  styleUrls: ['./custom-buttom.component.css']
})
export class CustomButtomComponent {
  @Input() text: string = '';
  @Input() style: string = '';

}
