import { DataService } from './../../services/data.service';
import { Component, OnInit, Input } from '@angular/core';
import Car from 'src/app/models/car.model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  constructor(public _data:DataService) { }

  @Input()
  item:Car;

  ngOnInit(): void {
  }


}
