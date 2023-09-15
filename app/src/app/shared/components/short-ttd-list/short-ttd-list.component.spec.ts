import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShortTtdListComponent } from './short-ttd-list.component';

describe('ShortTtdListComponent', () => {
  let component: ShortTtdListComponent;
  let fixture: ComponentFixture<ShortTtdListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShortTtdListComponent]
    });
    fixture = TestBed.createComponent(ShortTtdListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
