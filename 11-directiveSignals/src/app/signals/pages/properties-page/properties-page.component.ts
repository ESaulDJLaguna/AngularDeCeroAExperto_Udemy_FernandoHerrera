import {
  Component,
  computed,
  effect,
  OnDestroy,
  OnInit,
  signal,
} from '@angular/core';
import { User } from '../../interfaces/user-request.interface';

@Component({
  selector: 'app-properties-page',
  templateUrl: './properties-page.component.html',
  styleUrl: './properties-page.component.scss',
})
export class PropertiesPageComponent implements OnInit, OnDestroy {
  public counter = signal(10);
  public user = signal<User>({
    id: 2,
    email: 'janet.weaver@reqres.in',
    first_name: 'Janet',
    last_name: 'Weaver',
    avatar: 'https://reqres.in/img/faces/2-image.jpg',
  });
  public fullName = computed(
    () => `${this.user().first_name} ${this.user().last_name}`
  );

  //! Se ejecuta por primera vez cuando se crea la pantalla y se sigue ejecutando cuando las señales internas cambian
  public userChangedEffect = effect(() => {
    // console.log(this.user().first_name);
    console.log(`${this.user().first_name} - ${this.counter()} `);
  });

  ngOnInit(): void {
    setInterval(() => {
      this.counter.update((current) => current + 1);

      //! Podríamos destruir el efecto de acuerdo a una condición si se necesitara
      if (this.counter() === 15) {
        this.userChangedEffect.destroy();
      }
    }, 1000);
  }

  ngOnDestroy(): void {
    // this.userChangedEffect.destroy();
  }

  //! Con keyof le indicamos a Typescript que debe recibir un parámetro que sea un key de la interfaz User y de esa forma se soluciona el problema de que posiblemente se envíe un field que no exista
  onFieldUpdated(field: keyof User, value: string) {
    // onFieldUpdated(field: string, value: string) {
    // console.log({ field, value });

    //! Una forma de modificar un campo de la señal, pero es inseguro porque se puede enviar un field que no exista y lo creará. Por ejemplo, si desde el html se cambia email por correo, podremos ver que se crea
    // this.user.set({
    //   ...this.user(),
    //   [field]: value,
    // });

    //! Desde la versión 17 en adelante, el método 'mutate' ya no existe, pero update obtuvo algunas mejoras. El código siguiente sería exactamente lo mismo que el código anterior, por lo que se mostrará cómo hacerlo mejor.
    // this.user.update((current) => ({
    //   ...current,
    //   [field]: value,
    // }));

    this.user.update((current) => {
      /*
      ! En Angular 17, al trabajar con señales y computed, al actualizar un valor de current, por ejemplo current.first_name, no se verá reflejado en la señal computada porque aunque está actualizando la señal user correctamente con el método update, la señal computada fullName no se reactiva como esperas. Esto se debe a que Angular requiere que el objeto completo de la señal user sea reemplazado para activar una actualización en las señales de solo lectura (computed).

      ! El problema específico radica en que, al modificar el objeto user con update, el objeto en sí no cambia de referencia, por lo que Angular no detecta el cambio. Aunque update internamente modifica los valores, la referencia de user sigue siendo la misma, y computed solo reacciona ante un cambio de referencia.
      */
      let newUser = { ...current };
      switch (field) {
        case 'email':
          newUser.email = value;
          break;

        case 'avatar':
          newUser.avatar = value;
          break;

        case 'first_name':
          newUser.first_name = value;
          break;

        case 'last_name':
          newUser.last_name = value;
          break;

        case 'id':
          newUser.id = Number(value);
          break;
      }

      return newUser;
    });
  }

  increaseBy(value: number) {
    this.counter.update((current) => current + value);
  }
}
