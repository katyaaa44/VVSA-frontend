import { Routes } from '@angular/router';
import { BasicAccountsDetailComponent } from './basic-accounts/basic-accounts-detail/basic-accounts-detail.component';

export const routes: Routes = [
    {  
        path: 'basic-account', 
        component: BasicAccountsDetailComponent 
    },
    {
        path: '',
        loadComponent: () =>
        import('./main-page/main-page.component')
            .then(m => m.MainPageComponent)
    },

    {
        path: 'basic-accounts',
        loadComponent: () =>
        import('./basic-accounts/basic-accounts-detail/basic-accounts-detail.component')
            .then(m => m.BasicAccountsDetailComponent)
    },

     {
        path: 'basic-accounts',
        loadComponent: () =>
        import('./basic-accounts/transactions-list/transactions-list.component')
            .then(m => m.TransactionsListComponent)
    },
];
