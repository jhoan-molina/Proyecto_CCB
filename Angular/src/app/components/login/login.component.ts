import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Credentials } from 'src/app/models/propietario';
import { PropietarioService } from 'src/app/services/propietario.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  //se crea un objeto de ripo credenciales, donde se inicaliza
  //sus atributos en blanco
  creds: Credentials = {
    email: "",
    password: ""
  };
  
  //pasamos como parametro el propietarioServicio de tipo propietarioServicio y router de tipo router
  //donde traeremos los servicios que estan alojados alli
  constructor(private propietarioServicio: PropietarioService, private router: Router){

  }

  //Traen los valores del formulario y es comparado con los datos de la BD
  //es aqui donde se verifica si se crea el token
  login(form: NgForm){
    this.propietarioServicio.Login(this.creds).subscribe(response =>{
      this.router.navigate(['/']);
    })
  }
}
