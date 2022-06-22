import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EstudanteDetailComponent } from './estudante-detail/estudante-detail.component';
import { ProfessorDetailComponent } from './professor-detail/professor-detail.component';
import { EstudantesComponent } from './estudantes/estudantes.component';
import { ProfessoresComponent } from './professores/professores.component';
import { MessagesComponent } from './messages/messages.component';
import { AppRoutingModule } from './app-routing.module';
import { EstudanteSearchComponent } from './estudante-search/estudante-search.component';


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    DashboardComponent,
    EstudantesComponent,
    ProfessoresComponent,
    EstudanteDetailComponent,
    ProfessorDetailComponent,
    MessagesComponent,
    MessagesComponent,
    EstudanteSearchComponent
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
