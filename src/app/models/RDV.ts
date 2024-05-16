import { Time } from "@angular/common";


export interface RDV {
    idRDV: number;
    dateRDV: Date;
    heureRdv: Time; 
    nomDuPatient: string;
    nomDuMedecin: string;
    etatRDV: EtatRDV;
    idPat: any;
    idMed: any;
    paiementRDV: PaiementRDV;
  }
  
  export enum EtatRDV {
    ACCEPTER,
    ANNULER,
    MODIFIER
  }
  
  export enum PaiementRDV {
    Payes,
    NonPayes
  }
  
  // Define the Patient and Medecin interfaces if you haven't already
 