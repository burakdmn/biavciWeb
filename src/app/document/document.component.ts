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

  onFileChange(event) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      const reader = new FileReader();
      const fileByteArray = [];
      const docService: DocumentService = this.documentService;
      reader.readAsArrayBuffer(file);
      reader.onload = function() {
        const arrayBuffer = this.result,
        array = new Uint8Array(arrayBuffer);
        for (let i = 0; i < array.length; i++) {
          fileByteArray.push(array[i]);
       }
       docService.addDocument(fileByteArray);
      };
    }
  }
}
