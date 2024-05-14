import { Component, Input } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { ClassValue } from 'clsx';
import { cn } from '../../lib/utils';

@Component({
  selector: 'app-rating',
  standalone: true,
  imports: [
    FontAwesomeModule
  ],
  templateUrl: './rating.component.html',
  styleUrl: './rating.component.css'
})
export class RatingComponent {

  @Input() rating: number = 0
  ratingStar = faStar

  classSet = (...input: ClassValue[]) => cn(input)

  getRating(rating: number) {
    const ratings = Array.from({ length: 5 }, (_, i) => i + 1 <= rating)
    console.log(ratings)
    return ratings
  }
}
