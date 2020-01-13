import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MembrevueComponent } from './membrevue.component';

describe('MembrevueComponent', () => {
  let component: MembrevueComponent;
  let fixture: ComponentFixture<MembrevueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MembrevueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MembrevueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
