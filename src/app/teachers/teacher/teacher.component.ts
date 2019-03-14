import { Component, OnInit } from '@angular/core';
import { TeacherService } from '../../shared/teacher.service';


@Component({
  selector: 'app-teacher',
  templateUrl: './teacher.component.html',
  styleUrls: ['./teacher.component.css']
})
export class TeacherComponent implements OnInit {

  constructor(private service: TeacherService) { }

  subjects = [
    { id: 1, value: 'Chemistry'},
    { id: 2, value: 'Physics'},
    { id: 3, value: 'Biology'}
  ];

  ngOnInit() {
  }

}
