import { Component, OnInit } from '@angular/core';
import { from, Observable, of } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'angular-observables';

  //creating an observable using constructor argument
  myObservable = new Observable((observer) => {
    setTimeout(() => { observer.next(1) }, 2000);
    setTimeout(() => { observer.next(2) }, 3000);
    setTimeout(() => { observer.next(3) }, 4000);
    //setTimeout(() => { observer.error(new Error('Something went wrong! Please try again later')) }, 5000);
    setTimeout(() => { observer.next(4) }, 6000);
    setTimeout(() => { observer.complete() }, 6000);
    setTimeout(() => { observer.next(4) }, 6000);
  });
  //creating observables using other methods
  array1 = [1, 2, 3, 4];
  array2 = ['a', 'b', 'c', 'd'];
  ofObservable = of(this.array1, this.array2);

  //from operator,any iterable can be passed
  fromObservable = from(this.array1);
  ngOnInit() {
    // this.myObservable.subscribe({
    //   //next callback function which gets executed for every value from next function
    //   next: (res) => {
    //     console.log(res);
    //   },
    //   //error callback function which gets executed if there is any error
    //   error: (error) => {
    //     console.log(error);

    //     alert("Something went wrong");
    //   },
    //   complete: () => {
    //     alert("Completed");
    //   }
    // }
    // );
    //ofObservable
    this.ofObservable.subscribe({
      //next callback function which gets executed for every value from next function
      next: (res) => {
        console.log(res);
      },
      //error callback function which gets executed if there is any error
      error: (error) => {
        console.log(error);

        alert("Something went wrong");
      },
      complete: () => {
        alert("Completed");
      }
    }
    );
    this.fromObservable.subscribe({
      //next callback function which gets executed for every value from next function
      next: (res) => {
        console.log(res);
      },
      //error callback function which gets executed if there is any error
      error: (error) => {
        console.log(error);

        alert("Something went wrong");
      },
      complete: () => {
        alert("Completed");
      }
    }
    );
  }
}
