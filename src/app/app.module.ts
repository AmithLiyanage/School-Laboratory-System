import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MaterialModule } from './material/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//import { AngularFireModule } from '@angular/fire';//firebase
import { AngularFirestoreModule } from '@angular/fire/firestore';//firebase

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { environment } from 'src/environments/environment';//link to environement to access fiirebase environement
import { TeachersComponent } from './teachers/teachers.component';
import { TeacherComponent } from './teachers/teacher/teacher.component';
import { TeacherService } from './shared/teacher.service';
import { SubjectService } from './shared/subject.service';


@NgModule({
  declarations: [
    AppComponent,
    TeachersComponent,
    TeacherComponent
  ],
  imports: [ 
    BrowserModule,
    MaterialModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    //AngularFireModule.initializeApp(environment.firebaseConfig),
    //AngularFirestoreModule
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(environment.firebaseConfig)
  ],
  providers: [TeacherService, SubjectService],
  bootstrap: [AppComponent]
})
export class AppModule { }
