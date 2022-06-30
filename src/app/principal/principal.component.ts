import { Component, OnInit } from '@angular/core';
import { Encabezado } from '../common/principal-encabezado';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogComponent } from '../common/component/confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {
  encabezado: Encabezado = {
    nombreEmpresa: 'mainsoft',
    tipoDocumento: 'nit',
    identificacionEmpresa: 123456,
    etapaProceso: 1,
    fechaCreacionEtapa: 81121,
    fechaLimiteEtapa: 121121,
    solicitante: 'cliente'
  };

  constructor(
    public dialog: MatDialog
  ){}

  openDialog(): void {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      width:'550px'
    });

    dialogRef.afterClosed().subscribe(res => {
      console.log(res);
      if(res){
          console.log('Delete file');
      }
    });
  }

  ngOnInit(): void {
  }

}
