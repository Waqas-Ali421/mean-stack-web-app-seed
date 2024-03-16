import { Component, Input } from '@angular/core';
import {User} from "../../../model/User";
import {UsStatesService} from "../../../services/us-states.service";

@Component({
  selector: 'app-user-table',
  templateUrl: './user-table.component.html',
  styleUrls: ['./user-table.component.scss']
})
export class UserTableComponent {
  @Input() users: User[] = [];
  @Input() showAge30Plus: boolean = false;
  constructor(private usStatesService: UsStatesService) {}
  getFilteredUsers(): User[] {
    if (this.showAge30Plus) {
      return this.users.filter(user => user.age >= 30);
    } else {
      return this.users;
    }
  }
  getStateFullName(abbreviation: string): string {
    return this.usStatesService.getStateFullName(abbreviation);
  }
}
