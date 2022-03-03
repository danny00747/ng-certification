import { Component, OnInit } from '@angular/core';
import {WeatherService} from "@app/services";

@Component({
  selector: 'app-list-location',
  templateUrl: './list-location.component.html',
  styleUrls: ['./list-location.component.css']
})
export class ListLocationComponent implements OnInit {

  zipCodes$ = this.weatherService.getZipCodes;

  constructor(private readonly weatherService: WeatherService) { }

  ngOnInit(): void {
  }

}
