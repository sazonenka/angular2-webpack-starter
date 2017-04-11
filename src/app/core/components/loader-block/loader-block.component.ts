import { Component } from '@angular/core';

import { LoaderBlockService } from '../../services';

@Component({
  selector: 'loader-block',
  styleUrls: [ './loader-block.component.scss' ],
  templateUrl: './loader-block.component.html'
})
export class LoaderBlockComponent {
  constructor(public loaderBlockService: LoaderBlockService) {}
}
