import { Component } from '@angular/core';
import { AdminService } from '../services/admin.service';
import { Clinique } from '../models/Clinique';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-clinique',
  templateUrl: './add-clinique.component.html',
  styleUrls: ['./add-clinique.component.css']
})
export class AddCliniqueComponent {
  clinique: Clinique = {
    idClinique: 0, // Assign a default value to 'id' if needed
    libelleClinique: '',
    codeClinique: 0,
  };

  constructor(private adminService: AdminService, private router: Router) {}

  addClinique(): void {
    this.adminService.addClinique(this.clinique).subscribe(
      (response) => {
        console.log('addClinique successful', response);
        // Rediriger vers une autre page après l'ajout si nécessaire
        this.router.navigate(['/listc']);
      },
      (error) => {
        console.error('addClinique error:', error);
        // Gérer l'erreur d'ajout si nécessaire
      }
    );
  }
}
