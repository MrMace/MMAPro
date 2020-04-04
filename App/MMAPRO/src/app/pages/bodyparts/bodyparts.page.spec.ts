import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BodypartsPage } from './bodyparts.page';

describe('BodypartsPage', () => {
  let component: BodypartsPage;
  let fixture: ComponentFixture<BodypartsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BodypartsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BodypartsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
