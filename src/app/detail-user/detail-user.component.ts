import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminService } from '../services/admin.service';
import { User } from '../models/User';

@Component({
  selector: 'app-detail-user',
  templateUrl: './detail-user.component.html',
  styleUrls: ['./detail-user.component.css']
})
export class DetailUserComponent implements OnInit {
  user: User | undefined;

  constructor(private route: ActivatedRoute, private userService: AdminService ,private router: Router) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id !== null) {
      const userId = +id;
      if (!isNaN(userId)) {
        this.userService.getUserById(userId).subscribe(
          (user: User) => {
            this.user = user;
          },
          (error) => {
            console.error('Error fetching user details:', error);
          }
        );
      } else {
        console.error('Invalid user ID:', id);
      }
    } else {
      console.error('User ID is null');
    }
  }
  updateUser(userId: number): void {
    this.router.navigate(['/upuser', userId]);
  }

}
