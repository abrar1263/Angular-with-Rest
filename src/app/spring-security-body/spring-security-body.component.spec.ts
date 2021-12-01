import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpringSecurityBodyComponent } from './spring-security-body.component';

describe('SpringSecurityBodyComponent', () => {
  let component: SpringSecurityBodyComponent;
  let fixture: ComponentFixture<SpringSecurityBodyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpringSecurityBodyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpringSecurityBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
