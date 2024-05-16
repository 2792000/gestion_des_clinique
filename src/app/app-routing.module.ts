import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AdminComponent } from './admin/admin.component';
import { SignComponent } from './sign/sign.component';
import { AddPationComponent } from './add-pation/add-pation.component';
import { ListPationComponent } from './list-pation/list-pation.component';
import { ListMedecinComponent } from './list-medecin/list-medecin.component';
import { AddMedecinComponent } from './add-medecin/add-medecin.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AddCliniqueComponent } from './add-clinique/add-clinique.component';
import { ListUserComponent } from './list-user/list-user.component';
import { AddUserComponent } from './add-user/add-user.component';
import { RendezVousComponent } from './rendez-vous/rendez-vous.component';
import { PatientComponent } from './patient/patient.component';
import { ModifPatientComponent } from './modif-patient/modif-patient.component';
import { ModifMedecinComponent } from './modif-medecin/modif-medecin.component';
import { DetailMedecinComponent } from './detail-medecin/detail-medecin.component';
import { ListCliniqueComponent } from './list-clinique/list-clinique.component';
import { ModifClinicComponent } from './modif-clinic/modif-clinic.component';
import { DetailCliniqueComponent } from './detail-clinique/detail-clinique.component';
import { DetailUserComponent } from './detail-user/detail-user.component';
import { ModifUserComponent } from './modif-user/modif-user.component';
import { RdvMedecinComponent } from './rdv-medecin/rdv-medecin.component';
import { PatienthomeComponent } from './patienthome/patienthome.component';
import { MedecienComponent } from './medecien/medecien.component';
import { HomeMedecinComponent } from './home-medecin/home-medecin.component';
import { AddrdvMComponent } from './addrdv-m/addrdv-m.component';


const routes: Routes = [

  {path:'adminBoard',component:AdminComponent},
  {path:'',component:SignComponent},
  {path:'addp',component:AddPationComponent},
  {path:'listp',component:ListPationComponent},
  {path:'listm',component:ListMedecinComponent},
  {path:'addm',component:AddMedecinComponent},
  {path:'addc',component:AddCliniqueComponent},
  {path:'listc',component:ListCliniqueComponent},
  {path:'upclinique/:code',component:ModifClinicComponent},
  {path:'detailc/:code',component:DetailCliniqueComponent},
  {path:'dashboard',component:DashboardComponent},
  {path:'listu',component:ListUserComponent},
  {path:'addu',component:AddUserComponent},
  {path:'rendezvous/:id',component:RendezVousComponent},
  {path:'rendezvousm/:id',component:AddrdvMComponent},
  {path: 'upatient/:id', component: ModifPatientComponent },
  {path: 'detail/:id', component: PatientComponent},
  {path: 'upmedecin/:id', component:ModifMedecinComponent},
  {path:'detailm/:id',component:DetailMedecinComponent},
  {path:'detailu/:id',component:DetailUserComponent},
  {path:'upuser/:id',component:ModifUserComponent},
  {path:'rdvmedeci/:cinmed',component:RdvMedecinComponent},
  {path:'patienthome/:idp',component:PatienthomeComponent},
  {path:'medecin/:idm',component:MedecienComponent},
  {path:'medecinhome/:idm',component:HomeMedecinComponent}


];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
