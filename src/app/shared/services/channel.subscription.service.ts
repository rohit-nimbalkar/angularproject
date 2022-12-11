import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable()

export class ChannelSubscription {
    
    newChannelSubscription= new BehaviorSubject(false)

}

   
