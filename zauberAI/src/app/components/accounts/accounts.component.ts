import { HttpClient } from "@angular/common/http";
import { ChangeDetectionStrategy, Component } from "@angular/core";
import { Observable } from "rxjs";
import { AccountsService } from "src/app/services/accounts.service";

export interface Account {
    id: number;
    name: string;
    email: string;
    password: string;
    role: string;
    created_at: string;
    updated_at: string;
}

@Component({
    selector: 'app-accounts',
    templateUrl: './accounts.component.html',
    styleUrls: ['./accounts.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class AccountsComponent {

    
    // declare accounts observable and initialize with list from service
    accounts$: Observable<Account[]> = this.accountsService.list();

        
    
    constructor(private http: HttpClient, private accountsService: AccountsService) { }







}