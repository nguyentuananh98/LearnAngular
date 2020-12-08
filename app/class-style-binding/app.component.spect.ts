import { TestBed, async } from '@angular/core/testing';
import {MyAppComponent} from './app.component';


describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
       MyAppComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(MyAppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'angular100days'`, () => {
    const fixture = TestBed.createComponent(MyAppComponent);
    const app = fixture.componentInstance;
    expect(app.name).toEqual('angular100days');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(MyAppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.content span').textContent).toContain('angular100days app is running!');
  });
});
