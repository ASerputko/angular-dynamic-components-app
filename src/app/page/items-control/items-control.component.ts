import { Component, Input } from '@angular/core';

@Component({
  selector: 'items-control',
  templateUrl: './items-control.component.html',
  styleUrls: ['./items-control.component.css']
})
export class ItemsControlComponent {

  @Input() items;

}
