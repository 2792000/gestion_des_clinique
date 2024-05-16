import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AdminService } from '../services/admin.service';
import { Medecin } from '../models/Medecin';
import { Clinique } from '../models/Clinique';

@Component({
  selector: 'app-detail-medecin',
  templateUrl: './detail-medecin.component.html',
  styleUrls: ['./detail-medecin.component.css']
})
export class DetailMedecinComponent implements OnInit {
  medecin: Medecin | undefined;
  cliniques: Clinique[] = [];

  selectedClinique: string = '';
  selectedCliniqueId: number | null = null;
  constructor(
    private route: ActivatedRoute,
    private adminService: AdminService
  ) { }

  ngOnInit(): void {
    this.getMedecinDetails();
    this.getAllCliniques();
  }

  getMedecinDetails(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.adminService.getOneMedecin(id).subscribe(
      (medecin: Medecin) => {
        this.medecin = medecin;
      },
      (error) => {
        console.error('Error fetching medecin details:', error);
      }
    );
  }
  getAllCliniques(): void {
    this.adminService.getAllCliniques().subscribe(
      (cliniques: Clinique[]) => {
        this.cliniques = cliniques;
      },
      (error) => {
        console.error('Error fetching clinics:', error);
      }
    );
  }
  affecterClinique(idMed:number): void {
    if  (this.selectedCliniqueId) {
      this.adminService.affectMedecinClinique(idMed, this.selectedCliniqueId).subscribe(
        () => {
          console.log('Médecin affecté à la clinique avec succès.');
          // Refresh the list or any other UI update needed
        },
        (error) => {
          console.error('Erreur lors de l\'affectation du médecin à la clinique:', error);
        }
      );
    } else {
      console.error('Sélectionnez à la fois un médecin et une clinique.');
    }
  }
}