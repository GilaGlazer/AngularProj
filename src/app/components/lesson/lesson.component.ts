import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

export interface Lesson {
  lessonName:string,
  teacherName:string,
  meetsCount:number,
  dateBegin:Date,
  price:number,
  day:number,
  hour:number
}

@Component({
  selector: 'app-lesson',
  standalone: true,
  imports: [CommonModule, MatCardModule],
  templateUrl: './lesson.component.html',
  styleUrl: './lesson.component.css'
})


export class LessonComponent {
  @Input() lesson!: Lesson;
  today: Date = new Date(Date.now());
  
  getDayName(day: number): string {
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    return days[day];
  }
}
