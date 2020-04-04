import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { WlevelsPage } from './wlevels.page';

describe('WlevelsPage', () => {
  let component: WlevelsPage;
  let fixture: ComponentFixture<WlevelsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WlevelsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(WlevelsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
