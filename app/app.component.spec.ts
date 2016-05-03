/* tslint:disable:no-unused-variable */
import { AppComponent } from './app.component';
import {Router, RouteRegistry, ROUTER_PRIMARY_COMPONENT, RouteParams} from 'angular2/router';
import {RootRouter} from 'angular2/src/router/router';
import {SpyLocation} from 'angular2/router/testing';
import {inject, beforeEachProviders, beforeEach} from 'angular2/testing';
import {provide} from 'angular2/core';
import {Location} from 'angular2/platform/common';

describe('Router tests', () => {
  var location, router;
  
  beforeEachProviders(() => [
    RouteRegistry,
    provide(Location, {useClass: SpyLocation}),
    provide(Router, {useClass: RootRouter}),
    provide(ROUTER_PRIMARY_COMPONENT, {useValue: AppComponent})
  ]);
  
  beforeEach(inject([Router, Location], (r, l) => {
    router = r;
    location = l;
  }));
  
  it('Should be able to navigate to Home', done => {    
    router.navigate(['Home']).then(() => {
      expect(location.path()).toBe('/home');
      done();
    }).catch(e => done.fail(e));
  });

  it('should redirect not registered urls to Home', done => {
    router.navigateByUrl('/unknown').then(() => {
      expect(location.path()).toBe('/home');
      done();
    }).catch(e => done.fail(e));
  });
});
