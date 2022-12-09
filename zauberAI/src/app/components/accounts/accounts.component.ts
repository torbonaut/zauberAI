import { HttpClient } from "@angular/common/http";
import { ChangeDetectionStrategy, Component } from "@angular/core";

@Component({
    selector: 'app-accounts',
    templateUrl: './accounts.component.html',
    styleUrls: ['./accounts.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class AccountsComponent {
    // table clients, columns = id, firstname, lastname, assigned_manager_id, sales, year
    // table managers = id, department_id, firstname, lastname
    // table departments = id, name
    // table departments_managers = id, department_id, manager_id
        
    
    constructor(private http: HttpClient) {

    }






}