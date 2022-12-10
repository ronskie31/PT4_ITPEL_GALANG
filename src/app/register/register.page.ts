import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  

  ngOnInit() {
  }

  constructor(public _apiService:ApiService,private router: Router) {}
  student_no: any;
  student_name: any;
  course: any;
  year: any;
  email: any;
  contact_no: any;
  address: any;

  students: any = [];


  

  addStudent(){
    //console.log (this.student_no, this.student_name, this.email);

    let data = {
      student_no: this.student_no,
      student_name: this.student_name,
      course: this.course,
      year: this.year,
      email: this.email,
      contact_no: this.contact_no,
      address: this.address

    }
    this._apiService.addStudent(data).subscribe((res:any)=>
    {
      console.log("Success ==", res);
      this.student_no = '';
      this.student_name = '';
      this.course = '';
      this.year = '';
      this.email = '';
      this.contact_no = '';
      this.address = '';
      alert("Record Successfully Addded!");
      this.router.navigateByUrl('/record');
    }, (error:any)=>{
      alert("Please Fill-Up the Form!");
      console.log("Error = ", error);
    });
  }

  getStudents(){
    this._apiService.getStudents().subscribe((res:any)=>{
      console.log("Success == ", res);
      this.students = res;
    },(error:any)=>{
      console.log("Error == ", error);
    })
  }

  deleteStudent(id){
  let text;
  if (confirm("Do you want to delete the selected record?") == true) {
    text = "Deleted Successfully !";
  } else {
    text = "Operation Cancelled!";
  } alert(text);
    this._apiService.deleteStudent(id).subscribe((res:any)=>{
      console.log("Delete Success == ", res);
      this.students = res;
    },(error:any)=>{
      console.log("Delete Error == ", error);
    })
  }
}


