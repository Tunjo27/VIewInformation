import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { Tabla1, Tabla2, TableComponent } from './common/component/table/table.component';

const DATOS1_DATA: Tabla1[] = [
    {dato1: 'test', dato2: 123},
  ];

const DATOS2_DATA: Tabla2[] = [
    {dato3: 'test', dato4: 13, dato5: 'test', dato6: 'test'}
  ];

@Injectable({
    providedIn: 'root'
})
export class JsonService {
    
    constructor(){}

    

    async getDatos() {
        return of(DATOS2_DATA);
    }
}