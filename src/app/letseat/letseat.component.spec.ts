import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LetseatComponent } from './letseat.component';

describe('LetseatComponent', () => {
  let component: LetseatComponent;
  let fixture: ComponentFixture<LetseatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LetseatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LetseatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
