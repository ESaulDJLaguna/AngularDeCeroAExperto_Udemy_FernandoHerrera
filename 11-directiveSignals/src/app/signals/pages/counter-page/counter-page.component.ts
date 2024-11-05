import { Component, computed, signal } from '@angular/core';

@Component({
  selector: 'app-counter-page',
  templateUrl: './counter-page.component.html',
  styleUrl: './counter-page.component.scss',
})
export class CounterPageComponent {
  public counter = signal(10);
  //! Señal computada de solo lectura. NO se puede modificar su valor "manualmente", a menos que el valor de la señal a la que apunta cambie
  public squareCounter = computed(() => this.counter() * this.counter());

  increaseBy(value: number) {
    //! update pide una función de actualización la cual tiene el valor actual de la señal y lo que se regrese será el nuevo valor de la señal
    this.counter.update((current) => current + value);
  }
}
