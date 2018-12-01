import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NeItemComponent } from './ne-item.component';

describe('NeItemComponent', () => {
  let component: NeItemComponent;
  let fixture: ComponentFixture<NeItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NeItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NeItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
