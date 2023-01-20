import { Component, OnDestroy, OnInit } from '@angular/core';
import { TestServiceService } from '../test/test-service.service';

@Component({
  selector: 'two-foo',
  templateUrl: './foo.component.html',
  styleUrls: ['./foo.component.css']
})
export class FooComponent implements OnInit, OnDestroy{

  constructor(private testService: TestServiceService) { }

  ngOnInit(): void {
    this.testService.foo = "In Foo";
    console.log(this.testService.foo);
  }

  ngOnDestroy(): void {
      
  }

}
