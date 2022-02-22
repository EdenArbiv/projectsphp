import  Car from 'src/app/models/car.model';
import { DataService } from './../../services/data.service';
import { Component, OnInit} from '@angular/core';
import { NgModel, NgForm } from '@angular/forms';


@Component({
  selector: 'app-addcar',
  templateUrl: './addcar.component.html',
  styleUrls: ['./addcar.component.css']
})
export class AddcarComponent implements OnInit{

  constructor(public _data:DataService) { }

  ngOnInit() {
   
  }


}
