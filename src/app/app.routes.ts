import { Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home';
import { AboutComponent } from './pages/about/about';
import { ClassesComponent } from './pages/classes/classes';
import { TeachersComponent } from './pages/teachers/teachers';
import { ContactComponent } from './pages/contact/contact';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'classes', component: ClassesComponent },
  { path: 'teachers', component: TeachersComponent },
  { path: 'contact', component: ContactComponent },
];
