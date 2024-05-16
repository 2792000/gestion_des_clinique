import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AdminService } from '../services/admin.service';
import { Patient } from '../models/Patient';
import { RDV } from '../models/RDV';

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.css']
})
export class PatientComponent implements OnInit {
  patient!: Patient;
  rdvs!: RDV[];

  constructor(private route: ActivatedRoute, private adminService: AdminService) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id !== null) {
      const parsedId = +id;
      if (!isNaN(parsedId)) {
        this.getPatientDetails(parsedId);
       
      } else {
        console.error('Invalid id:', id);
      }
    } else {
      console.error('Id is null');
    }
  }

  getPatientDetails(id: number): void {
    this.adminService.getPatientById(id).subscribe(
      (patient: Patient) => {
        this.patient = patient;
        this.getPatientAppointments();
      },

      (error) => {
        console.error('Error fetching patient details:', error);
      }
    );
  }

  getPatientAppointments(): void {
    
    this.adminService.getRDVsForPatient(this.patient.cinPat).subscribe(
      (rdvs: RDV[]) => {
        this.rdvs = rdvs;
      },
      (error) => {
        console.error('Error fetching patient appointments:', error);
      }
    );
  }
}
