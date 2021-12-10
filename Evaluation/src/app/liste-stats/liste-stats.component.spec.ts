import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeStatsComponent } from './liste-stats.component';

describe('ListeStatsComponent', () => {
  let component: ListeStatsComponent;
  let fixture: ComponentFixture<ListeStatsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListeStatsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeStatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
