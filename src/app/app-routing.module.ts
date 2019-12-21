import { AuthGuard } from './auth/auth.guard';
import { HomeComponent } from './home/home.component';
import { OwnerComponent } from './owner/owner.component';
import { AgentComponent } from './agent/agent.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule, CanActivate } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'owner', component: OwnerComponent, canActivate: [AuthGuard]},
  {path: 'agent', component: AgentComponent, canActivate: [AuthGuard]},
  {path: 'login', component: LoginComponent},
  {path: 'signup', component: SignupComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
