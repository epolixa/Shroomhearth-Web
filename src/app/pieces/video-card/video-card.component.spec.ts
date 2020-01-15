import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VideocardComponent } from './video-card.component';

describe('VideocardComponent', () => {
  let component: VideocardComponent;
  let fixture: ComponentFixture<VideocardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VideocardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VideocardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
