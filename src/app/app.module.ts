import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//import { AngularFireModule } from '@angular/fire';//firebase
//import { AngularFirestoreModule } from '@angular/fire/firestore';//firebase

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';

import { AppRoutingModule, routingComponent } from './app-routing.module';//newly added routingComponent for routing
import { AppComponent } from './app.component';
import { environment } from 'src/environments/environment';//link to environement to access fiirebase environement

//components
import { TeachersComponent } from './teachers/teachers.component';
import { TeacherComponent } from './teachers/teacher/teacher.component';
import { MainNavComponent } from './main-nav/main-nav.component';
import { ChemicalsComponent } from './chemicals/chemicals.component';

//services
import { TeacherService } from './shared/teacher.service';
import { SubjectService } from './shared/subject.service';

import { LayoutModule } from '@angular/cdk/layout';

//material
import { MaterialModule } from './material/material.module';
import {
  MatToolbarModule,
  MatButtonModule,
  MatSidenavModule,
  MatIconModule,
  MatListModule,
  MatExpansionModule, MatTableModule, MatPaginatorModule, MatSortModule } from '@angular/material';



@NgModule({
  declarations: [
    AppComponent,
    TeachersComponent,
    TeacherComponent,
    MainNavComponent,
    routingComponent,
    ChemicalsComponent,// for routing
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
    AngularFireModule.initializeApp(environment.firebaseConfig),
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatExpansionModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,//expand list
  ],
  providers: [TeacherService, SubjectService],
  bootstrap: [AppComponent]
})
export class AppModule { }
