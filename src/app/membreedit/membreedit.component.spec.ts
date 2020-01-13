import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MembreeditComponent } from './membreedit.component';

describe('MembreeditComponent', () => {
  let component: MembreeditComponent;
  let fixture: ComponentFixture<MembreeditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MembreeditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MembreeditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
