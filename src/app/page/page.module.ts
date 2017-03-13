import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemPresenterComponent } from './item-presenter/item-presenter.component';
import { ItemsControlComponent } from './items-control/items-control.component';
import { WidgetComponent } from './widget/widget.component';
import { ColumnComponent } from './column/column.component';
import { RowComponent } from './row/row.component';
import { TileComponent } from './tile/tile.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    ItemPresenterComponent,
    ItemsControlComponent,
    WidgetComponent,
    ColumnComponent,
    RowComponent,
    TileComponent
  ],
  entryComponents: [
    WidgetComponent,
    ColumnComponent,
    RowComponent,
    TileComponent
  ],
  exports: [
    ItemPresenterComponent,
    ItemsControlComponent
  ]
})
export class PageModule { }
