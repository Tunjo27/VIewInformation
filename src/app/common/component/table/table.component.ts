import { DataSource } from '@angular/cdk/collections';
import { Component, OnInit } from '@angular/core';
import { JsonService } from 'src/app/json.services';

export interface Tabla1 {
  dato1: string;
  dato2: number;
}



export interface Tabla2 {
  dato3: string;
  dato4: number;
  dato5: string;
  dato6: string;
}


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit{

  mostrarColumnas: string[] = ['dato3', 'dato4', 'dato5', 'dato6']
  dataSource2: any=[];

  constructor(public json: JsonService) {}
  
  ngOnInit(){
    this.json.getDatos().then(data =>{
    this.dataSource2 = data;  
    });
  }

  
}
