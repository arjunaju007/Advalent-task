import { Component } from '@angular/core';
import { StudentServiceService } from '../student-service.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {
  studentService: StudentServiceService;
  StudentArray: any[] = [];
  isResultLoaded = false;
  stname: string = "";
  course: string = "";
  fee: string = "";

  constructor(private _studentService: StudentServiceService) {
    this.studentService = _studentService; // Assign _studentService to studentService
  }


  onSubmit(): void {
    this.studentService.stname = this.stname;
    this.studentService.course = this.course;
    this.studentService.fee = this.fee;
    this.studentService.register();
  
    // Clear input fields after submitting
    this.stname = "";
    this.course = "";
    this.fee = "";
  }

  updateRecords(): void {
    this.studentService.updateRecords();
  }


  setUpdate(studentItem: any): void {
    this.studentService.setUpdate(studentItem);
  }

  setDelete(studentItem: any): void {
    this.studentService.setDelete(studentItem);
  }
}
