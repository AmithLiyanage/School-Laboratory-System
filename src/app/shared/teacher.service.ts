import { Injectable } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database'

@Injectable({
  providedIn: 'root'
})
export class TeacherService {

  constructor(private firebase: AngularFireDatabase) { }

  teacherList: AngularFireList<any>;

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

  getTeachers() {
    this.teacherList = this.firebase.list('teachers');//if note 'teachers' node and add detail to it, else add also to it
    return this.teacherList.snapshotChanges();
  }

  //insert dataset to firebase
  insertTeacher(teacher) {
    this.teacherList.push({
      fullName: teacher.fullName,
      email: teacher.email,
      mobile: teacher.mobile,
      gender: teacher.gender,
      subject: teacher.subject,
      hireDate: teacher.hireDate,
      isPermanent: teacher.isPermanent
    });
  }

  updateTeacher(teacher) {
    this.teacherList.update(teacher.$key,
      {
        fullName: teacher.fullName,
        email: teacher.email,
        mobile: teacher.mobile,
        gender: teacher.gender,
        subject: teacher.subject,
        hireDate: teacher.hireDate,
        isPermanent: teacher.isPermanent
      })
  }

  deleteTeacher($key: string) {
    this.teacherList.remove($key)
  }
}
