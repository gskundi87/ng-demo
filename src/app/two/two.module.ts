import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestComponent } from './test/test.component';
import { FooComponent } from './foo/foo.component';



@NgModule({
  declarations: [TestComponent, FooComponent],
  imports: [CommonModule],
  exports: [TestComponent]
})
export class TwoModule { }
