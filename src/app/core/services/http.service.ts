import { Injectable } from '@angular/core';

import {
  Headers,
  Http,
  Request,
  RequestOptions,
  RequestOptionsArgs,
  Response,
  XHRBackend,
} from '@angular/http';

import { Observable } from 'rxjs';

const BASE_URL = 'https://sazonenka-angular2.herokuapp.com';

@Injectable()
export class HttpService extends Http {
  public constructor (backend: XHRBackend, options: RequestOptions) {
    let token = localStorage.getItem('token');
    options.headers.set('Authorization', token);
    super(backend, options);
  }

  public request(url: string | Request, options?: RequestOptionsArgs): Observable<Response> {
    let token = localStorage.getItem('token');
    if (typeof url === 'string') {
      url = BASE_URL + url;
      if (!options) {
        options = {
          headers: new Headers(),
        };
      }
      options.headers.set('Authorization', token);
    } else {
      url.url = BASE_URL + url.url;
      url.headers.set('Authorization', token);
    }
    return super.request(url, options);
  }
}
