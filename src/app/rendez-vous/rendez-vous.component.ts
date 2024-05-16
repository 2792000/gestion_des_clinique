// Importez les dépendances nécessaires
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminService } from '../services/admin.service';
import { RDV, EtatRDV, PaiementRDV } from '../models/RDV';
import { Patient } from '../models/Patient';
import { Medecin } from '../models/Medecin';
import { Time } from '@angular/common';

@Component({
  selector: 'app-rendezvous',
  templateUrl: './rendez-vous.component.html',
  styleUrls: ['./rendez-vous.component.css']
})
export class RendezVousComponent implements OnInit {
  rdv: RDV = {
    idRDV: 0,
    dateRDV: new Date(),
    heureRdv: {hours: 0, minutes: 0}, // Initialisez la propriété heureRdv
    nomDuPatient: '',
    nomDuMedecin: '',
    etatRDV: EtatRDV.ACCEPTER,
    idPat: 0,
    idMed: 0,
    paiementRDV: PaiementRDV.NonPayes
  };
  patient!: Patient;
  medecins: Medecin[]=[];

  constructor(private route: ActivatedRoute, private adminService: AdminService , private router: Router) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id !== null) {
      const parsedId = +id;
      if (!isNaN(parsedId)) {
        this.getPatient(parsedId);
    
      } else {
        console.error('Invalid id:', id);
      }
    } else {
      console.error('Id is null');
    }
    this.getMedecins();
  }

  getPatient(id: number): void {
    this.adminService.getPatientById(id).subscribe(
      (patient: Patient) => {
        this.patient = patient;
      },
      (error) => {
        console.error('Error fetching patient details:', error);
      }
    );
  }

  getMedecins(): void {
    this.adminService.getAllMedecins().subscribe(
      (medecins: Medecin[]) => {
        this.medecins = medecins;
      },
      (error) => {
        console.error('Error fetching patient details:', error);
      }
    );
  }
  updateNomMedecin(idMed: any): void {
  
    
      const medecin = this.medecins.find(med => med.idMed === parseInt(idMed));
      if (medecin) {
        this.rdv.nomDuMedecin = medecin.nomMed;
      }
    
  }
  
  onSubmit(): void {
    // Vérifier si le patient est défini
    if (!this.patient) {
      console.error('Patient is not defined.');
      return;
    }
  
    // Vérifier si le rendez-vous a une date et une heure valides
    if (!this.rdv.dateRDV || !this.rdv.heureRdv) {
      console.error('Invalid date or time for the appointment.');
      return;
    }
  
    // Vérifier si le médecin est sélectionné
    if (!this.rdv.idMed) {
      console.error('No doctor selected for the appointment.');
      return;
    }else{
      this.updateNomMedecin(this.rdv.idMed)
    }
  
    // Créer le rendez-vous
    const newRDV: RDV = {
      idRDV: 0, // L'id sera généré automatiquement par le serveur
      dateRDV: this.rdv.dateRDV,
      heureRdv: this.rdv.heureRdv,
      nomDuPatient: this.patient.nomPat, // Utiliser le nom du patient
      nomDuMedecin: this.rdv.nomDuMedecin, // Utiliser le nom du médecin
      etatRDV: this.rdv.etatRDV,
      idMed: this.rdv.idMed,
      idPat: this.patient.idPat,
      paiementRDV: this.rdv.paiementRDV
    };
  console.log(newRDV);
    // Appeler la méthode d'ajout de rendez-vous du service Admin
    this.adminService.ajouterRDV(newRDV).subscribe(
      (rdv: RDV) => {
        // Le rendez-vous a été ajouté avec succès, effectuez des actions supplémentaires si nécessaire
        console.log('Appointment added successfully:', rdv);
        this.router.navigate(['/listp']);
      },
      (error) => {
        // Une erreur s'est produite lors de l'ajout du rendez-vous
        console.error('Error adding appointment:', error);
      }
    );
  }
  
}
