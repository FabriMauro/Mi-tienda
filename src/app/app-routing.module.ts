import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductosDetallesComponent } from './componentes/productos-detalles/productos-detalles.component';
import { CarritoComponent } from './componentes/carrito/carrito.component';
import { EnvioComponent } from './componentes/envio/envio.component';

const routes: Routes = [
  { path: '', component: ProductListComponent  },
  { path: 'productos/:productoId', component: ProductosDetallesComponent },
  { path: 'carrito', component: CarritoComponent },
  { path: 'envio', component: EnvioComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
