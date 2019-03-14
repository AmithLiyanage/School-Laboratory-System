import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MaterialModule } from './material/material.module'; 
//import { MatFormFieldModule } from '@angular/material/form-field';//new
import { ReactiveFormsModule } from '@angular/forms';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { environment } from 'src/environments/environment.prod';
import { TeachersComponent } from './teachers/teachers.component';
import { TeacherComponent } from './teachers/teacher/teacher.component';
import { TeacherService } from './shared/teacher.service';


@NgModule({
  declarations: [
    AppComponent,
    TeachersComponent,
    TeacherComponent
  ],
  imports: [ 
    BrowserModule,
    MaterialModule,
    //MatFormFieldModule,//new
    ReactiveFormsModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment),//.firebaseConfig
    AngularFirestoreModule
  ],
  providers: [TeacherService],
  bootstrap: [AppComponent]
})
export class AppModule { }
