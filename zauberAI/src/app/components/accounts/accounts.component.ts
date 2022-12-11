import { ChangeDetectionStrategy, Component } from "@angular/core";


@Component({
    selector: 'app-accounts',
    templateUrl: './accounts.component.html',
    styleUrls: ['./accounts.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class AccountsComponent {
    
    // declare accounts observable and initialize with list from service



}