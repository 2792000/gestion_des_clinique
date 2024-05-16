import { Component , OnInit} from '@angular/core';
import { AdminService } from '../services/admin.service';
import { Patient } from '../models/Patient';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-modif-patient',
  templateUrl: './modif-patient.component.html',
  styleUrls: ['./modif-patient.component.css']
})
export class ModifPatientComponent implements OnInit{
  id!: number; 
  patient: Patient = {
    idPat: 0,
    cinPat: 0,
    nomPat: "",
    modePaiement: "",
    email: "",
    telPat: 0,
    dateNaissance: new Date()
  };

  constructor(private route: ActivatedRoute, private router: Router, private patientService: AdminService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.getPatient(this.id);
  }

  getPatient(id: number): void {
    this.patientService.getPatientById(id).subscribe(
      (patient: Patient) => {
        this.patient = patient;
      },
      (error) => {
        console.error('Error fetching patient:', error);
      }
    );
  }

  updatePatient(): void {
    this.patientService.updatePatient(this.patient).subscribe(
      () => {
        console.log('Patient updated successfully.');
        this.router.navigate(['/listp']);
      },
      (error) => {
        console.error('Error updating patient:', error);
      }
    );
  }
}
