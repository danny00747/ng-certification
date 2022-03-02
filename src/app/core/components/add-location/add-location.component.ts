import { Component, OnInit } from '@angular/core';
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-add-location',
  templateUrl: './add-location.component.html',
  styleUrls: ['./add-location.component.css']
})
export class AddLocationComponent implements OnInit {
    zipCode: string;

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(zipCodeForm: NgForm): void {
    console.log(zipCodeForm.value)
  }
}
