import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import * as Material from '@angular/material'; 

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    Material.MatToolbarModule,
    Material.MatGridListModule,
    Material.MatFormFieldModule,
    Material.MatInputModule,
    Material.MatRadioModule,
    Material.MatSelectModule,
    Material.MatCheckboxModule,//perment employee check box
    Material.MatDatepickerModule,// for date
    Material.MatNativeDateModule,// for date
    Material.MatButtonModule, //for button style
    Material.MatSnackBarModule, //for popup notification
  ], 
  exports: [
    Material.MatToolbarModule,
    Material.MatGridListModule,
    Material.MatFormFieldModule,// it also include mat-error function
    Material.MatInputModule,
    Material.MatRadioModule,
    Material.MatSelectModule,
    Material.MatCheckboxModule,//perment employee check box
    Material.MatDatepickerModule,// for date
    Material.MatNativeDateModule,// for date
    Material.MatButtonModule, //for button style
    Material.MatSnackBarModule, //for popup notification
  ]
})
export class MaterialModule { }
