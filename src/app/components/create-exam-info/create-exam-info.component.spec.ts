import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateExamInfoComponent } from './create-exam-info.component';

describe('CreateExamInfoComponent', () => {
  let component: CreateExamInfoComponent;
  let fixture: ComponentFixture<CreateExamInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateExamInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateExamInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
