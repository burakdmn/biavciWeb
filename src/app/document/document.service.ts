import { Injectable } from '@angular/core';
import { Http, Response, HttpModule } from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import {Document} from './document';
import { Headers, RequestOptions} from '@angular/http';

@Injectable()
export class DocumentService {

  constructor(private http: Http) { }

  getDocumentList(): Observable<Document[]> {

    return this.http.get('http://localhost:8090/documentList').map(response => response.json());

  }

  addDocument(file: Object[] ): void {
    const document: Document = new Document( 2, null, null, null, null, true, 5, null, null, 'indir.jpeg', file);
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    const options = new RequestOptions({headers: headers});
    this.http.post('http://localhost:8090/addDocument', JSON.stringify(document), options).subscribe(
        res => {
            console.log(res);
          },
          err => {
            console.log('Error occured');
          }
        );
  }
}
