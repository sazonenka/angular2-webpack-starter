import { Component } from '@angular/core';

import { LoaderBlockService } from '../../services';

@Component({
  selector: 'loader-block',
  styleUrls: [ './loaderblock.component.scss' ],
  templateUrl: './loaderblock.component.html'
})
export class LoaderBlockComponent {
  constructor(public loaderBlockService: LoaderBlockService) {}
}
