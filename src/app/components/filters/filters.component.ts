import { CUSTOM_ELEMENTS_SCHEMA, Component, OnInit } from '@angular/core';
import { AutoCompleteModule } from 'primeng/autocomplete'
import { ApiService } from '../../services/api.service';
import { IDoctor } from '../../models/IDoctor';
import { DropdownModule } from 'primeng/dropdown';
import { faStethoscope, faUserDoctor, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-filters',
  standalone: true,
  imports: [
    AutoCompleteModule,
    DropdownModule,
    FontAwesomeModule
  ],
  templateUrl: './filters.component.html',
  styleUrl: './filters.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class FiltersComponent implements OnInit {

  constructor(public apiService: ApiService) { }
  doctorIcon = faUserDoctor
  stethoscopeIcon = faStethoscope
  locationIcon = faLocationDot

  suggestions = [
    'اسنان',
    'Orthopedic',
    'test'
  ]

  filteredSuggetions: string[] = []

  queryItem: string = ""

  search(e: { query: string }) {
    const query = e.query
    this.filteredSuggetions = this.suggestions.filter(e => e.toLowerCase().includes(query.toLowerCase()))
  }

  ngOnInit(): void {
    this.filteredSuggetions = [...this.suggestions]
    const doctors = this.apiService.Get('doctors')
    if (!doctors) {
      return
    }

    this.suggestions.push(
      ...doctors.map((e: IDoctor) => e.name)
    )

    this.filteredSuggetions = [...this.suggestions]

    console.log(this.filteredSuggetions)
  }
}
