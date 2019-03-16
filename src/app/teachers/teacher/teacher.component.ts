import { Component, OnInit } from '@angular/core';
import { TeacherService } from '../../shared/teacher.service';
import { SubjectService } from '../../shared/subject.service';
import { NotificationService } from '../../shared/notification.service';


@Component({
  selector: 'app-teacher',
  templateUrl: './teacher.component.html',
  styleUrls: ['./teacher.component.css']
})
export class TeacherComponent implements OnInit {

  constructor(private service: TeacherService, private subjectService: SubjectService, private notificationService: NotificationService) { }

  //remove static array
  subjects = [
    { id: 1, value: 'Chemistry'},
    { id: 2, value: 'Physics'},
    { id: 3, value: 'Biology'}
  ];

  ngOnInit() {
    this.service.getTeachers();
  }

  //for reset form
  onClear() {
    this.service.form.reset();
    this.service.initializeFormGroup();//new initialized function
  }

  onSubmit() {
    if (this.service.form.valid) {
      this.service.insertTeacher(this.service.form.value);
      this.service.form.reset();
      this.service.initializeFormGroup();
      this.notificationService.success(':: Submit Successfully');
    }
  }

}
