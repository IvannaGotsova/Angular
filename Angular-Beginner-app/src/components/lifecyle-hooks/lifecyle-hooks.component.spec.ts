import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LifecyleHooksComponent } from './lifecyle-hooks.component';

describe('LifecyleHooksComponent', () => {
  let component: LifecyleHooksComponent;
  let fixture: ComponentFixture<LifecyleHooksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LifecyleHooksComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LifecyleHooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
