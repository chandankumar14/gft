import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { MaterialModel } from './shared/material_model';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { PrimeNgModule } from './shared/primeng_model';
import { EditComponent } from './component/edit/edit.component';
import { PartyListComponent } from './component/party-list/party-list.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    EditComponent,
    PartyListComponent,

  ],
  imports: [
    BrowserModule,
    MaterialModel,
    PrimeNgModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule ,
    AppRoutingModule
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
