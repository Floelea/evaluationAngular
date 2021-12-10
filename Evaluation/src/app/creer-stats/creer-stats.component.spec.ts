import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreerStatsComponent } from './creer-stats.component';

describe('CreerStatsComponent', () => {
  let component: CreerStatsComponent;
  let fixture: ComponentFixture<CreerStatsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreerStatsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreerStatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
