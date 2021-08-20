import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MinecraftComponent } from './minecraft.component';

describe('MinecraftComponent', () => {
  let component: MinecraftComponent;
  let fixture: ComponentFixture<MinecraftComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MinecraftComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MinecraftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
