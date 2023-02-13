import { Component } from '@angular/core';
import PDFMerger from 'pdf-merger-js';

const merger = new PDFMerger()



@Component({
  selector: 'throwaway-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'test-pdf-merger';

  async mergePdfs() {
    await merger.add('https://yes-pdf.com/electronic-book/1906')
    await merger.add('https://yes-pdf.com/electronic-book/4500')
    await merger.add('https://yes-pdf.com/electronic-book/4497')
    return merger.save("mynewfile.pdf")
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
