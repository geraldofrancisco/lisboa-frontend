import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GridField } from './grid-field';

describe('GridField', () => {
  let component: GridField;
  let fixture: ComponentFixture<GridField>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GridField],
    }).compileComponents();

    fixture = TestBed.createComponent(GridField);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
