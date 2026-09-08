import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GridTitle } from './grid-title';

describe('GridTitle', () => {
  let component: GridTitle;
  let fixture: ComponentFixture<GridTitle>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GridTitle],
    }).compileComponents();

    fixture = TestBed.createComponent(GridTitle);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
