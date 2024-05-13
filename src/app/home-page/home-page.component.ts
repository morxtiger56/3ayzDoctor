import { AfterContentChecked, CUSTOM_ELEMENTS_SCHEMA, Component } from '@angular/core';
import { SwiperDirective } from '../directives/swiper.directive';
import { CardComponent, CardContentComponent, CardDescriptionComponent, CardTitleComponent } from '../components/card/card.component';
import { faStar, faShareAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import Swiper from 'swiper';
import { SectionComponent, SectionHeaderComponent, SectionHeaderDescriptionComponent } from '../components/section/section.component';
import { CommonModule } from '@angular/common';





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
    SectionHeaderDescriptionComponent
  ],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class HomePageComponent implements AfterContentChecked {
  ngAfterContentChecked(): void {
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
  }

  swiper = new Swiper('.swiper', {
    speed: 400,
    allowTouchMove: true
  })

  rating = Array.from({ length: 5 }, (_, i) => ({ id: i }))
  ratingStar = faStar
  shareIcon = faShareAlt
}
