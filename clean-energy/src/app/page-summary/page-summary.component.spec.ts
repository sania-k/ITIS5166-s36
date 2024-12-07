import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageSummaryComponent } from './page-summary.component';

describe('PageSummaryComponent', () => {
  let component: PageSummaryComponent;
  let fixture: ComponentFixture<PageSummaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PageSummaryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
