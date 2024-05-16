import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from '../services/admin.service';
import { Medecin } from '../models/Medecin';
import { Clinique } from '../models/Clinique';

@Component({
  selector: 'app-list-medecin',
  templateUrl: './list-medecin.component.html',
  styleUrls: ['./list-medecin.component.css']
})
export class ListMedecinComponent implements OnInit {
  medecins: Medecin[] = [];
  specialites!: string; // Populate this list as per your application requirements
  cliniques: Clinique[] = []; // Populate this list as per your application requirements
  selectedSpecialite: string = '';

  constructor(private router: Router, private adminService: AdminService) { }

  ngOnInit(): void {
    this.getMedecins();
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

  goToDetail(id: number): void {
    this.router.navigate(['/detailm', id]);
  }

  goToUpdate(id: number): void {
    this.router.navigate(['/upmedecin', id]);
  }
  goTordv(cinMed: number): void {
    this.router.navigate(['/rdvmedeci', cinMed]);
  }
  deleteMedecin(id: number): void {
    if (confirm('Êtes-vous sûr de vouloir supprimer ce médecin ?')) {
      this.adminService.deleteMedecin(id).subscribe(
        () => {
          // Actualiser la liste des médecins après la suppression
          this.getMedecins();
          console.log('Médecin supprimé avec succès.');
        },
        (error) => {
          console.error('Erreur lors de la suppression du médecin:', error);
        }
      );
    }
  }
  getMedecinsBySpecialite(): void {

      this.adminService.getMedecinsBySpecialite(this.selectedSpecialite).subscribe(
        (medecins: Medecin[]) => {
          
          this.medecins = medecins;
        },
        (error) => {
          console.error('Error fetching medecins by specialite:', error);
        }
      );

  }
getcliniques(){
  this.adminService.getAllCliniques().subscribe(
    (cliniques: Clinique[]) => {
      this.cliniques = cliniques;
    },
    (error) => {
      console.error('Error fetching medecins by specialite:', error);
    }
  );
}
  filterMedecins(): void {
    // Implement filtering logic here based on selectedSpecialite and selectedClinique
    // For simplicity, we are only filtering by specialite in this example
    if (this.selectedSpecialite==="ALL"){
      this.getMedecins()
    }else
    this.getMedecinsBySpecialite();
  }
  
}