import { Component, OnInit } from '@angular/core';
import { Establecimiento } from 'src/app/models/establecimiento';
import { EstablecimientoService } from 'src/app/services/establecimiento.service';

@Component({
  selector: 'app-establecimiento',
  templateUrl: './establecimiento.component.html',
  styleUrls: ['./establecimiento.component.css']
})
export class EstablecimientoComponent implements OnInit{

  //creamos un array de tipo Establecimiento
  establecimientos: Establecimiento[] = [];

  //pasamos como parametro el activoService de tipo activoService y activatedRoute de tipo ActivatedRoute
  //donde traeremos los servicios que estan alojados alli
  constructor(private establecimientoService:EstablecimientoService ){

  }
  ngOnInit(): void {
    //Mostrar las lista de establecimientos
    this.establecimientoService.getEstablecimiento().subscribe(
      response => this.establecimientos = response);
  }

  //Se eliminan establecimientos a partir del id que se envian como parametro
  // al servicio, es aqui donde se envia al back
  eliminarPropietario(id:number){
    this.establecimientoService.eliminarEstablecimiento(id).
    subscribe(response => {
      this.establecimientos = this.establecimientos.filter(establecimiento => establecimiento.id != id)
    });
  }

}
