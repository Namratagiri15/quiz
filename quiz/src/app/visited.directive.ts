import { Directive, ElementRef, HostBinding, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appVisited]'
})
export class VisitedDirective {
  
  constructor(private _elref: ElementRef, private renderer: Renderer2) {
    // renderer.addClass(_elref.nativeElement, 'discard-question')
  }

  @HostBinding('style.background') bgColor: string;

  @HostListener('click', ['$event.target']) discardCard(card){
    // card.style.background = 'lightcoral';
    this.renderer.addClass(card, 'discard-question');
    console.log(card);
  }

}
