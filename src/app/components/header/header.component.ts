import { CommonModule } from '@angular/common';
import { Component, Inject, LOCALE_ID } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faBars, faGlobe, faHome, faKitMedical, faPhone, faPlus, faUserDoctor } from '@fortawesome/free-solid-svg-icons';
import { DropdownModule } from 'primeng/dropdown';
import { SidebarModule } from 'primeng/sidebar';


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [FontAwesomeModule, DropdownModule, CommonModule, FormsModule, SidebarModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})

export class HeaderComponent {

  constructor(
    @Inject(LOCALE_ID) public activeLocale: string
  ) { }
  globeIcon = faGlobe
  menuIcon = faBars

  buttons: {
    label: string,
    icon?: any
  }[] = [
      {
        label: $localize`home`,
        icon: faHome
      },
      {
        label: $localize`Book a doctor`,
        icon: faUserDoctor
      },
      {
        label: $localize`Medical Services`,
        icon: faKitMedical
      },
      {
        label: $localize`Contact Us`,
        icon: faPhone
      },
      {
        label: $localize`add your clinic`,
        icon: faPlus
      }
    ]

  locals = [
    { code: 'en-US', name: 'English' },
    { code: 'ar', name: 'العربية' }
  ]

  sidebarVisiable = false

  onChange() {
    window.location.href = `/${this.activeLocale}`
  }

  changeLanguage(value: string) {
    console.log(value)
  }
}
