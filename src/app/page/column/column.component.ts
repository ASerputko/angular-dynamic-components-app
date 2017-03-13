import { Component, OnInit, Input } from '@angular/core';
import { ViewModel } from '../models/view-model';

@Component({
  selector: 'column',
  templateUrl: './column.component.html',
  styleUrls: ['./column.component.scss']
})
export class ColumnComponent implements OnInit {

  @Input() items: ViewModel[];

  constructor() { }

  ngOnInit() {
  }

}
