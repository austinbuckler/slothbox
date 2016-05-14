import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { SlothboxAppComponent } from '../app/slothbox.component';

beforeEachProviders(() => [SlothboxAppComponent]);

describe('App: Slothbox', () => {
  it('should create the app',
      inject([SlothboxAppComponent], (app: SlothboxAppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'slothbox works!\'',
      inject([SlothboxAppComponent], (app: SlothboxAppComponent) => {
    expect(app.title).toEqual('slothbox works!');
  }));
});
