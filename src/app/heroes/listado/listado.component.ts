// import { Component, OnInit } from '@angular/core';
import { Component} from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
// export class ListadoComponent implements OnInit {
export class ListadoComponent{
  // constructor() {
  //   console.log('constructor');
  //  }

  // ngOnInit(): void {
  //   console.log('ngOnInit');
  // }

  heroes: string[] = ['Spiderman', 'Iroman', 'Hulk', 'Thor', 'Capitán América'];
  heroeBorrado: string = '';

  borrarHeroe() {
    // console.log('borrado heroe...');
    // this.heroes = [];
    // this.heroes.shift(); //borra el primer elemento del array y lo retorna

    //const heroeBorrado = this.heroes.shift();
    //console.log('Héroe borrado: ' + heroeBorrado);
    // this.heroeBorrado = heroeBorrado;
    this.heroeBorrado = this.heroes.shift() || ''; //si el shift es undefined entonces retorna un string vacío

  }

}

