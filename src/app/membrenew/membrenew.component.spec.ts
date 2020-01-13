import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MembrenewComponent } from './membrenew.component';

describe('MembrenewComponent', () => {
  let component: MembrenewComponent;
  let fixture: ComponentFixture<MembrenewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MembrenewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MembrenewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
