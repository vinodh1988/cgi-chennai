import { Component, OnInit,Input } from '@angular/core';
import {course} from '../../course';
@Component({
  selector: 'course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {
   
 @Input('data')  current:course;
  constructor() { }

  ngOnInit() {
  }

}
