import { Directive, ElementRef } from '@angular/core';

@Directive({
  //! La renombramos. El nombre puede ser custom-label (o cualquier otro), pero mantenemos la sintaxis de Angular
  selector: '[customLabel]',
})
export class CustomLabelDirective {
  //! En algún momento esto podría ser null
  private htmlElement?: ElementRef<HTMLElement>;

  constructor(private el: ElementRef<HTMLElement>) {
    console.log(this.el);
    this.htmlElement = el;
    this.htmlElement.nativeElement.innerHTML = 'Hola Mundo';
  }
}
