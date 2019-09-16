import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
// Registra los proveedorees necesarios para usar una sola instancia del HttpClient servicio en todo su aplicacion
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductListComponent } from './product-list/product-list.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { ProductsAlertsComponent } from './componentes/products-alerts/products-alerts.component';
import { ProductosDetallesComponent } from './componentes/productos-detalles/productos-detalles.component';
import { CarritoComponent } from './componentes/carrito/carrito.component';
import { EnvioComponent } from './componentes/envio/envio.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    TopBarComponent,
    ProductsAlertsComponent,
    ProductosDetallesComponent,
    CarritoComponent,
    EnvioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path: '', component: ProductListComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
