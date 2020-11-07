import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KavinduComponent } from './kavindu.component';

describe('KavinduComponent', () => {
  let component: KavinduComponent;
  let fixture: ComponentFixture<KavinduComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KavinduComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KavinduComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
