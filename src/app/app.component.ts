import { Component} from '@angular/core';
import { Constants } from './constants/constants';
import { ApiService } from './services/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'fyle-frontend-challenge';
  readonly constant = Constants;
  fgSize = this.constant.GLOBAL_LOADER_FGSSIZE;
  overLayColor = this.constant.GLOBAL_LOADER_OVERLAYCOLOR;
  pbColor = this.constant.GLOBAL_LOADER_PBCOLOR;
  pbOpacity = this.constant.GLOBAL_LOADER_BGSOPACITY;

  
}
