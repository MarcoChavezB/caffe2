import { Component } from '@angular/core';
import { PrincipalViewComponent } from './principal-view/principal-view.component';

@Component({
  selector: 'app-home-view',
  standalone: true,
  imports: [PrincipalViewComponent],
  templateUrl: './home-view.component.html',
  styleUrl: './home-view.component.css'
})
export class HomeViewComponent {

}
