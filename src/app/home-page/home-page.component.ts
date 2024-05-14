import { CUSTOM_ELEMENTS_SCHEMA, Component, OnInit } from '@angular/core';
import { SwiperDirective } from '../directives/swiper.directive';
import { CardComponent, CardContentComponent, CardDescriptionComponent, CardTitleComponent } from '../components/card/card.component';
import { faStar, faShareAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SectionComponent, SectionHeaderComponent, SectionHeaderDescriptionComponent } from '../components/section/section.component';
import { CommonModule } from '@angular/common';
import { ApiService } from '../services/api.service';
import { IDoctor } from '../models/IDoctor';
import { RatingComponent } from '../components/rating/rating.component';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [
    SwiperDirective,
    CardComponent,
    CardTitleComponent,
    CardDescriptionComponent,
    CardContentComponent,
    SectionComponent,
    FontAwesomeModule,
    CommonModule,
    SectionHeaderComponent,
    SectionHeaderDescriptionComponent,
    RatingComponent
  ],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class HomePageComponent implements OnInit {

  doctors: IDoctor[] = []

  constructor(public apiService: ApiService) { }

  ngOnInit(): void {
    const swiperElements = document.querySelectorAll('swiper-container')
    swiperElements.forEach(element => {
      if (element.getAttribute('data-dont-resize')) {
        return
      }

      console.log(element)
      element.slidesPerView = 1

      element.breakpoints = {
        640: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 3,
        },
      }
    })

    this.doctors = this.apiService.Get('doctors') ?? []

  }

  rating = Array.from({ length: 5 }, (_, i) => ({ id: i }))
  ratingStar = faStar
  shareIcon = faShareAlt
}
