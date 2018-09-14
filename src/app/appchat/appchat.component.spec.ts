import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppchatComponent } from './appchat.component';

describe('AppchatComponent', () => {
  let component: AppchatComponent;
  let fixture: ComponentFixture<AppchatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppchatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppchatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
