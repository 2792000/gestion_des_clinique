import { Component, OnInit } from '@angular/core';
import { AdminService } from '../services/admin.service';
import { ActivatedRoute } from '@angular/router';
import { User } from '../models/User';

@Component({
  selector: 'app-modif-user',
  templateUrl: './modif-user.component.html',
  styleUrls: ['./modif-user.component.css']
})
export class ModifUserComponent implements OnInit {
  user: User | undefined;

  constructor(private route: ActivatedRoute, private userService: AdminService) {}

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

  updateUser(): void {
    if (this.user) {
      console.log('Updating user',this.user)
      this.userService.updateUser(this.user).subscribe(

        (response) => {
          console.log('User updated successfully', response);
          // Handle success response if needed
        },
        (error) => {
          console.error('Error updating user:', error);
          // Handle error response if needed
        }
      );
    } else {
      console.error('User is undefined');
    }
  }
}
