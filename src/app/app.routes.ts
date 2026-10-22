import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./main-page/main-page.component')
        .then(m => m.MainPageComponent)
  },

  {
    path: 'basic-accounts',
    loadComponent: () =>
      import('./basic-accounts/transactions-list/transactions-list.component')
        .then(m => m.TransactionsListComponent)
  },

  {
    path: 'basic-accounts/detail/:id',
    loadComponent: () =>
      import('./basic-accounts/basic-accounts-detail/basic-accounts-detail.component')
        .then(m => m.BasicAccountsDetailComponent)
  },

  {
    path: '**',
    redirectTo: ''
  }
];