import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TpostsPage } from './tposts.page';

describe('TpostsPage', () => {
  let component: TpostsPage;
  let fixture: ComponentFixture<TpostsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TpostsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TpostsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
