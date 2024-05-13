import { Component } from '@angular/core';
import { SectionComponent } from '../section/section.component';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [
    SectionComponent
  ],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  firstLinkGroup = [
    {
      label: 'Careers',
      link: '#'
    },
    {
      label: 'Partners',
      link: '#'
    },
    {
      label: 'Book a doctor',
      link: '#'
    },
    {
      label: 'Login as a doctor',
      link: '#'
    },
  ]
  secoundLinkGroup = [
    {
      label: 'Terms of service',
      link: '#'
    },
    {
      label: 'Privacy terms',
      link: '#'
    },
    {
      label: 'Contact us',
      link: '#'
    },
  ]

  specializations = Array.from({length: 25}, (_,i) => ({id:i, data: '3ayz Doctor Allergy and Immunology (Sensitivity and Immunity)' }))
}
