import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AdminService } from '../services/admin.service';
import { Clinique } from '../models/Clinique';

@Component({
  selector: 'app-detail-clinique',
  templateUrl: './detail-clinique.component.html',
  styleUrls: ['./detail-clinique.component.css']
})
export class DetailCliniqueComponent {
  clinique: Clinique | undefined;

  constructor(private route: ActivatedRoute, private adminService: AdminService) {}

  ngOnInit(): void {
    const code = this.route.snapshot.paramMap.get('code');
    if (code !== null) {
      const parsedcode = +code;
      if (!isNaN(parsedcode)) {
        this.getDetailClinique(parsedcode);
      } else {
        console.error('Invalid code:', code);
      }
    } else {
      console.error('code is null');
    }
  }

  getDetailClinique(code: number): void {
    this.adminService.affichClinique(code).subscribe(
      (clinique: Clinique) => {
        this.clinique = clinique;
      },
      (error) => {
        console.error('Error fetching clinic details:', error);
      }
    );
  }
}
