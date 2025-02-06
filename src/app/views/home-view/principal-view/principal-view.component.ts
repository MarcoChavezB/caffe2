import { Component } from '@angular/core';
import { OptionsComponent } from '../../../components/options/options.component';

@Component({
  selector: 'app-principal-view',
  standalone: true,
  imports: [OptionsComponent],
  templateUrl: './principal-view.component.html',
  styleUrl: './principal-view.component.css'
})
export class PrincipalViewComponent {

}
