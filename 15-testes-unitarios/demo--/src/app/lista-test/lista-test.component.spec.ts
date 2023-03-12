import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaTestComponent } from './lista-test.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from '../material.module';

describe('ListaTestComponent testestes33', () => {
  let component: ListaTestComponent;
  let fixture: ComponentFixture<ListaTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaTestComponent ],
      imports: [ 
        ReactiveFormsModule,
        MaterialModule,
        BrowserAnimationsModule
      ]
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
