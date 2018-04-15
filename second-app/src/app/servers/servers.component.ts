import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNerServer = false;

  constructor() {

    setTimeout(() => {this.allowNerServer = true; }, 2000 );
  }

  ngOnInit() {
  }

}
