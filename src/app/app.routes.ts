import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegistersComponent } from './components/registers/registers.component';
import { LessonsComponent } from './components/lessons/lessons.component';
import { authGuard} from './auth.guard';

export const routes: Routes = [
    { path: '', component: LoginComponent },
    { path: 'login', component: LoginComponent },
    { path: 'lessons', component: LessonsComponent},
    { path: 'registers', component: RegistersComponent,canActivate: [authGuard]}
];
