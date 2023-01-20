import { Component, OnDestroy, OnInit } from '@angular/core';
import { TestServiceService } from '../two/test/test-service.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit, OnDestroy {

  constructor(private testService: TestServiceService) { }

  ngOnInit(): void {
    this.testService.foo = "In Navbar";
    console.log(this.testService.foo);
  }

  ngOnDestroy(): void {
      
  }
}
