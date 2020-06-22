import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RelayPage } from './relay.page';

describe('RelayPage', () => {
  let component: RelayPage;
  let fixture: ComponentFixture<RelayPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RelayPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RelayPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
