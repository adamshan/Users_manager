import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { SideComponent } from './side/side.component';
import { ContentComponent } from './content/content.component';
import { AdminComponent } from './admin/admin.component';
import { UsersComponent } from './users/users.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './service/auth-guard.service';


const routes: Routes = [
	{path:'',component:LoginComponent},
  {path:'auth/login',component:LoginComponent},
  
  {path:'user/list/:status',canActivate:[AuthGuard], component:ContentComponent},
  {path:'user/edit',canActivate:[AuthGuard],component:SideComponent},
  {path:'user/update/:id',canActivate:[AuthGuard],component:SideComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
