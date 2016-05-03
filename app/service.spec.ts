import {TestService} from './service';
import {beforeEachProviders, inject, beforeEach, it} from 'angular2/testing';
import {MockBackend, MockConnection} from 'angular2/http/testing';
import {Http, BaseRequestOptions, Response, BaseResponseOptions, ResponseOptions, HTTP_PROVIDERS} from 'angular2/http';
import {provide} from 'angular2/core';
import {Observable} from 'rxjs/Observable';

describe('MockBackend: LanguagesService', () => {
  let mockbackend, service;
  
  beforeEachProviders(() => [
    TestService,
    MockBackend,
    BaseRequestOptions,
    provide(Http, {
    useFactory: (backend: MockBackend, defaultOptions: BaseRequestOptions) => {
      return new Http(backend, defaultOptions);
    },
    deps: [MockBackend, BaseRequestOptions]
  })
  ]);
  
  beforeEach(inject([MockBackend], (_mockbackend) => {
    mockbackend = _mockbackend;
    const baseResponse = new Response(new ResponseOptions({body: 'it responded'}));
  _mockbackend.connections.subscribe((c: MockConnection) => c.mockRespond(baseResponse));
  }))
  
it('should return response when subscribed to getUsers',
  inject([TestService], (testService: TestService) => {
    testService.getnames().subscribe((res: Response) => {
      expect(res.text()).toBe('it responded');
    });
  })
);
})

describe('Observable: simple observable', () => {
    var somevar;
    beforeEach(() => {
        somevar = new Observable(obs => {
            obs.next(1);
            obs.next(2);
            obs.next(3);
            
            obs.complete();
        });
    })
    
    it('should check for sequence', done => {
        let seq = [1,2,3], 
        results = [],
        index = 0;
        
        somevar.subscribe( x=> {
            expect(x).toEqual(seq[index++]);
        },
        x => results.push('#'),
        x => done()
        );
    })
})