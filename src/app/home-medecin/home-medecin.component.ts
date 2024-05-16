import { Component, OnInit } from '@angular/core';
import { Medecin } from '../models/Medecin';
import { Router } from '@angular/router';
import { AdminService } from '../services/admin.service';
import { Patient } from '../models/Patient';
import { EtatRDV, PaiementRDV, RDV } from '../models/RDV';

@Component({
  selector: 'app-home-medecin',
  templateUrl: './home-medecin.component.html',
  styleUrls: ['./home-medecin.component.css']
})
export class HomeMedecinComponent implements OnInit {
  page:String ="home";
  cin: number = 0;
  medecins: Medecin[] = [];
  medecin!:Medecin;
  patients : Patient[]= [];
  rdvs: RDV[] = [];
  patientRDVs: { patient: Patient, rdvs: RDV[] }[] = [];
  patient: Patient = {
    cinPat: 0,
    nomPat: '',
    modePaiement: '',
    dateNaissance: new Date(),
    telPat: 0,
    email: ''
  };
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
  constructor(private router: Router, private adminService: AdminService) { }

  ngOnInit(): void {
    this.getMedecins();
    this.getPatients();
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

  getMed(): void {
    const result = this.medecins.filter(m => m.cinMed === this.cin);
    if (result.length > 0) {
      this.medecin = result[0];
      console.log('Médecin trouvé:', this.medecin);
    } else {
      console.log('Aucun médecin trouvé avec ce CIN.');
    }
    this.getrdv(this.medecin.cinMed)
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
 getrdv(cinmed: number): void {
  this.adminService.getRDVsForMedecin(cinmed).subscribe(
    (reds: RDV[]) => {
      console.log("Patients data:", reds);
      this.rdvs = reds;
      this.filterPatientsByRDV();
    },
    (error) => {
      console.error('Error fetching patients:', error);
    }
  );

 }
 filterPatientsByRDV(): void {
  this.patientRDVs = [];
  this.rdvs.forEach(rdv => {
    const patient = this.patients.find(p => p.nomPat === rdv.nomDuPatient);
    if (patient) {
      const patientRDV = this.patientRDVs.find(pr => pr.patient.cinPat === patient.cinPat);
      if (patientRDV) {
        patientRDV.rdvs.push(rdv);
      } else {
        this.patientRDVs.push({ patient, rdvs: [rdv] });
      }
    }
  });
}
updateEtatRDV(idRDV: number, etat: any): void {
  this.adminService.marquerEtatRDV(idRDV, etat, this.medecin.cinMed).subscribe(
    () => {
      console.log('État du RDV mis à jour.');
      this.getrdv(this.medecin.cinMed); // Refresh the RDV list
    },
    (error) => {
      console.error('Erreur lors de la mise à jour de l\'état du RDV:', error);
    }
  );
}

updatePaiementRDV(idRDV: number, paiement: String): void {
  this.adminService.marquerPaiementRDV(idRDV, paiement, this.medecin.cinMed).subscribe(
    () => {
      console.log('Paiement du RDV mis à jour.');
      this.getrdv(this.medecin.cinMed); // Refresh the RDV list
    },
    (error) => {
      console.error('Erreur lors de la mise à jour du paiement du RDV:', error);
    }
  );
}
change(num:number){
  if (num==1){
    this.page="home"
  }else if (num==2) {
    this.page="add"
  }else {
    this.page='rdv'
  }
}
addPatient(): void {
  this.adminService.addPatient(this.patient).subscribe(
    (response) => {
      console.log('Patient ajouté avec succès:', response);
      this.page="home"
    },
    (error) => {
      console.error('Erreur lors de l\'ajout du patient:', error);
    }
  );
}




addrdv(idMed: any,idPat:any , nomDuPat:string,nomMed:string): void {
  this.rdv.idMed = idMed;
  this.rdv.idPat = idPat;
  this.rdv.nomDuPatient = nomDuPat;
  this.rdv.nomDuMedecin =nomMed;
  this.page="rdv"
}
onSubmit(): void {


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
      this.page="home"
    },
    (error) => {
      // Une erreur s'est produite lors de l'ajout du rendez-vous
      console.error('Error adding appointment:', error);
    }
  );
}

}

