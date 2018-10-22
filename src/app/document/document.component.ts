import { DocumentService } from './document.service';
import { Component, OnInit } from '@angular/core';
import {Document} from './document';

@Component({
  selector: 'app-document',
  templateUrl: './document.component.html',
  styleUrls: ['./document.component.css'],
  providers: [DocumentService]
})
export class DocumentComponent implements OnInit {
  documentList: Document[];
  constructor(private documentService: DocumentService) { }

  ngOnInit() {
   this.getDocumentList();
  }
  getDocumentList() {
    this.documentService.getDocumentList().subscribe(p => {
        this.documentList = p;
      }
    );
  }
}
