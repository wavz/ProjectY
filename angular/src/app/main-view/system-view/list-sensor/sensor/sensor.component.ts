import {Component, Input, OnInit} from '@angular/core';
import {Sensor} from "../../../../models/sensor.model";

@Component({
  selector: 'app-sensor',
  templateUrl: './sensor.component.html',
  styleUrls: ['./sensor.component.css']
})
export class SensorComponent implements OnInit {
  @Input() sensor: Sensor;
  constructor() { }

  ngOnInit() {
  }

}
