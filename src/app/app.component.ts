import { Component } from '@angular/core';
//import { setTimeout } from 'timers';
import { TimerObservable } from "rxjs/observable/TimerObservable";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  nombre:string = 'Seba';

  arreglo = [1,2,3,4,5,6,7,8,9,10];

  PI = Math.PI;

  porcentaje:number = 0.2359;

  salario:number = 1234.56789;

  heroe = {
    nombre: 'Hunter',
    nombreClave: 'Dear Hunter',
    edad: 500,
    direccion: {
      calle: 'The Hunter´s dream',
      numero: 1313
    }
  };

  // valorDePromesa = new Promise(( resolve, reject) => {
  //   setTimeout( () => { resolve('Llego la data')}, 3500);
  // });

  valorDePromesa = new Promise((resolve, reject) => {
    let s = new TimerObservable(3500 || 0).subscribe(
        T => {
            resolve('Llego la data');
            s.unsubscribe();
        },
        E => {
            reject('Se fue al reject');
            s.unsubscribe();
        }
    );
});

  fecha = new Date();

  nombreCompleto = 'sebaStian aNDres SegOvia UrtuBia';

  urlYouTube = 'https://www.youtube.com/embed/';
  video = 'jdH3O26mXBg';

  activar:boolean = true;
}
