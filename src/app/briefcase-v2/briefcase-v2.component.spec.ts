import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BriefcaseV2Component } from './briefcase-v2.component';

describe('BriefcaseV2Component', () => {
  let component: BriefcaseV2Component;
  let fixture: ComponentFixture<BriefcaseV2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BriefcaseV2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BriefcaseV2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
