import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  fechaActual = new Date();       
  precio = 1234.56;               
  porcentaje = 0.1234;            
  texto = 'Hola Mundo';           
}
