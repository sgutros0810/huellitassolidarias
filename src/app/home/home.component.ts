import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [RouterOutlet, HomeComponent],
  templateUrl: './home.component.html',
})
export class HomeComponent {

}
