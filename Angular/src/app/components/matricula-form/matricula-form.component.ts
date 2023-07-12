import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Matricula } from 'src/app/models/matricula';
import { MatriculaService } from 'src/app/services/matricula.service';

@Component({
  selector: 'app-matricula-form',
  templateUrl: './matricula-form.component.html',
  styleUrls: ['./matricula-form.component.css']
})
export class MatriculaFormComponent implements OnInit{

  //creamos un objeto de tipo Matricula
  matricula:Matricula = new Matricula();

  //pasamos como parametro el matriculaService de tipo matriculaService y ActivatedRoute de tipo ActivatedRoute
  //donde traeremos los servicios que estan alojados alli
  constructor(private matriculaService:MatriculaService, private activatedRoute: ActivatedRoute){

  }

  ngOnInit(): void {
    //Actualizar
    this.activatedRoute.params.
    subscribe(params => {let id: number = params['id'];
    if(id){
      this.matriculaService.obtenerMatricula(id).subscribe(response => this.matricula = response);
    }
    })
  }

  //Aqui se hace envio de un objeto de tipo matricula al servicio para 
  // que de esta manera se cree una matricula
  crearMatricula(){
    this.matriculaService.crearMatricula(this.matricula).
    subscribe(response => console.log("¡Exito!"));
  }

}
