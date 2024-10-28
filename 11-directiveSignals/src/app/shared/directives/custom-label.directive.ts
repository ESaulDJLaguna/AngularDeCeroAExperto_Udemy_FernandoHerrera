import { Directive, ElementRef, Input, OnInit } from '@angular/core';
import { ValidationErrors } from '@angular/forms';

@Directive({
  //! La renombramos. El nombre puede ser custom-label (o cualquier otro), pero mantenemos la sintaxis de Angular
  selector: '[customLabel]',
})
export class CustomLabelDirective implements OnInit {
  //! En algún momento esto podría ser null
  private htmlElement?: ElementRef<HTMLElement>;
  //! Creamos una referncia para saber cuál es el color en todo lugar de la directiva
  private _color: string = 'red';
  private _errors?: ValidationErrors | null;

  @Input() set color(value: string) {
    // console.log(value);
    this._color = value;
    //! Llamamos al método cada vez que la propiedad color cambie.
    this.setStyle();
  }

  @Input() set errors(value: ValidationErrors | null | undefined) {
    this._errors = value;
    // console.log(value);
    this.setErrorMessage();
  }

  constructor(private el: ElementRef<HTMLElement>) {
    // console.log(this.el);
    this.htmlElement = el;
    // this.htmlElement.nativeElement.innerHTML = 'Hola Mundo';
  }
  ngOnInit(): void {
    this.setStyle();
  }

  setStyle(): void {
    if (!this.htmlElement) return;

    this.htmlElement!.nativeElement.style.color = this._color;
  }

  setErrorMessage(): void {
    if (!this.htmlElement) return;
    if (!this._errors) {
      this.htmlElement.nativeElement.innerText = '';
      return;
    }

    const errors = Object.keys(this._errors);
    console.log(this._errors);
    console.log(errors);

    if (errors.includes('required')) {
      this.htmlElement.nativeElement.innerText = 'Este campo es requerido';
      return;
    }

    if (errors.includes('minlength')) {
      const min = this._errors['minlength'].requiredLength;
      const current = this._errors['minlength'].actualLength;

      this.htmlElement.nativeElement.innerText = `Mínimo ${current}/${min} caracteres`;
      return;
    }

    if (errors.includes('email')) {
      this.htmlElement.nativeElement.innerText =
        'No es un formato de correo válido';
      return;
    }
  }
}
