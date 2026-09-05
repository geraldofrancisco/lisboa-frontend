import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmailTypeList } from './email-type-list';

describe('EmailTypeList', () => {
  let component: EmailTypeList;
  let fixture: ComponentFixture<EmailTypeList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmailTypeList],
    }).compileComponents();

    fixture = TestBed.createComponent(EmailTypeList);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
