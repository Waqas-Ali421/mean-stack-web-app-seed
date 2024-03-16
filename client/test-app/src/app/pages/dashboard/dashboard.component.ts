import {Component, inject, OnInit, TemplateRef} from '@angular/core';
import {User} from "../../model/User";
import {UsersService} from "../../services/users.service";
import { ModalService } from '../../services/modal-service';
import {ToastrService} from 'ngx-toastr'
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  users: User[] = [];
  showAge30Plus: boolean = false;
  bodyText = 'This text can be updated in modal 1';
  user: User = {
    firstName: '',
    lastName: '',
    age: 0,
    image: '',
    city:'',
    state:''
  };
  constructor(private userService: UsersService,protected modalService: ModalService, private toastr: ToastrService) {}

  ngOnInit(): void {
    this.userService.getUsers().subscribe(users => {
      console.log(users)
      this.users = users.sort((a, b) => a.age - b.age);
    });
  }

  toggleFilter(): void {
    this.showAge30Plus = !this.showAge30Plus;
  }

  onSubmit(): void {
    debugger;
    if (!this.validateForm()) {
      // Form is not valid, do not proceed
      this.showError();
      return;
    }
    this.toastr.success("User added successfully!", "Success!");
    // Form is valid, continue with adding the user
    this.users.unshift(this.user);
    this.modalService.close();
  }

  private validateForm(): boolean {
    // Check if any required fields are empty
    if (!this.user.firstName || !this.user.lastName || !this.user.age) {
      // Show error message or handle validation as needed
      return false;
    }

    // Additional validation logic can be added here

    return true;
  }
  showError(){
    this.toastr.error("First Name, Last Name and Age is required!", "Error!");
  }


}
