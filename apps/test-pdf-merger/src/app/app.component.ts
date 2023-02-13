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
}
