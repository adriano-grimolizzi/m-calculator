import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public stack = 3000;

  public bigBlind = 100;

  public ante = 25;

  public numberOfPlayers = 9;

  get smallBlind(): number {
    return this.bigBlind ? this.bigBlind / 2 : 0;
  }

  get magriel(): number {
    return this.stack / (this.smallBlind + this.bigBlind + this.ante * this.numberOfPlayers);
  }

  // get effectiveMagriel(): number { return this.magriel * (this.numberOfPlayers / 10); }

  get color(): string {
    if (this.magriel < 1) { return 'gray'; } else
    if (this.magriel < 5) { return 'red'; } else
    if (this.magriel < 10) { return 'orange'; } else { return 'green'; }
  }

  get magrielStyle() {
    return { 'color': this.color };
  };
}
