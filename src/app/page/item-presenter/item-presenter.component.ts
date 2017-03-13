import { Component, Input, OnInit, OnDestroy, ComponentRef, ViewContainerRef, ViewChild, AfterContentInit, ComponentFactoryResolver } from '@angular/core';
import { ViewModel } from '../models/view-model';
import { WidgetComponent } from '../widget/widget.component';
import { ColumnComponent } from '../column/column.component';
import { RowComponent } from '../row/row.component';
import { TileComponent } from '../tile/tile.component';

@Component({
  selector: 'item-presenter',
  templateUrl: './item-presenter.component.html',
  styleUrls: ['./item-presenter.component.scss']
})
export class ItemPresenterComponent implements OnInit, OnDestroy, AfterContentInit {

  @Input() content: ViewModel;

  @ViewChild('entry', { read: ViewContainerRef }) entry: ViewContainerRef;

  private component: ComponentRef<any>;

  private componentMap: Object;

  constructor(private resolver: ComponentFactoryResolver) {}

  /** Initialize map of types and components */
  ngOnInit() {
    this.componentMap = {
      'widget': WidgetComponent,
      'column': ColumnComponent,
      'row': RowComponent,
      'tile': TileComponent
    }
  } 

  /** Create new component and add it to DOM */
  ngAfterContentInit() {
    const componentImpl = this.componentMap[this.content.type] || RowComponent;
    const factory = this.resolver.resolveComponentFactory(componentImpl);
    this.component = this.entry.createComponent(factory);
    /** Add @Inputs */
    this.component.instance.items = this.content.items;
    this.component.instance.name = this.content.name;
  }

  /** Remove the component from DOM */
  ngOnDestroy() {
    this.component.destroy();
  }
}
