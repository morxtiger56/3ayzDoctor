import { Component, Input } from '@angular/core';
import { cn } from '../../lib/utils'
import { ClassValue } from 'clsx';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [
    CommonModule
  ],
  template: `
    <div [ngClass]='classSet("items-center p-4 gap-4 flex flex-col md:flex-row shadow-md", {
      "md:flex-col p-1 items-start": full
    })'>
        <ng-content />
      </div>
  `,
})
export class CardComponent {
  classSet = (...input: ClassValue[]) => cn(input)
  @Input() full?: boolean = false
}

@Component({
  selector: 'app-card-title',
  standalone: true,
  imports: [],
  template: `
    <h3 class="capitalize text-lg text-primary">
        {{title}}
    </h3>
  `
})
export class CardTitleComponent {
  @Input()
  title: string = ""
}

@Component({
  selector: 'app-card-description',
  standalone: true,
  imports: [],
  template: `
    <p class="text-sm text-black/50 text-primary">
        {{description}}
    </p>
  `
})
export class CardDescriptionComponent {
  @Input()
  description: string = ""
}

@Component({
  selector: 'app-card-content',
  standalone: true,
  imports: [],
  template: `
    <div class="grid gap-1 px-2 py-2">
      <ng-content />
    </div>
  `
})
export class CardContentComponent {
}
