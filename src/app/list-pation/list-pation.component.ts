import { Component, OnInit } from '@angular/core';
import { Patient } from '../models/Patient';
import { AdminService } from '../services/admin.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-pation',
  templateUrl: './list-pation.component.html',
  styleUrls: ['./list-pation.component.css']
})
export class ListPationComponent implements OnInit {
  patients: Patient[] = [];
  isLoading: boolean = false;
  noteValue: number = 0;

  constructor(private router: Router, private patientService: AdminService) {}

  ngOnInit(): void {
    this.getPatients();
  }

  getPatients(): void {
    this.patientService.getPatients().subscribe(
      (patients: Patient[]) => {
        console.log("Patients data:", patients);
        this.patients = patients;
      },
      (error) => {
        console.error('Error fetching patients:', error);
      }
    );
  }
  deletePatient(id: any): void {
    this.patientService.deletePatient(id).subscribe(
      () => {
        console.log('Patient deleted successfully.');
        // After successful deletion, update the patient list
        this.getPatients();
      },
      (error) => {
        console.error('Error deleting patient:', error);
      }
    );
  }

  viewPatientDetails(id: any): void {
    this.router.navigate(['/detail', id]);
  }

  editPatient(id: any): void {
    this.router.navigate(['/upatient', id]);
  }

 

  redirectToRendezvous(id: any): void {
    this.router.navigate(['/rendezvous', id]);
  }
}
