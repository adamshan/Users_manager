//import de tous mes modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';

//import de tous les services
import { UserService } from './service/user.service';
import { AuthService } from './service/auth.service';
import { AuthGuard } from './service/auth-guard.service';

//import des components
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { SideComponent } from './side/side.component';
import { ContentComponent } from './content/content.component';
import { AdminComponent } from './admin/admin.component';
import { UsersComponent } from './users/users.component';
import { LoginComponent } from './login/login.component';
import { FileComponent } from './file/file.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    SideComponent,
    ContentComponent,
    AdminComponent,
    UsersComponent,
    LoginComponent,
    FileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    HttpClientModule

  ],
  providers: [
    UserService,
    AuthGuard,
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }


