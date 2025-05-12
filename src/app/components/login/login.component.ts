import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataUsersService, User } from '../../services/data-users.service';

@Component({
  selector: 'app-login',
  imports: [FormsModule, ReactiveFormsModule],
  standalone: true,
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  
  constructor(private dataUsersService: DataUsersService, private router: Router) { }

  userName: string = "";
  password: string = "";
  currentUser: User | undefined;

  loginForm = new FormGroup({
    userName: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required, Validators.minLength(4)])
  })
  onSubmit() {
    this.currentUser = this.dataUsersService.findUser(this.userName, this.password);
    if (this.currentUser == undefined) {
      alert("User not found");
    }
    else if (this.currentUser.role === "Teacher") {
      this.router.navigate(['lessons']);
      sessionStorage.setItem("role", this.currentUser.role);
    }
    else if (this.currentUser.role === "Secretary") {
      this.router.navigate(['registers']);
      sessionStorage.setItem("role", this.currentUser.role);
    }
    this.userName = "";
    this.password = "";
  }
}
