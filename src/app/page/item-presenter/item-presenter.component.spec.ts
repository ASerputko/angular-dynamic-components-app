import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemPresenterComponent } from './item-presenter.component';

describe('ItemPresenterComponent', () => {
  let component: ItemPresenterComponent;
  let fixture: ComponentFixture<ItemPresenterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemPresenterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemPresenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
