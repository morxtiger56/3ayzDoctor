import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faGlobe, faHome, faKitMedical, faPhone, faPlus, faUserDoctor } from '@fortawesome/free-solid-svg-icons';
import { DropdownModule } from 'primeng/dropdown';


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [FontAwesomeModule, DropdownModule, CommonModule, FormsModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})

export class HeaderComponent {

  selected = 'english'

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

  globeIcon = faGlobe

  changeLanguage(value: string) {
    console.log(value)
  }
}
