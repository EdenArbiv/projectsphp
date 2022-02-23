import { DataService } from './../../services/data.service';
import { Component, OnInit } from '@angular/core';




@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor(public _data:DataService ) { }


  ngOnInit(): void {
    this._data.getData()
  }

}
