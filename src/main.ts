import 'zone.js/dist/zone';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';

@Component({
  selector: 'my-app',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './main.html'
})
export class App {
  msg1: string = '';
  msg2: string = '';
  msg3: string = '';

  initProcess(): void {
    this.msg1 = '';
    this.msg2 = '';
    this.msg3 = '';
    
    // -----------------------------------------------------------------------
    // This example illustrates the unsightly result of nesting asynchronous
    // functions vs. the preferred method of chaining promises.  While this
    // code might not look all that bad, in a real-life scenario, the code
    // contained in the callback functions can be complex, making the
    // result difficult to follow.
    // -----------------------------------------------------------------------
    setTimeout(() => {
      this.msg1 = 'Async function #1 completed';
      setTimeout(() => {
        this.msg2 = 'Async function #2 completed';
        setTimeout(() => {
          this.msg3 = 'Async function #3 completed';
        }, 1000)
      }, 1000)
    }, 1000);
  }
}

bootstrapApplication(App);
