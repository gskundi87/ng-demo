import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestComponent } from './test/test.component';
import { FooComponent } from './foo/foo.component';
import { TestServiceService } from './test/test-service.service';



@NgModule({
  declarations: [TestComponent, FooComponent],
  imports: [CommonModule],
  exports: [TestComponent],
  providers: [TestServiceService]
})
export class TwoModule { }
