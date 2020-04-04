import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { WdetailsPage } from './wdetails.page';

describe('WdetailsPage', () => {
  let component: WdetailsPage;
  let fixture: ComponentFixture<WdetailsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WdetailsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(WdetailsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
