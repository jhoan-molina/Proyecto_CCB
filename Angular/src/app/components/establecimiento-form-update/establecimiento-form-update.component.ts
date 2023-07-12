import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ActividadEconomica } from 'src/app/models/actividad-economica';
import { Activos } from 'src/app/models/activos';
import { Establecimiento } from 'src/app/models/establecimiento';
import { Matricula } from 'src/app/models/matricula';
import { EstablecimientoService } from 'src/app/services/establecimiento.service';

@Component({
  selector: 'app-establecimiento-form-update',
  templateUrl: './establecimiento-form-update.component.html',
  styleUrls: ['./establecimiento-form-update.component.css']
})
export class EstablecimientoFormUpdateComponent implements OnInit{

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
  actualizarPropietario(){
    this.establecimientoService.actualizarEstablecimiento(this.establecimientos).
    subscribe(response => console.log("Actualizado"));
  }

  compararActividadEconomica (o1:ActividadEconomica, o2:ActividadEconomica):boolean{
    if(o1 === undefined && o2=== undefined) return true;
    return o1 === null || o2 === null || o1 === undefined || o2 === undefined ? false: o1.id == o2.id;
  }

  compararActivos (o1:Activos, o2:Activos):boolean{
    if(o1 === undefined && o2=== undefined) return true;
    return o1 === null || o2 === null || o1 === undefined || o2 === undefined ? false: o1.id == o2.id;
  }

  compararMatriculas (o1:Matricula, o2:Matricula):boolean{
    if(o1 === undefined && o2=== undefined) return true;
    return o1 === null || o2 === null || o1 === undefined || o2 === undefined ? false: o1.id == o2.id;
  }

}
