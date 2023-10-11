import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  backEndURL = "http://localhost:8080/students"

  formStudent = this.fb.group({
    id: [],
    nom: [],
    note: []
  })

  constructor(private router:Router, private http:HttpClient, private fb:FormBuilder){}

  addStudent(){
    console.log(this.formStudent.value)
    this.http.post( this.backEndURL, this.formStudent.value).subscribe(data =>
      this.router.navigate(['/student/list'])
    )
  }

}
