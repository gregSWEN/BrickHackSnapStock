import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CameraComponentComponent} from './camera-component/camera-component.component';
import {AppComponent} from './app.component';

const routes: Routes = [
  {path: '', redirectTo: '/main', pathMatch: 'full'},
  {path: 'main', component: AppComponent},
  {path: 'camera', component: CameraComponentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
