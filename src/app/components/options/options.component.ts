import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-options',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './options.component.html',
  styleUrls: ['./options.component.css'] // Corregido el plural
})
export class OptionsComponent {
  activeTab: string = 'home';

  setActiveTab(type: string) {
    this.activeTab = type;
  }
}
