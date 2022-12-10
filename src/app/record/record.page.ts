import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-record',
  templateUrl: './record.page.html',
  styleUrls: ['./record.page.scss'],
})
export class RecordPage implements OnInit {
  id: any;
  student_no: any;
  student_name: any;
  course: any;
  year: any;
  email: any;
  contact_no: any;
  address: any;
  students: any;
  
  constructor(private route : ActivatedRoute, private router: Router, private _apiService:ApiService) {
    this.route.params.subscribe((param:any)=>{
      this.id = param.id;
      console.log(this.id);
      this.getStudent(this.id);
    })
   }
  getStudent(id: any) {
    throw new Error('Method not implemented.');
  }
 
  ngOnInit() {
    
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

