import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TermsguestPage } from './termsguest.page';

describe('TermsguestPage', () => {
  let component: TermsguestPage;
  let fixture: ComponentFixture<TermsguestPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TermsguestPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TermsguestPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
