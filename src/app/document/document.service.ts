import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import {Document} from './document';


@Injectable()
export class DocumentService {

  constructor(private http: Http) { }

  getDocumentList(): Observable<Document[]> {

    return this.http.get('http://localhost:8090/documentList').map(response => response.json());

  }

}
