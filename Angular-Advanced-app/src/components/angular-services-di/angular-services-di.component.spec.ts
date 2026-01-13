import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularServicesDIComponent } from './angular-services-di.component';

describe('AngularServicesDIComponent', () => {
  let component: AngularServicesDIComponent;
  let fixture: ComponentFixture<AngularServicesDIComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AngularServicesDIComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AngularServicesDIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
