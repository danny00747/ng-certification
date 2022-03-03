import {Component, Input, OnInit} from '@angular/core';
import {Location} from "@shared/models/weather.model.";
import {WeatherService} from "@app/services";

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css']
})
export class LocationComponent implements OnInit {


  @Input() zipCode: string;
  data: Location;

  constructor(private readonly weatherService: WeatherService) { }

  ngOnInit(): void {
    this.weatherService.getLocationByZipCode(this.zipCode)
        .subscribe((data: Location) => {
          this.data = data;
          console.log(data)
        }, error => console.error(error));
  }

}
