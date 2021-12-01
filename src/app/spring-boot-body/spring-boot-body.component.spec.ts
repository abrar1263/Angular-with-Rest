import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpringBootBodyComponent } from './spring-boot-body.component';

describe('SpringBootBodyComponent', () => {
  let component: SpringBootBodyComponent;
  let fixture: ComponentFixture<SpringBootBodyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpringBootBodyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpringBootBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
