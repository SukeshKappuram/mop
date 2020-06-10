import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';
import { AnonymousLayoutComponent } from './layouts/anonymous-layout/anonymous-layout.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';


const routes: Routes = [
  {
    path: '',
    component: AuthLayoutComponent,
    children: [

    ]
  },
  {
    path: '',
    component: AnonymousLayoutComponent,
    children: [{
      path: 'pages',
      loadChildren: () => import('./pages/pages.module').then(m => m.PagesModule),
      data: { preload: true }
    }]
  },
    { path: '404', component: PageNotFoundComponent },
    { path: '**', redirectTo: '/404' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
