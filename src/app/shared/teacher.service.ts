import { Injectable } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class TeacherService {

  constructor() { }

  form: FormGroup= new FormGroup({
    $key: new FormControl(null),
    fullName: new FormControl(''),
    email: new FormControl('',Validators.email),
    mobile: new FormControl('',[Validators.required, Validators.minLength(10)]),//can be add miniLength(8)
    gender: new FormControl('1'),// 1 for radio button
    subject: new FormControl('0'),//0 for select from drop doun list
    //varibaleName: new FormControl(false) // for true false checkbox, default false
    hireDate: new FormControl(''),//extra
    isPermanent: new FormControl(false)
  });

  //reset values
  initializeFormGroup() {
    this.form.setValue({
      $key: null,
      fullName: '',
      email: '',
      mobile: '',
      gender: '1',
      subject: 0,
      hireDate: '',
      isPermanent: false
    })
  };
}
