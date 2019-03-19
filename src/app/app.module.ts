import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MaterialModule } from './material/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//import { AngularFireModule } from '@angular/fire';//firebase
//import { AngularFirestoreModule } from '@angular/fire/firestore';//firebase

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';

import { AppRoutingModule, routingComponent } from './app-routing.module';//newly added routingComponent for routing
import { AppComponent } from './app.component';
import { environment } from 'src/environments/environment';//link to environement to access fiirebase environement
import { TeachersComponent } from './teachers/teachers.component';
import { TeacherComponent } from './teachers/teacher/teacher.component';
import { TeacherService } from './shared/teacher.service';
import { SubjectService } from './shared/subject.service';
import { MainNavComponent } from './main-nav/main-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule } from '@angular/material';


@NgModule({
  declarations: [
    AppComponent,
    TeachersComponent,
    TeacherComponent,
    MainNavComponent,
    routingComponent,// for routing
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
    MatListModule
  ],
  providers: [TeacherService, SubjectService],
  bootstrap: [AppComponent]
})
export class AppModule { }
