import { Component, OnInit } from '@angular/core';
import Stomp from 'stompjs';
import SockJS from 'sockjs-client';
import $ from 'jquery';


@Component({
  selector: 'app-appchat',
  templateUrl: './appchat.component.html',
  styleUrls: ['./appchat.component.css']
})
export class AppchatComponent implements OnInit {

  private serverUrl = 'http://localhost:9000/socket'
  private title = 'WebSockets chat';
  private stompClient;

  constructor() {
  	this.initializeWebSocketConnection(); 
  }
  
  initializeWebSocketConnection(){
    let ws = new SockJS(this.serverUrl);
    this.stompClient = Stomp.over(ws);
    let that = this;
    this.stompClient.connect({}, function(frame) {
      that.stompClient.subscribe("/chat", (message) => {
        if(message.body) {
          $(".chat").append("<div class='message'>"+message.body+"</div>")
          console.log(message.body);
        }
      });
    });
  }

  ngOnInit() {
  }
  
  sendMessage(message){
    this.stompClient.send("/app/send/message" , {}, message);
    $('#input').val('');
  }

}
