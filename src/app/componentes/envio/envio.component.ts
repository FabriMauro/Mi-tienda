import { Component, OnInit } from '@angular/core';
// Importamos el servicio carrito
import { CarritoService } from '../../servicios/carrito.service';
@Component({
  selector: 'app-envio',
  templateUrl: './envio.component.html',
  styleUrls: ['./envio.component.css']
})
export class EnvioComponent implements OnInit {
envioCostos;
  constructor(private carritoServicio:CarritoService) { }

  ngOnInit() {
    // Utilizo la variable para consumir la funcion del servicio carrito
    this.envioCostos = this.carritoServicio.getEnvioPrecio();
  }

}
