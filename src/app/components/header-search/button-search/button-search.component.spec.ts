import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonSearchComponent } from './button-search.component';

describe('ButtonSearchComponent', () => {
  let component: ButtonSearchComponent;
  let fixture: ComponentFixture<ButtonSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ButtonSearchComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ButtonSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
