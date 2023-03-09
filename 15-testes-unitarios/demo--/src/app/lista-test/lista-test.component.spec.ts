import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaTestComponent } from './lista-test.component';
import { ReactiveFormsModule } from '@angular/forms';

describe('ListaTestComponent testestes33', () => {
  let component: ListaTestComponent;
  let fixture: ComponentFixture<ListaTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaTestComponent ], 
      imports: [ ReactiveFormsModule ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create testestes33', () => {
    expect(component).toBeTruthy();
  });
});
