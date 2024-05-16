import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, catchError, of, throwError } from 'rxjs';

import { SchoolClass } from '../models/SchoolClass';
import { Medecin} from '../models/Medecin';
import { Subject } from '../models/Subject';
import { User } from '../models/User';
import { Clinique } from '../models/Clinique';
import { Patient } from '../models/Patient';
import { RDV } from '../models/RDV';

@Injectable({
  providedIn: 'root',
})
export class AdminService {
  private baseUrl = 'http://localhost:8087/api/v1/auth/admin';

  constructor(private http: HttpClient) {}

// Méthode CRUD CLINIQUE

  addClinique(clinique: Clinique): Observable<Clinique> {
    return this.http.post<Clinique>(`${this.baseUrl}/addclinique`, clinique);
  }

  getAllCliniques(): Observable<Clinique[]> {
    const url = `${this.baseUrl}/allCliniques`;
    return this.http.post<Clinique[]>(url, {});
  }
  updateClinique(clinique: Clinique): Observable<Clinique> {
    return this.http.put<Clinique>(`${this.baseUrl}/updateClinique`, clinique);
  }

  deleteClinique(codeClinique: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/deleteClinique/${codeClinique}`);
  }

  affichClinique(codeClinique: number): Observable<Clinique> {
    return this.http.get<Clinique>(`${this.baseUrl}/affichClinique/${codeClinique}`);
  }

  //Methode CRUD USER
  getUserById(id: number): Observable<User> {
    return this.http.get<User>(`${this.baseUrl}/affichUser/${id}`);
  }

  updateUser(user: User): Observable<User> {
    return this.http.put<User>(`${this.baseUrl}/updateUser`, user);
  }

  deleteUser(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/deleteUser/${id}`);
  }

  // Méthode CRUD MEDECIN
  getAllMedecins(): Observable<Medecin[]> {
    const url = `${this.baseUrl}/listMedecins`;
      return this.http.get<Medecin[]>(url);
  }
  addMedecin(medecin: Medecin): Observable<Medecin> {
    return this.http.post<Medecin>(`${this.baseUrl}/addmedecin`, medecin);
  }
  deleteMedecin(idMedecin: number): Observable<void> {
    const url = `${this.baseUrl}/deleteMedecin/${idMedecin}`;
    return this.http.delete<void>(url);
  }

  updateMedecin(medecin: Medecin): Observable<Medecin> {
    const url = `${this.baseUrl}/updateMedecin`;
    return this.http.put<Medecin>(url, medecin);
  }
  getOneMedecin(id: number): Observable<Medecin> {
    return this.http.put<Medecin>(`${this.baseUrl}/getOneMedecin`, id);
  }
  getMedecinsBySpecialite(specialite: string): Observable<Medecin[]> {
    return this.http.get<Medecin[]>(`${this.baseUrl}/byspecialite?specialite=${specialite}`);
  }
  affectMedecinClinique(idMed: number, idClinique: number): Observable<void> {
    return this.http.put<void>(`${this.baseUrl}/affecterMedecinClinique/${idMed}/${idClinique}`, {});
  }
  // Methode CRUD PATIENT
  getPatients(): Observable<Patient[]> {
    const url = `${this.baseUrl}/listpatient`;
    return this.http.get<Patient[]>(url);
  }
  addPatient(patient: Patient): Observable<Patient> {
    return this.http.post<Patient>(`${this.baseUrl}/addpatient`, patient);
  }

  deletePatient(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/deletePatient/${id}`);
  }

  getPatientById(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/affichPatient/${id}`).pipe(
      catchError(this.handleError)
    );
  }

  updatePatient(patient: Patient): Observable<Patient> {
    return this.http.put<Patient>(`${this.baseUrl}/updatePatient`, patient).pipe(
      catchError(this.handleError)
    );
  }

  
  private handleError(error: HttpErrorResponse) {
    // Handle your error here, for example, log it or show a user-friendly message
    console.error('An error occurred:', error);
    // Return an observable with a user-facing error message
    return throwError('Something bad happened; please try again later.');
  }

  ajouterRDV(rdv: RDV): Observable<RDV> {
    return this.http.post<RDV>(`${this.baseUrl}/addrdv`, rdv);
  }

 //Methods CRUD RDV
 getRDVsForPatient(cinPatient: number): Observable<RDV[]> {
    return this.http.get<RDV[]>(`${this.baseUrl}/patients/${cinPatient}/rdvs`);
  }
 getAllRDVs(): Observable<RDV[]> {
  return this.http.get<RDV[]>(`${this.baseUrl}/listRDVs`);
}
getRDVsForMedecin(cinMedecin: number): Observable<RDV[]> {
  return this.http.get<RDV[]>(`${this.baseUrl}/medecin/${cinMedecin}/rdvs`);
}
marquerEtatRDV(idRDV: number, etat: string, cinMedecin: number): Observable<any> {
  const url = `${this.baseUrl}/rdvs/${idRDV}/etat/${etat}?cinMedecin=${cinMedecin}`;
  return this.http.put(url, {});
}


marquerPaiementRDV(idRDV: number, paiement: any, cinMedecin: number): Observable<any> {
  const url = `${this.baseUrl}/rdvs/${idRDV}/paiement/${paiement}?cinMedecin=${cinMedecin}`;
  return this.http.put(url, {});
}
 
  

  getUsers(): Observable<User[]> {
    const url = `${this.baseUrl}/listUsers`;
    return this.http.get<User[]>(url);
  }
}