import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HowItWorksCopmonent } from './how-it-works-copmonent';

describe('HowItWorksCopmonent', () => {
  let component: HowItWorksCopmonent;
  let fixture: ComponentFixture<HowItWorksCopmonent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HowItWorksCopmonent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HowItWorksCopmonent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
