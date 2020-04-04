import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CdietsPage } from './cdiets.page';

describe('CdietsPage', () => {
  let component: CdietsPage;
  let fixture: ComponentFixture<CdietsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CdietsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CdietsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
