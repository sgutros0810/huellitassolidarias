import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from "./home/home.component";
import { NavbarComponent } from "./navbar/navbar.component";
import { SliderComponent } from "./slider/slider.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HomeComponent, NavbarComponent, SliderComponent],
  templateUrl: './app.component.html',
  // imports: [HomeComponent]
})
export class AppComponent {
  title = 'huellitassolidarias';
}
