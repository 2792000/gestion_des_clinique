import { Component, OnInit } from '@angular/core';
import { Medecin } from '../models/Medecin';
import { Router } from '@angular/router';
import { AdminService } from '../services/admin.service';
import { Patient } from '../models/Patient';
import { EtatRDV, PaiementRDV, RDV } from '../models/RDV';
@Component({
  selector: 'app-patienthome',
  templateUrl: './patienthome.component.html',
  styleUrls: ['./patienthome.component.css']
})
export class PatienthomeComponent implements OnInit {
  page:String ="home";
  cin: number = 0;
  medecins: Medecin[] = [];
  patients : Patient[]= [];
  rdvs: RDV[] = [];
  patient!: Patient ;
  rdv: RDV = {
    idRDV: 0,
    dateRDV: new Date(),
    heureRdv: {hours: 0, minutes: 0}, // Initialisez la propriété heureRdv
    nomDuPatient: '',
    nomDuMedecin: '',
    etatRDV: EtatRDV.MODIFIER,
    idPat: 0,
    idMed: 0,
    paiementRDV: PaiementRDV.NonPayes
  };
  selectedSpecialite: string = '';
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
  getpass(): void {
    const result = this.patients.filter(p => p.cinPat === this.cin);
    if (result.length > 0) {
      this.patient = result[0];
      console.log('Médecin trouvé:', this.patient);
    } else {
      console.log('Aucun médecin trouvé avec ce CIN.');
    }
    this.getrdv(this.patient.cinPat)
  }
 getrdv(cinpat: number): void {
  this.adminService.getRDVsForPatient(cinpat).subscribe(
    (reds: RDV[]) => {
      console.log("Patients data:", reds);
      this.rdvs = reds;
    },
    (error) => {
      console.error('Error fetching patients:', error);
    }
  );

 }




change(num:number){
  if (num==1){
    this.page="home"
  }else if (num==2) {
    this.page="rdv"
  }else if (num==3) {
    this.page='listm'
  }else{
    this.page='addrdv'
  }
}

addrdv(idMed: any,idPat:any , nomDuPat:string,nomMed:string): void {
  this.rdv.idMed = idMed;
  this.rdv.idPat = idPat;
  this.rdv.nomDuPatient = nomDuPat;
  this.rdv.nomDuMedecin =nomMed;
  this.page="addrdv"
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
  this.getpass()
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
filterMedecins(): void {
  // Implement filtering logic here based on selectedSpecialite and selectedClinique
  // For simplicity, we are only filtering by specialite in this example
  if (this.selectedSpecialite==="ALL"){
    this.getMedecins()
  }else
  this.getMedecinsBySpecialite();
}

}
