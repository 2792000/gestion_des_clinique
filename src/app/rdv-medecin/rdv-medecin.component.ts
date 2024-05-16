import { Component, OnInit } from '@angular/core';
import { AdminService } from '../services/admin.service';
import { ActivatedRoute, Router } from '@angular/router';
import { RDV } from '../models/RDV';
import { Medecin } from '../models/Medecin';
import { Patient } from '../models/Patient';
import { User } from '../models/User';

@Component({
  selector: 'app-rdv-medecin',
  templateUrl: './rdv-medecin.component.html',
  styleUrls: ['./rdv-medecin.component.css']
})
export class RdvMedecinComponent implements OnInit {

cinmed:any;
rdvs: RDV[]=[];
nomMed: any;

constructor(private route: ActivatedRoute, private adminService: AdminService ,private router: Router) {}

ngOnInit(): void {
  const cinmed = this.route.snapshot.paramMap.get('cinmed');
  if (cinmed !== null) {
    const cinMed = +cinmed;
    if (!isNaN(cinMed)) {
      this.adminService.getRDVsForMedecin(cinMed).subscribe(
        (rdvs: RDV[]) => {
          this.rdvs = rdvs;
        },
        (error) => {
          console.error('Error fetching user details:', error);
        }
      );
    } else {
      console.error('Invalid user ID:', cinMed);
    }
  } else {
    console.error('User ID is null');
  }
  // Chargement des patients

}





}
