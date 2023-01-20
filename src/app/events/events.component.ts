import { Component, OnDestroy, OnInit } from '@angular/core';
import { TestServiceService } from '../two/test/test-service.service';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit, OnDestroy{

  constructor(private testService: TestServiceService) { }

  ngOnInit(): void {
    this.testService.foo = "In Events";
    console.log(this.testService.foo);
  }

  ngOnDestroy(): void {
      
  }

}
