import { Injectable } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class TeacherService {

  constructor() { }

  form: FormGroup= new FormGroup({
    $key: new FormControl(null),
    fullName: new FormControl(''),
    email: new FormControl(''),
    mobile: new FormControl(''),
    gender: new FormControl('1'),// 1 for radio button
    subject: new FormControl('0')//0 for select from drop doun list
    //varibaleName: new FormControl(false) // for true false, default false
  });
}
