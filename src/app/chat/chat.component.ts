import { Component, OnInit } from '@angular/core';
import {TdMediaService} from "@covalent/core";
import { StompService } from 'ng2-stomp-service';

@Component({
  selector: 'snp-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {
  private subscription: any;

  constructor(stomp: StompService) {
//configuration
    stomp.configure({
      host: 'stomp',
      debug: false,
      queue: {'init': false}
    });

    //start connection
    stomp.startConnect().then(() => {
      stomp.done('init');
      console.log('connected');

      //subscribe
      this.subscription = stomp.subscribe('/destination', this.response);

      //send data
      stomp.send('destination', {"data": "data"});

      //unsubscribe
      this.subscription.unsubscribe();

      //disconnect
      stomp.disconnect().then(() => {
        console.log('Connection closed')
      })

    });


  }

//response
  public response = (data) => {
    console.log(data);
  }

  ngOnInit(){}
}




