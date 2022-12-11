// angular http crud service for accounts with typed parameters and typed return values

import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Account } from "./accounts.model";

@Injectable({ providedIn: 'root' })
export class AccountsService {

    // declare accounts observable and initialize with list from service
    accounts$: Observable<Account[]> = this.list();


    environment = { apiUrl: 'http://localhost:3000' };

    constructor(private http: HttpClient) { }

    // create a new account
    create(account: Account): Observable<Account> {
        return this.http.post<Account>(`${this.environment.apiUrl}/accounts`, account);
    }

    // read an account by id
    get(id: number): Observable<Account> {
        return this.http.get<Account>(
          `${this.environment.apiUrl}/accounts/${id}`
        );
    }

    // list all accounts
    list(): Observable<Account[]> {
        return this.http.get<Account[]>(`${this.environment.apiUrl}/accounts`);
    }

    // update an account by id
    update(id: number, account: Account): Observable<Account> {
        return this.http.put<Account>(
          `${this.environment.apiUrl}/accounts/${id}`,
          account
        );
    }

    // delete an account by id
    delete(id: number): Observable<Account> {
        return this.http.delete<Account>(
          `${this.environment.apiUrl}/accounts/${id}`
        );
    }
}
    