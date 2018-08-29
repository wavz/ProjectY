import {Component, Input, OnInit} from '@angular/core';
import {Command} from "../../../../../../models/command.model";

@Component({
  selector: 'app-command',
  templateUrl: './command.component.html',
  styleUrls: ['./command.component.css']
})
export class CommandComponent implements OnInit {
  @Input() command: Command;

  constructor() { }

  ngOnInit() {
  }

}
