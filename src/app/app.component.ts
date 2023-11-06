import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ApiService } from './services/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  constructor(
    private apiService: ApiService
  ) {}

  fgSize = environment.GLOBAL_LOADER_FGSSIZE;
  overLayColor = environment.GLOBAL_LOADER_OVERLAYCOLOR;
  pbColor = environment.GLOBAL_LOADER_PBCOLOR;
  pbOpacity = environment.GLOBAL_LOADER_BGSOPACITY;

  ngOnInit() {
    this.apiService.getUser('johnpapa').subscribe(console.log);
  }
}
