import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ActividadEconomica } from 'src/app/models/actividad-economica';
import { Activos } from 'src/app/models/activos';
import { Establecimiento } from 'src/app/models/establecimiento';
import { Matricula } from 'src/app/models/matricula';
import { EstablecimientoService } from 'src/app/services/establecimiento.service';

@Component({
  selector: 'app-establecimiento-form',
  templateUrl: './establecimiento-form.component.html',
  styleUrls: ['./establecimiento-form.component.css']
})
export class EstablecimientoFormComponent implements OnInit{

  //creamos un objeto de tipo Establecimiento
  establecimientos:Establecimiento = new Establecimiento();

  //creamos un array de tipo ActividadEconomica
  actividad_economicas:ActividadEconomica[] = [];

  //creamos un array de tipo Activos
  activo:Activos[] = [];

  //creamos un array de tipo Matricula
  matriculas:Matricula[] = [];

  //pasamos como parametro el EstablecimientoService de tipo EstablecimientoService y ActivatedRoute de tipo ActivatedRoute
  //donde traeremos los servicios que estan alojados alli
  constructor(private establecimientoService:EstablecimientoService, private activatedRoute: ActivatedRoute){

  }

  ngOnInit(): void {
    //LLena el combo box de actividad economica con los datos traidos de la consulta de servicios 
    this.establecimientoService.getActividadEconomica().
    subscribe(response => this.actividad_economicas = response);

    //LLena el combo box de activos con los datos traidos de la consulta de servicios
    this.establecimientoService.getActivos().
    subscribe(response => this.activo = response);

    //LLena el combo box de matricula con los datos traidos de la consulta de servicios
    this.establecimientoService.getMatricula().
    subscribe(response => this.matriculas = response);
    
    //Actualizar
    this.activatedRoute.params.
    subscribe(params => {let id: number = params['id'];
    if(id){
      this.establecimientoService.obtenerEstablecimiento(id).subscribe(response => this.establecimientos = response);
    }
    })
  }

  //Aqui se hace envio de un objeto de tipo establecimiento al servicio para 
  // que de esta manera se cree un propietario
  crearPropietario(){
    this.establecimientoService.crearEstablecimiento(this.establecimientos).
    subscribe(response => console.log("¡Exito!"));
  }

}
