import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudentServiceService {
  private baseUrl = 'http://localhost:8085/api/student'; // Update the base URL with your Node.js server URL

  StudentArray: any[] = [];
  isResultLoaded = false;
  stname: string = "";
  course: string = "";
  fee: string = "";
  currentStudentID = "";

  constructor(private http: HttpClient) {
    this.getAllStudent();
  }

  getAllStudent() {
    this.http.get(`${this.baseUrl}`)
      .subscribe((resultData: any) => {
        this.isResultLoaded = true;
        console.log(resultData);
        this.StudentArray = resultData.data;
      });
  }

  register() {
    const bodyData = {
      stname: this.stname,
      course: this.course,
      fee: this.fee,
    };
    this.http.post(`${this.baseUrl}/add`, bodyData).subscribe((resultData: any) => {
      console.log(resultData);
      if (resultData.status) {
        alert("Student Registered Successfully");
        this.getAllStudent();
        this.resetForm();
      } else {
        alert("Student Registration Failed");
      }
    });
  }

  setUpdate(data: any) {
    this.stname = data.stname;
    this.course = data.course;
    this.fee = data.fee;
    this.currentStudentID = data.id;
  }

  updateRecords() {
    const bodyData = {
      stname: this.stname,
      course: this.course,
      fee: this.fee
    };
    this.http.put(`${this.baseUrl}/update/${this.currentStudentID}`, bodyData).subscribe((resultData: any) => {
      console.log(resultData);
      if (resultData.status) {
        alert("Student Record Updated");
        this.getAllStudent();
        this.resetForm();
      } else {
        alert("Student Update Failed");
      }
    });
  }

  save() {
    if (this.currentStudentID === '') {
      this.register();
    } else {
      this.updateRecords();
    }
  }

  setDelete(data: any) {
    this.http.delete(`${this.baseUrl}/delete/${data.id}`).subscribe((resultData: any) => {
      console.log(resultData);
      alert("Student Record Deleted");
      this.getAllStudent();
    });
  }

  resetForm() {
    this.stname = "";
    this.course = "";
    this.fee = "";
    this.currentStudentID = "";
  }
}


