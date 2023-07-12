import { Component, OnInit } from '@angular/core';
import { Propietario } from 'src/app/models/propietario';
import { PropietarioService } from 'src/app/services/propietario.service';

@Component({
  selector: 'app-propietario',
  templateUrl: './propietario.component.html',
  styleUrls: ['./propietario.component.css']
})
export class PropietarioComponent implements OnInit {

  //creamos un objeto de tipo Matricula
  propietarios: Propietario[] = [];
  ConfirmationService: any;

  //pasamos como parametro el propietarioService de tipo propietarioService
  //donde traeremos los servicios que estan alojados alli
  constructor(private propietarioService: PropietarioService) {

  }

  ngOnInit(): void {
    //Actualizar, trae la info de propietarios
    this.propietarioService.getPropietario().subscribe(
      response => this.propietarios = response);
  }

  //Aqui se hace envio de un id en donde se pasa al servicio para 
  // que de esta manera se elimine un propietario
  eliminarPropietario(id: number) {
    this.propietarioService.eliminarPropietario(id).
      subscribe(response => {
        this.propietarios = this.propietarios.filter(propietario => propietario.id != id)
      });
  }
}

