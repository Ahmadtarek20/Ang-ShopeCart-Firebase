import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { CartComponent } from './cart/cart.component';
import { GoodsComponent } from './goods/goods.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { AuthGard } from './servecies/gards/auth.gard.service';
import { LoginauthService } from './servecies/gards/loginauth.service';


const routes: Routes = [
  {path:'',component:HomeComponent , data: {index: 0}},
  {path:'login',component:LoginComponent , canActivate: [LoginauthService] },
  {path:'signup',component:SignupComponent , canActivate: [LoginauthService]},
  {path:'cart',component:CartComponent , canActivate: [AuthGard] , data: {index: 1}},
  {path:'admin',component:GoodsComponent},
  {path:'**',component:NotfoundComponent},

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
