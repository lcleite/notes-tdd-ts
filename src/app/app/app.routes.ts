import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ListNotesPage} from "./ListNotesPage/list-notes";
import {AddNotePage} from "./AddNotePage/add-note";

export const routes: Routes = [
  { path: 'list-notes', component: ListNotesPage },
  { path: 'add-note', component: AddNotePage }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
