import { Component, OnInit } from '@angular/core';
import { ChannelSubscription } from '../shared/services/channel.subscription.service';

@Component({
  selector: 'app-one',
  templateUrl: './one.component.html',
  styleUrls: ['./one.component.css']
})
export class OneComponent implements OnInit {

  constructor(private subService :ChannelSubscription) { }

  ngOnInit(): void {
  }

  onSubmit(){
    this.subService.newChannelSubscription.next(true)
    console.log("sumitted")
  }
  onSubmitunsub(){
    this.subService.newChannelSubscription.next(false)
  }

  pnename:any="raje"
}
