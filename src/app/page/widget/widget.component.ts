import { Component, OnInit, Input } from '@angular/core';
import { ViewModel } from '../models/view-model';

@Component({
  selector: 'widget',
  templateUrl: './widget.component.html',
  styleUrls: ['./widget.component.scss']
})
export class WidgetComponent implements OnInit {

  @Input() items: ViewModel[];

  constructor() { }

  ngOnInit() {
    console.log(this.items);
  }
}
