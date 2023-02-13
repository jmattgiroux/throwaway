import { Component } from '@angular/core';
import PDFMerger from 'pdf-merger-js';
import {combineLatest, Observable} from 'rxjs';

const merger = new PDFMerger()



@Component({
  selector: 'throwaway-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'test-pdf-merger';

  mergePdfs() {
    const pdf1 = new Observable(observer => {
      merger.add('https://yes-pdf.com/electronic-book/1906')
    })

    const pdf2 = new Observable(observer => {
      merger.add('https://yes-pdf.com/electronic-book/1906')
    })

    const pdf3 = new Observable(observer => {
      merger.add('https://yes-pdf.com/electronic-book/1906')
    })

    const save = new Observable(observer => {
      merger.add('https://yes-pdf.com/electronic-book/1906')
    })

    combineLatest([pdf1, pdf2, pdf3, save]).subscribe(([pdf1, pdf2, pdf3, save]) => {
      console.log('pdf1', pdf1)
    }, error => {
      console.log('error', error)
    })


  }
}


// blobToBase64(res, picture) {
//   return new Observable(observer => {
//     const reader = new FileReader();
//     reader.readAsDataURL(res);
//     reader.onloadend = function() {
//       observer.next({
//         source: reader.result,
//         name: picture.name,
//         description: picture.description
//       });
//     };
//   });
// }
