import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FechaPipe } from './fecha.pipe';
import { MonedaPipe } from './moneda.pipe';
import { PorcentajePipe } from './porcentaje.pipe';
import { ConvertirPipe } from './convertir.pipe';
import { PrefijoPipe } from './prefijo.pipe';

@NgModule({
  declarations: [
    AppComponent,
    FechaPipe,
    MonedaPipe,
    PorcentajePipe,
    ConvertirPipe,
    PrefijoPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
