import {Directive, HostBinding, HostListener} from '@angular/core';

@Directive({
  selector: '[appClick]'
})
export class ClickDirective {

  @HostBinding('class.clicked') isActive = false;
  @HostBinding('class.clicked-red') isActiveRed = false;

  constructor() { }

  @HostListener('click', ['$event']) onClick(event){
    if (event.ctrlKey) {
      this.isActiveRed = true;
      return;
    } else {
      if (this.isActive || this.isActiveRed) {
        this.isActive = false;
        this.isActiveRed = false;
      } else {
        this.isActive = true;
      }
    }
  }

}
