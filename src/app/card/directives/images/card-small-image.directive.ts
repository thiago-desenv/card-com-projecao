import { Directive } from '@angular/core';

@Directive({
  selector: 'app-card-small-image, [appCardSmallImage]',
  host: { 'class': 'ca-c-card__small-image' }
})
export class CardSmallImageDirective {}
