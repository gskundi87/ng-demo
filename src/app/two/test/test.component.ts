import { Component, OnDestroy, OnInit } from '@angular/core';
import { TestServiceService } from './test-service.service';

@Component({
  selector: 'two-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})

// @Component({
//   selector: 'two-test',
//   template: '<button>This is a button</button>',
//   styleUrls: ['./test.component.css']
// })
export class TestComponent implements OnInit, OnDestroy{

  constructor(private testService: TestServiceService) { }

  data : number[] = [1, 2, 3, 4, 5]
  show : boolean = true;

  toggleClick() : void {
    this.show = !this.show;
  }

  ngOnInit(): void {
    this.testService.foo = "In Test";
    console.log(this.testService.foo);
  }

  ngOnDestroy(): void {
      
  }
}
