import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { WgoalsPage } from './wgoals.page';

describe('WgoalsPage', () => {
  let component: WgoalsPage;
  let fixture: ComponentFixture<WgoalsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WgoalsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(WgoalsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
