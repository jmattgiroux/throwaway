import { Component } from '@angular/core';
import PDFMerger from 'pdf-merger-js';
import {combineLatest, mergeMap, Observable} from 'rxjs';

const merger = new PDFMerger()



@Component({
  selector: 'throwaway-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'test-pdf-merger';

  mergePdfs() {
    const pdf1$ = new Observable(observer => {
      merger.add('https://estimate-3.s3.us-west-2.amazonaws.com/work-order/60ccf35cba8390e35199d652')
        .then((res) => observer.next(res))
    })

    const pdf2$ = new Observable(observer => {
      merger.add('https://estimate-3.s3.us-west-2.amazonaws.com/work-order/60cbfffc2ec5abcd5f522193')
        .then((res) => observer.next(res))
    })

    const pdf3$ = new Observable(observer => {
      merger.add('C:/Repos/throwaway/apps/test-pdf-merger/src/assets/myPDFs/num1.pdf')
        .then((res) => observer.next(res))
    })

    const save$ = new Observable(observer => {
      merger.save('myNewFile' )
        .then((res) => observer.next(res))
    })

    combineLatest([pdf1$, pdf2$])
      .pipe(mergeMap(([pdf1, pdf2]) => save$))
      .subscribe((response) => {
      console.log('response', response)
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
