import { Component, OnInit } from '@angular/core';
import { Matricula } from 'src/app/models/matricula';
import { MatriculaService } from 'src/app/services/matricula.service';

@Component({
  selector: 'app-matricula',
  templateUrl: './matricula.component.html',
  styleUrls: ['./matricula.component.css']
})
export class MatriculaComponent implements OnInit{

  //creamos un array de tipo Matricula
  matriculas: Matricula[] = [];

  //pasamos como parametro el matriculaService de tipo matriculaService
  //donde traeremos los servicios que estan alojados alli
  constructor(private matriculaService:MatriculaService ){

  }

  ngOnInit(): void {
    //Trae de la consulta los dato de la BD y los almacena dentro del array
    //para ser visualizado en pantalla
    this.matriculaService.getMatricula().subscribe(
      response => this.matriculas = response);
  }

  //Envia el id al servicio de la matricula de la cual se hace referencia
  //de aqui busca en la BD y si encuentra el id elimina dicho registro
  eliminarMatricula(id:number){
    this.matriculaService.eliminarMatricula(id).
    subscribe(response => {
      this.matriculas = this.matriculas.filter(matricula => matricula.id != id)
    });
  }
}
