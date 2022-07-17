import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IngredientsSelectorComponent } from './ingredients-selector.component';

describe('IngredientsSelectorComponent', () => {
  let component: IngredientsSelectorComponent;
  let fixture: ComponentFixture<IngredientsSelectorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IngredientsSelectorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IngredientsSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
