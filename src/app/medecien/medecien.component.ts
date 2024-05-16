import { Component, OnInit } from '@angular/core';
import { User } from '../models/User';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminService } from '../services/admin.service';
import { RDV } from '../models/RDV';
import { Patient } from '../models/Patient';
import { Medecin } from '../models/Medecin';

@Component({
  selector: 'app-medecien',
  templateUrl: './medecien.component.html',
  styleUrls: ['./medecien.component.css']
})
export class MedecienComponent implements OnInit {
  patients: Patient[] = [];
  medecien: Medecin | undefined;
  user: User | undefined;
  rdvs: RDV[]=[];

  constructor(private route: ActivatedRoute, private adminService: AdminService ,private router: Router) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('idm');
    if (id !== null) {
      const userId = +id;
      if (!isNaN(userId)) {
        this.adminService.getUserById(userId).subscribe(
          (user: User) => {
            this.user = user;
            // Une fois que l'utilisateur est chargé, vous pouvez récupérer les rendez-vous
            this.getmedecin()
            
             
          },
          (error) => {
            console.error('Error fetching user details:', error);
          }
        );
      } else {
        console.error('Invalid user ID:', id);
      }
    } else {
      console.error('User ID is null');
    }
    // Chargement des patients
    this.getPatients();
  }

  getRDVsForMedecin(cinMedecin: number): void {
    this.adminService.getRDVsForMedecin(cinMedecin).subscribe(rdvs => {
      this.rdvs = rdvs;
    });
  }
  getmedecin(){
    this.adminService.getOneMedecin(1).subscribe(
      (medecien: Medecin) => {
        console.log("Patients data:", medecien);
        this.medecien = medecien;
        this.getRDVsForMedecin(this.medecien.cinMed);
      },
      (error) => {
        console.error('Error fetching patients:', error);
      }
    );
  }
  getRDVsForPatient(patientId: any): RDV[] {
    return this.rdvs.filter(rdv => rdv.idPat != patientId);
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
  marquerEtatRDV(idRDV: number, etat: string,cinMed: number): void {
    if (this.user) {
      this.adminService.marquerEtatRDV(idRDV, etat,cinMed).subscribe(
        response => {
          console.log('RDV updated successfully');
          this.getRDVsForMedecin(this.user!.id); // Refresh the list
        },
        error => {
          console.error('Error updating RDV:', error);
        }
      );
    }
  }
}
