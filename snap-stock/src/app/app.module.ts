import { HeaderComponent } from './header/header.component'
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { CameraComponent } from './camera/camera.component';
import { ManualInputComponent } from './manual-input/manual-input.component';
import { IngredientListComponent } from './ingredient-list/ingredient-list.component';
import { IngredientElementComponent } from './ingredient-list/ingredient-element/ingredient-element.component';
import {HttpClientModule} from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    CameraComponent,
    ManualInputComponent,
    IngredientListComponent,
    IngredientElementComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
