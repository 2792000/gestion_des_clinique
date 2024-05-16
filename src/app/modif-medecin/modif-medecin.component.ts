import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AdminService } from '../services/admin.service';
import { Medecin } from '../models/Medecin';
import { Clinique } from '../models/Clinique';

@Component({
  selector: 'app-modif-medecin',
  templateUrl: './modif-medecin.component.html',
  styleUrls: ['./modif-medecin.component.css']
})
export class ModifMedecinComponent implements OnInit {
  clinique!:Clinique
  medecin: Medecin = {
    idMed: 0, // Assign a default value to 'id' if needed
    cinMed : 0,
    nomMed:"",
    prix :0,
    specialite: "",
    telMed : 0,

  };

  constructor(private medecinService: AdminService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];
    console.log(id);
    this.getMedecinById(id);
    console.log(this.medecin)
  }

  getMedecinById(id: number): void {
    this.medecinService.getOneMedecin(id)
      .subscribe(
        data => {
          this.medecin = data;
        },
        error => {
          console.log(error);
        });
  }

  updateMedecin(): void {
    this.medecinService.updateMedecin(this.medecin)
      .subscribe(
        response => {
          console.log(response);
    
        },
        error => {
          console.log(error);

        });
  }
}
