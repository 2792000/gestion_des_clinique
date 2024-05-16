import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FormsModule ,ReactiveFormsModule} from '@angular/forms';
import { AdminComponent } from './admin/admin.component';
import { SignComponent } from './sign/sign.component';

import { HeaderComponent } from './header/header.component';
import { AddPationComponent } from './add-pation/add-pation.component';
import { ListPationComponent } from './list-pation/list-pation.component';
import { AddMedecinComponent } from './add-medecin/add-medecin.component';
import { ListMedecinComponent } from './list-medecin/list-medecin.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AddCliniqueComponent } from './add-clinique/add-clinique.component';
import { ListCliniqueComponent } from './list-clinique/list-clinique.component';
import { PatientComponent } from './patient/patient.component';
import { MedecienComponent } from './medecien/medecien.component';
import { ListUserComponent } from './list-user/list-user.component';
import { AddUserComponent } from './add-user/add-user.component';
import { RendezVousComponent } from './rendez-vous/rendez-vous.component';
import { ModifPatientComponent } from './modif-patient/modif-patient.component';
import { ModifMedecinComponent } from './modif-medecin/modif-medecin.component';
import { ModifRdvComponent } from './modif-rdv/modif-rdv.component';
import { ModifClinicComponent } from './modif-clinic/modif-clinic.component';
import { DetailMedecinComponent } from './detail-medecin/detail-medecin.component';
import { DetailCliniqueComponent } from './detail-clinique/detail-clinique.component';
import { PatienthomeComponent } from './patienthome/patienthome.component';
import { CliniquehomeComponent } from './cliniquehome/cliniquehome.component';
import { ModifUserComponent } from './modif-user/modif-user.component';
import { DetailUserComponent } from './detail-user/detail-user.component';
import { RdvMedecinComponent } from './rdv-medecin/rdv-medecin.component';
import { HomeMedecinComponent } from './home-medecin/home-medecin.component';
import { AddrdvMComponent } from './addrdv-m/addrdv-m.component';



@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    SignComponent,
    HeaderComponent,
    AddPationComponent,
    ListPationComponent,
    AddMedecinComponent,
    ListMedecinComponent,
    DashboardComponent,
    AddCliniqueComponent,
    ListCliniqueComponent,
    PatientComponent,
    MedecienComponent,
    ListUserComponent,
    AddUserComponent,
    RendezVousComponent,
    ModifPatientComponent,
    ModifMedecinComponent,
    ModifRdvComponent,
    ModifClinicComponent,
    DetailMedecinComponent,
    DetailCliniqueComponent,
    PatienthomeComponent,
    CliniquehomeComponent,
    ModifUserComponent,
    DetailUserComponent,
    RdvMedecinComponent,
    HomeMedecinComponent,
    AddrdvMComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
