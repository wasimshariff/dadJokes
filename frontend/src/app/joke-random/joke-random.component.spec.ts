import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JokeRandomComponent } from './joke-random.component';

describe('JokeRandomComponent', () => {
  let component: JokeRandomComponent;
  let fixture: ComponentFixture<JokeRandomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JokeRandomComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JokeRandomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
