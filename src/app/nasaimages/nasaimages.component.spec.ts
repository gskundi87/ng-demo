import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NASAimagesComponent } from './nasaimages.component';

describe('NASAimagesComponent', () => {
  let component: NASAimagesComponent;
  let fixture: ComponentFixture<NASAimagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NASAimagesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NASAimagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
