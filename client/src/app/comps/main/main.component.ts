import { DataService } from './../../services/data.service';
import { Component, OnInit, Input } from '@angular/core';
import Car from 'src/app/models/car.model';



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
