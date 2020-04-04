import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BmiinfoPage } from './bmiinfo.page';

describe('BmiinfoPage', () => {
  let component: BmiinfoPage;
  let fixture: ComponentFixture<BmiinfoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BmiinfoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BmiinfoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
