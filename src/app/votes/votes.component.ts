import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-votes',
  templateUrl: './votes.component.html',
  styleUrls: ['./votes.component.css']
})
export class VotesComponent implements OnInit {

  @Input('like') like = 0;
  @Input('dislike') dislike = 0;

  @Output('onChangeVotes') onChangeVotes = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }


  incLike() {
    this.like++;
    this.onChangeVotes.emit({type: 1, data: this.like});
  }

  incDislike() {
    this.dislike++;
    this.onChangeVotes.emit({type: 0, data: this.dislike});
  }

  showMe() {
    console.log('salam')
  }

}
