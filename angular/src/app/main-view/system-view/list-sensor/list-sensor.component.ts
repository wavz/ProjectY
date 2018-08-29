import { Component, OnInit } from '@angular/core';
import {Sensor} from "../../../models/sensor.model";

@Component({
  selector: 'app-list-sensor',
  templateUrl: './list-sensor.component.html',
  styleUrls: ['./list-sensor.component.css']
})
export class ListSensorComponent implements OnInit {
  sensors: Sensor[] = [
    {id: 4800, name: "Beethoven", sites: []},
    {id: 4800, name: "Beethoven", sites: []}
    ];
  constructor() { }

  ngOnInit() {
  }

}
