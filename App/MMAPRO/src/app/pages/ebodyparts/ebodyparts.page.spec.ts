import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EbodypartsPage } from './ebodyparts.page';

describe('EbodypartsPage', () => {
  let component: EbodypartsPage;
  let fixture: ComponentFixture<EbodypartsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EbodypartsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EbodypartsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
