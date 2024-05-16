import { Component } from '@angular/core';
import { AdminService } from '../services/admin.service';
import { Medecin } from '../models/Medecin';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Clinique } from '../models/Clinique';
@Component({
  selector: 'app-add-medecin',
  templateUrl: './add-medecin.component.html',
  styleUrls: ['./add-medecin.component.css']
})
export class AddMedecinComponent {
  cliniques: Clinique[] = [];
  clinique!:Clinique;
  medecin: Medecin = {
    idMed: 0, // Assign a default value to 'id' if needed
    cinMed : 0,
    nomMed:"",
    prix :0,
    specialite: "",
    telMed : 0,


  };
  constructor(private adminService: AdminService,private router: Router ) {}
  ngOnInit() {
    this.getAllCliniques()
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
  addMedecin(): void {
    const newMedecin: Medecin = {
      idMed: 0,
      cinMed: this.medecin.cinMed,
      nomMed: this.medecin.nomMed,
      prix: this.medecin.prix,
      specialite: this.medecin.specialite,
      telMed: this.medecin.telMed,

    };

    this.adminService.addMedecin(newMedecin).subscribe(
      (response) => {
        console.log('addMedecin successful', response);
        // Handle successful signup response if needed
      },
      (error) => {
        console.error('addMedecin error:', error);
        // Handle signup error if needed
      }
    );

  }
}
