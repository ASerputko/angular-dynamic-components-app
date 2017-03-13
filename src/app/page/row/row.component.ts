import { Component, OnInit, Input } from '@angular/core';
import { ViewModel } from '../models/view-model';

@Component({
  selector: 'row',
  templateUrl: './row.component.html',
  styleUrls: ['./row.component.scss']
})
export class RowComponent implements OnInit {

  @Input() items: ViewModel[];
  @Input() width: number | null;

  constructor() { }

  ngOnInit() {
  }

}
