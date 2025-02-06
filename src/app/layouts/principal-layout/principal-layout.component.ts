import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeViewComponent } from '../../views/home-view/home-view.component';
import { AboutUsSectionComponent } from '../../sections/about-us-section/about-us-section.component';
import { CoffeTypesComponent } from '../../sections/coffe-types/coffe-types.component';
import { CoffeDetailsComponent } from '../../sections/coffe-details/coffe-details.component';
import { ContactUsComponent } from '../../sections/contact-us/contact-us.component';
import { FooterComponent } from '../../sections/footer/footer.component';

@Component({
  selector: 'app-principal-layout',
  standalone: true,
  imports: [FooterComponent, RouterOutlet, CoffeDetailsComponent ,HomeViewComponent, AboutUsSectionComponent, CoffeTypesComponent, ContactUsComponent],
  templateUrl: './principal-layout.component.html',
  styleUrl: './principal-layout.component.css'
})
export class PrincipalLayoutComponent {

}
