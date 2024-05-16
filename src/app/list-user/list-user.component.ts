import { Component } from '@angular/core';
import { AdminService } from '../services/admin.service';
import { Observable } from 'rxjs';
import { User } from '../models/User';
import {  Router } from '@angular/router';
@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css']
})
export class ListUserComponent {
  userId: number = 0; // You need to set the user ID appropriately
  role: string = ''; // Replace 'student' with the desired role
  subjectId: number = 1; // Replace 1 with the desired subject ID
  classId: number = 1; // Replace 1 with the desired class ID
  users: User[] = [];
  isLoading: boolean = false;
  noteValue: number=0;
  user: User = {
    id: 0,
    firstname: '',
    lastname: '',
    email: '',
    password: '',
    role: '',

  };
constructor(private userService: AdminService,private router: Router) {}

ngOnInit(): void {
  this.getUsers();
}

getUsers(): void {
  this.userService.getUsers().subscribe(
    (users: User[]) => {
      console.log("the data is",users)
      this.users = users;
    },
    (error) => {
      console.error('Error fetching users:', error);
    }
  );
}
viewUserDetails(userId: number): void {
  this.router.navigate(['/detailu', userId]);
}

deleteUser(userId: number): void {
  this.userService.deleteUser(userId).subscribe(
    () => {
      console.log('User deleted successfully.');
      // After successful deletion, update the patient list
      this.getUsers();
    },
    (error) => {
      console.error('Error deleting patient:', error);
    }
  );
}

updateUser(userId: number): void {
  this.router.navigate(['/upuser', userId]);
}
}
