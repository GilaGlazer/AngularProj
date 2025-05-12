import { Component } from '@angular/core';
import { Lesson, LessonComponent } from '../lesson/lesson.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-lessons',
  standalone: true,
  imports: [CommonModule, LessonComponent],
  templateUrl: './lessons.component.html',
  styleUrl: './lessons.component.css'
})

export class LessonsComponent {
  lessonsList: Lesson[] = [
    { lessonName: "Flexibility & Core Basics", teacherName: "Yael Malka", meetsCount: 12, dateBegin: new Date("2025-05-01"), price: 100, day: 1, hour: 10 },
    { lessonName: "Creative Dance", teacherName: "Rachel Cohen", meetsCount: 10, dateBegin: new Date("2025-06-02"), price: 90, day: 2, hour: 9 },
    { lessonName: "Movement Coordination", teacherName: "Noa Zehavi", meetsCount: 15, dateBegin: new Date("2025-06-03"), price: 120, day: 3, hour: 11 },
    { lessonName: "Posture & Movement", teacherName: "Rivka Dayan", meetsCount: 8, dateBegin: new Date("2025-05-11"), price: 80, day: 4, hour: 14 },
    { lessonName: "Kids Acrobatics", teacherName: "Shira Saban", meetsCount: 14, dateBegin: new Date("2025-06-05"), price: 110, day: 5, hour: 13 },
    { lessonName: "Toddler Yoga", teacherName: "Michal Halevi", meetsCount: 12, dateBegin: new Date("2025-06-06"), price: 100, day: 0, hour: 10 },
    { lessonName: "Free Movement", teacherName: "Hadas Peretz", meetsCount: 6, dateBegin: new Date("2025-06-07"), price: 70, day: 1, hour: 8 },
    { lessonName: "Classical Dance", teacherName: "Gila Kadush", meetsCount: 10, dateBegin: new Date("2025-06-08"), price: 95, day: 2, hour: 10 },
    { lessonName: "Rhythm & Motion", teacherName: "Miri Yitzhak", meetsCount: 13, dateBegin: new Date("2025-06-09"), price: 105, day: 3, hour: 11 },
    { lessonName: "Ballet Prep", teacherName: "Ronit Wolf", meetsCount: 9, dateBegin: new Date("2025-06-10"), price: 100, day: 4, hour: 15 },
    { lessonName: "Advanced Flexibility", teacherName: "Yael Malka", meetsCount: 14, dateBegin: new Date("2025-06-11"), price: 130, day: 5, hour: 9 },
    { lessonName: "Movement Games", teacherName: "Rachel Cohen", meetsCount: 11, dateBegin: new Date("2025-06-12"), price: 85, day: 0, hour: 13 },
    { lessonName: "Ballet for Kids", teacherName: "Noa Zehavi", meetsCount: 7, dateBegin: new Date("2025-06-13"), price: 75, day: 1, hour: 14 },
    { lessonName: "Jump & Balance", teacherName: "Rivka Dayan", meetsCount: 10, dateBegin: new Date("2025-06-14"), price: 90, day: 2, hour: 10 },
    { lessonName: "Strength & Balance", teacherName: "Shira Saban", meetsCount: 8, dateBegin: new Date("2025-06-15"), price: 95, day: 3, hour: 12 },
    { lessonName: "Obstacle Course", teacherName: "Michal Halevi", meetsCount: 12, dateBegin: new Date("2025-06-16"), price: 110, day: 4, hour: 11 },
    { lessonName: "Drama in Motion", teacherName: "Hadas Peretz", meetsCount: 9, dateBegin: new Date("2025-06-17"), price: 100, day: 5, hour: 13 },
    { lessonName: "Jumping with Numbers", teacherName: "Gila Kadush", meetsCount: 6, dateBegin: new Date("2025-06-18"), price: 70, day: 0, hour: 9 },
    { lessonName: "Movement Circles", teacherName: "Miri Yitzhak", meetsCount: 10, dateBegin: new Date("2025-06-19"), price: 80, day: 1, hour: 15 },
    { lessonName: "Gymnastics Basics", teacherName: "Ronit Wolf", meetsCount: 13, dateBegin: new Date("2025-06-20"), price: 125, day: 2, hour: 10 }
  ];
}

