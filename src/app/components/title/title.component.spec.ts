import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { provideMockStore, MockStore } from '@ngrx/store/testing';

import { TitleComponent } from './title.component';
import { TitleService } from './title.service';

class TitleServiceMock {
  loadData() {}
}

describe('TitleComponent', () => {
  let component: TitleComponent;
  let fixture: ComponentFixture<TitleComponent>;
  let service: TitleService;

  beforeEach(async(() => {
    const initialState = { AppState: { title: 'title' } };

    TestBed.configureTestingModule({
      declarations: [ TitleComponent ],
      providers: [
        { provide: TitleService, useClass: TitleServiceMock },
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TitleComponent);
    component = fixture.componentInstance;
    service = fixture.debugElement.injector.get(TitleService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
