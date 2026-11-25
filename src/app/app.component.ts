import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'cdappamazingapp';
  number = 0;
  arrNum: number[] = [1, 2, 3, 4, 5];

  sumNum(a: number, b: number): number {
    this.number = 0;
    return a + b;
  }
 
}
