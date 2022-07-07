import { Component, OnInit } from '@angular/core';
import { concatMap, delay, from, mergeMap, of } from 'rxjs';
import { GetService } from 'src/app/get.service';

@Component({
  selector: 'app-bid-ask',
  templateUrl: './bid-ask.component.html',
  styleUrls: ['./bid-ask.component.sass'],
})
export class BidAskComponent implements OnInit {
  bidasks: any = [];

  constructor(private _getservice: GetService) {}
  ngOnInit(): void {
    this._getservice
      .getBidasks()
      .pipe(
        // make observable to emit each element of the array (not the whole array)
        mergeMap((data) => from(data)),
        // delay each element by 1 sec
        concatMap((data) => of(data).pipe(delay(1000)))
      )
      .subscribe((data) => {this.bidasks = data;
        console.log(data)
      });

  }
}
