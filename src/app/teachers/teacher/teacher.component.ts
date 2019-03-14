import { Component, OnInit } from '@angular/core';
import { TeacherService } from '../../shared/teacher.service';


@Component({
  selector: 'app-teacher',
  templateUrl: './teacher.component.html',
  styleUrls: ['./teacher.component.css']
})
export class TeacherComponent implements OnInit {

  constructor(private service: TeacherService) { }

  ngOnInit() {
  }

}
