import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ConfirmComponent } from '../confirm/confirm.component';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  backEndURL = "http://localhost:8080/students"
  students: any

  constructor(private http: HttpClient, private modalService: NgbModal) { }

  ngOnInit() {
    this.http.get(this.backEndURL).subscribe(data => this.students = data);
  }

  deleteStudent(event: MouseEvent) {
    this.modalService.open(ConfirmComponent).result.then(data => {
      console.log(data)
      if (data == 'ok') {
        const element = event.target as HTMLHtmlElement
        this.http.delete(this.backEndURL + '/' + element.id).subscribe(data =>
          element.parentElement?.parentElement?.remove()
        )
      }
    })


  }
}
