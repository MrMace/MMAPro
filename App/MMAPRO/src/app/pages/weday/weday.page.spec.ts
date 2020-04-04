import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { WedayPage } from './weday.page';

describe('WedayPage', () => {
  let component: WedayPage;
  let fixture: ComponentFixture<WedayPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WedayPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(WedayPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
