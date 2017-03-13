import { Component, OnInit } from '@angular/core';

import { metadata1 } from './mocks/metadata-1';
import { metadata2 } from './mocks/metadata-2';
import { metadata3 } from './mocks/metadata-3';

@Component({
  selector: 'app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Dynamic Components App';

  items = [];

  ngOnInit() {
    this.items = [...metadata1];
  }

  updateMetadata(key) {
    const matadataMap = {
      first: metadata1,
      second: metadata2,
      last: metadata3
    };

    this.items = [...matadataMap[key]];
  } 
}
