import { Component, OnInit } from '@angular/core';
import { AdminService } from '../services/admin.service';
import { Clinique } from '../models/Clinique';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-clinique',
  templateUrl: './list-clinique.component.html',
  styleUrls: ['./list-clinique.component.css']
})
export class ListCliniqueComponent implements OnInit {
  cliniques: Clinique[] = [];

  constructor(private adminService: AdminService,private router: Router,) { }

  ngOnInit(): void {
    this.getAllCliniques();
  }

  getAllCliniques(): void {
    this.adminService.getAllCliniques().subscribe(
      (cliniques: Clinique[]) => {
        this.cliniques = cliniques;
      },
      (error) => {
        console.error('Error fetching clinics:', error);
      }
    );
  }
  detail(codeClinique: number): void {
    this.router.navigate(['/detailc', codeClinique]);
  }

  update(clinique: Clinique): void {
    this.router.navigate(['/upclinique', clinique.codeClinique]);
  }

  delete(codeClinique: any): void {
    console.log('Deleting code', codeClinique);
    this.adminService.deleteClinique(codeClinique).subscribe(
      () => {
        this.getAllCliniques();
          console.log('Clinique supprimé avec succès.');
      },
      (error) => {
        console.error('Error deleting clinic:', error);
      }
    );
  }
}
