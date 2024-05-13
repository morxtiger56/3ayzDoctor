import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-section',
  standalone: true,
  imports: [],
  templateUrl: './section.component.html',
  styleUrl: './section.component.css'
})
export class SectionComponent {

}


@Component({
  selector: 'app-section-header',
  standalone: true,
  imports: [],
  template: `
  <h2 class="text-xl text-primary">
  <ng-content/>
  </h2>
  `
})
export class SectionHeaderComponent {
}



@Component({
  selector: 'app-section-header-description',
  standalone: true,
  imports: [],
  template: `
  <h4 class="text-sm my-2 text-black/50">
  <ng-content/>
  </h4>
  `
})
export class SectionHeaderDescriptionComponent {
}
