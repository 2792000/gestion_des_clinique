import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminService } from '../services/admin.service';
import { Clinique } from '../models/Clinique';

@Component({
  selector: 'app-modif-clinic',
  templateUrl: './modif-clinic.component.html',
  styleUrls: ['./modif-clinic.component.css']
})
export class ModifClinicComponent implements OnInit {
  clinique: Clinique = {
    idClinique: 0,
    libelleClinique: '',
    codeClinique: 0
  };

  constructor(private route: ActivatedRoute, private router: Router, private adminService: AdminService) {}
  code!: number; 
  ngOnInit(): void {
    this.code = this.route.snapshot.params['code'];

    if (this.code !== null) {


        this.adminService.affichClinique(this.code).subscribe(
          (clinique: Clinique) => {
            this.clinique = clinique;
          },
          (error) => {
            console.error('Error fetching clinic details:', error);
          }
        );
      
    } else {
      console.error('code is null');
    }
  }

  updateClinique(): void {
    this.adminService.updateClinique(this.clinique).subscribe(
      (updatedClinique: Clinique) => {
        console.log('Clinique updated successfully:', updatedClinique);
        // Rediriger vers la page de détails de la clinique mise à jour
        this.router.navigate(['/detailc', updatedClinique.codeClinique]);
      },
      (error) => {
        console.error('Error updating clinic:', error);
      }
    );
  }
  
}
