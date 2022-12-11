import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { ChannelSubscription } from '../shared/services/channel.subscription.service';

@Component({
  selector: 'app-two',
  templateUrl: './two.component.html',
  styleUrls: ['./two.component.css']
})
export class TwoComponent implements OnInit {
  USersubmited : boolean|any= false

  constructor(private subService :ChannelSubscription) { }

  ngOnInit(): void {

    this.subService.newChannelSubscription.subscribe((data:any)=>{

      this.USersubmited=data;

      console.log(data)

     

    })
  }

}
