import { Component, OnInit } from '@angular/core';
import { AdminService } from '../services/admin.service';
import { Router } from '@angular/router';
import { RDV } from '../models/RDV';
import { Medecin } from '../models/Medecin';
import { Patient } from '../models/Patient';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',

styleUrls: [
    
  './admin.component.css',

]
})
export class AdminComponent implements OnInit {
  RDVS: RDV[] = [];
  RDVSAT: RDV[] = [];
  RDVSAC : RDV[] = [];
  RDVSAN : RDV[] = [];
  medecins: Medecin[] = [];
  patients: Patient[] = [];
  filteredRDVS: RDV[] = [];
  days: string[] = ['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi', 'Dimanche'];
  constructor(private adminService: AdminService, private router: Router) {}

ngOnInit(): void {
  this.getrdv()
  this.getMedecins();
  this.getPatients();

}


filterCurrentWeekRDVs(): void {
  const currentDate = new Date();
  const currentDayIndex = currentDate.getDay();
  const currentWeekMondayDate = new Date(currentDate);
  currentWeekMondayDate.setDate(currentDate.getDate() - currentDayIndex + (currentDayIndex === 0 ? -6 : 1));

  this.filteredRDVS = this.RDVS.filter(rdv => {
    const rdvDate = new Date(rdv.dateRDV);
    return rdvDate >= currentWeekMondayDate && rdvDate <= currentDate;
  });
}

  getrdv(): void {
    this.adminService.getAllRDVs().subscribe(
      (RDVS: RDV[]) => {
        console.log("Patients data:", RDVS);
        this.RDVS = RDVS;
        this.filteredRDVS=RDVS;
      },
      (error) => {
        console.error('Error fetching patients:', error);
      }
    );
  }

  getMedecins(): void {
    this.adminService.getAllMedecins().subscribe(
      (medecins: Medecin[]) => {
        this.medecins = medecins;
      },
      (error) => {
        console.error('Error fetching medecins:', error);
      }
    );
  }

  getPatients(): void {
    this.adminService.getPatients().subscribe(
      (patients: Patient[]) => {
        console.log("Patients data:", patients);
        this.patients = patients;
      },
      (error) => {
        console.error('Error fetching patients:', error);
      }
    );
  }
  
}  