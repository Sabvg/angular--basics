import { from } from 'rxjs';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { HeroeComponent } from './heroe/heroe.component';
import { ListadoComponent } from './listado/listado.component';


@NgModule({
    declarations: [ //las declaraciones son los modulos que tenemos
        HeroeComponent,
        ListadoComponent
    ],
    exports: [
        ListadoComponent
    ],
    imports: [
        CommonModule //si no no se leian los ngFor e if
    ]
})

export class HeroesModule {

}