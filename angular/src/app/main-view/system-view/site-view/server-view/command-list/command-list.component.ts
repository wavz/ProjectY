import {Component, OnInit} from '@angular/core';
import {Command} from "../../../../../models/command.model";

@Component({
  selector: 'app-command-list',
  templateUrl: './command-list.component.html',
  styleUrls: ['./command-list.component.css']
})
export class CommandListComponent implements OnInit {
    commands : Command[] = [
    { script : 'initialize_nuke',
      viewName : 'Initialize nuclear bomb' },
    { script : 'bomb_enemy',
      viewName : 'Bomb the enemy' },
    { script : 'kill_leader',
      viewName : 'Kill the leader' },
    { script : 'buy_nukes',
      viewName : 'Buy more nukes' }
  ];

  constructor() { }

  ngOnInit() {
  }

}
