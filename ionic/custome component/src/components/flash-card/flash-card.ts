import { Component, Input, Output, EventEmitter } from '@angular/core';

/**
 * Generated class for the FlashCardComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'flash-card',
  templateUrl: 'flash-card.html'
})
export class FlashCardComponent {
  @Input ('myText2') b;
  @Input ('myText') textToUse;
  
  text: string;
  text2: string;
  flipped: boolean = false;
  constructor() {
  }
  flip(){
    this.flipped = !this.flipped;
  }
  ngAfterViewInit() {
    this.text = this.textToUse;
    this.text2 = this.b;
  }
}
