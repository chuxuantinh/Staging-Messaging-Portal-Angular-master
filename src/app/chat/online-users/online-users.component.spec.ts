import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OnlineUsersComponent } from './online-users.component';

describe('OnlineUsersComponent', () => {
  let component: OnlineUsersComponent;
  let fixture: ComponentFixture<OnlineUsersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OnlineUsersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OnlineUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
