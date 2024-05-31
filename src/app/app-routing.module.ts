import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PartyListComponent } from './component/party-list/party-list.component';
import { EditComponent } from './component/edit/edit.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  {
    path: 'party_list', component: PartyListComponent
  },
  {
    path: 'edit', component: EditComponent
  },
  {
    path: 'add', component: EditComponent
  },
  { path: '', component: AppComponent },
  { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
