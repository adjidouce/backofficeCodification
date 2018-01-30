import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from "./login/login.component";

const APP_ROUTES : Routes = [
  {path:'', component : LoginComponent},
  {path:'home', loadChildren: './home/home.module#HomeModule'}

];
export const routing = RouterModule.forRoot(APP_ROUTES);
