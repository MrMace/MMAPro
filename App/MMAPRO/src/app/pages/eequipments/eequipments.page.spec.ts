import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EequipmentsPage } from './eequipments.page';

describe('EequipmentsPage', () => {
  let component: EequipmentsPage;
  let fixture: ComponentFixture<EequipmentsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EequipmentsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EequipmentsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
