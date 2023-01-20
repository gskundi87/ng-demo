import { Component, OnInit, OnDestroy} from '@angular/core';
import { NASAAPI } from 'src/api-key';
import { HttpClient } from '@angular/common/http';
import { TestServiceService } from '../two/test/test-service.service';

@Component({
  selector: 'app-nasaimages',
  templateUrl: './nasaimages.component.html',
  styleUrls: ['./nasaimages.component.css']
})
export class NASAimagesComponent implements OnInit, OnDestroy {

  constructor(private testService: TestServiceService) { }

  numImages: number = 0;

  getImages(): void {
    const url = 'https://images-api.nasa.gov/search?q=${keyword}&media_type=image';
  }

  ngOnInit(): void {
      this.testService.foo = "In NASA API";
      console.log(this.testService.foo);
  }

  ngOnDestroy(): void {
      
  }
}
