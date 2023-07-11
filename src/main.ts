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

  // This example illustrates how each link in a promise chain must wait
  // for the previous link to be settled (fulfilled or rejected) before
  // its then callback function is invoked.
  initProcess(): void {
    this.msg1 = '';
    this.msg2 = '';
    this.msg3 = '';

    const myPromise = new Promise(
      (resolve) => {
        setTimeout(() => {
          this.msg1 = 'Async function #1 completed';
          setTimeout(() => {
            this.msg2 = 'Async function #2 completed';
            setTimeout(() => {
              this.msg3 = 'Async function #3 completed';
            }, 3000)
          }, 3000)
        }, 3000)
      }
    );
  }
}

bootstrapApplication(App);
