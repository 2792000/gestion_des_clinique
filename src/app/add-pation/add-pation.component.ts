import { Component } from '@angular/core';
import { AdminService } from '../services/admin.service';
import { Router } from '@angular/router';
import { Patient } from '../models/Patient';

@Component({
  selector: 'app-add-pation',
  templateUrl: './add-pation.component.html',
  styleUrls: ['./add-pation.component.css']
})
export class AddPationComponent {
  constructor(private userService: AdminService, private router: Router) {}

  patient: Patient = {
    cinPat: 0,
    nomPat: '',
    modePaiement: '',
    dateNaissance: new Date(),
    telPat: 0,
    email: ''
  };

  addPatient(): void {
    this.userService.addPatient(this.patient).subscribe(
      (response) => {
        console.log('Patient ajouté avec succès:', response);
        this.router.navigate(['/listp']);
      },
      (error) => {
        console.error('Erreur lors de l\'ajout du patient:', error);
      }
    );
  }
}
