import { Component, OnInit } from '@angular/core';
import { Tarifas } from 'src/app/models/tarifas';
import { TarifasService } from 'src/app/services/tarifas.service';

@Component({
  selector: 'app-tarifas',
  templateUrl: './tarifas.component.html',
  styleUrls: ['./tarifas.component.css']
})
export class TarifasComponent implements OnInit{
  //Se crea un array de tipo tarifas
  tarifa: Tarifas[] = [];

  //pasamos como parametro el tarifaService de tipo tarifaService 
  //donde traeremos los servicios que estan alojados alli
  constructor(private tarifaService:TarifasService ){}

  // Se traeran los datos de la consulta realizada en el servicios y se almacenaran en el array
  //creado anteriormente
  ngOnInit(): void {
    this.tarifaService.getTarifas().subscribe(
      response => this.tarifa = response);
  }

}
