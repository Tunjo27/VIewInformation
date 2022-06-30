import { Component, OnInit , Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Titulo } from '../../common/pop-up-titulo';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-principal-pop-up',
  templateUrl: './pop-up.component.html',
  styleUrls: ['./pop-up.component.css']
})
export class PopUpComponent implements OnInit{
  titulo: Titulo = {
    nombreEtapa: 'definicion',
    etapaProceso: 1
  };
  
  registerForm!: FormGroup;
  resultado!: string;

  constructor(private formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<PopUpComponent>,
    @Inject(MAT_DIALOG_DATA) public message: string) {
      this.formulario();
    }

  ngOnInit(): void {
  }

  get nombreEmpresaNoValido() {
    return this.registerForm.get('nombreEmpresa')?.invalid && this.registerForm.get('nombreEmpresa')?.touched
  }

  get tipoDocumentoNoValido() {
    return this.registerForm.get('tipoDocumento')?.invalid && this.registerForm.get('tipoDocumento')?.touched
  }

  get identificacionEmpresaNoValido() {
    return this.registerForm.get('identificacionEmpresa')?.invalid && this.registerForm.get('identificacionEmpresa')?.touched
  }

  get etapaProcesoNoValido() {
    return this.registerForm.get('etapaProceso')?.invalid && this.registerForm.get('etapaProceso')?.touched
  }

  get fechaCreacionEtapaNoValido() {
    return this.registerForm.get('fechaCreacionEtapa')?.invalid && this.registerForm.get('fechaCreacionEtapa')?.touched
  }

  get fechaLimiteEtapaNoValido() {
    return this.registerForm.get('fechaLimiteEtapa')?.invalid && this.registerForm.get('fechaLimiteEtapa')?.touched
  }

  get solicitanteNoValido() {
    return this.registerForm.get('solicitante')?.invalid && this.registerForm.get('solicitante')?.touched
  }


  formulario(){
    this.registerForm = this.formBuilder.group({
      nombreEmpresa: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(15)] ],
      tipoDocumento: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(15)] ],
      identificacionEmpresa: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(15)] ],
      etapaProceso: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(15)] ],
      fechaCreacionEtapa: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(15)] ],
      fechaLimiteEtapa: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(15)] ],
      solicitante: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(15)] ] 
    });
  }

  submit() {
    if (this.registerForm.valid)
      this.resultado = "Todos los datos son válidos";
    else
      this.resultado = "Por favor llene todo el formulario";
      console.log(this.registerForm.value);
  }

  onClickNO(): void {
    this.dialogRef.close();
  }

}
