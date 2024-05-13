import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faHome, faKitMedical, faPhone, faPlus, faUserDoctor } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})

export class HeaderComponent {
  buttons: {
    label: string,
    icon?: any
  }[] = [
      {
        label: "home",
        icon: faHome
      },
      {
        label: "Book a doctor",
        icon: faUserDoctor
      },
      {
        label: "Medical Services",
        icon: faKitMedical
      },
      {
        label: "Contact Us",
        icon: faPhone
      },
      {
        label: "add your clinic",
        icon: faPlus
      }
    ]
}
