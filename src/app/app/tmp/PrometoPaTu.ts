import {reject} from "q";
export class PrometoPaTu{
  
  async getMsg1(){
    return new Promise<string>((resolve: (arg: string)=>void, reject: (arg: string)=>void) => {
      setTimeout(() => resolve("MSG 11111111111111"), 5000);
    });
  }
  
  async getMsg2(){
    return new Promise<string>((resolve, reject) => {
      setTimeout(() => resolve("MSG 2222222222222"), 2500);
    });
  }
  
  async getMsg3(): Promise<string>{
    return new Promise<string>((resolve, reject) => {
      setTimeout(() => {
        resolve("XAAAAAPOAW12");
      }, 2000);
    }).then(str => {
       return str + "XXXXXXXXXXX111111112234";
    });
  }
  
  async getMsg4(): Promise<string>{
    return new Promise<string>(async (resolve, reject) => {
      let msg = await this.getMsg1();
      resolve(msg);
    });
  }
}


/*
 
 import {Component, OnInit} from '@angular/core';
 import {PrometoPaTu} from "./tmp/PrometoPaTu";
 
 @Component({
 selector: 'app-root',
 templateUrl: './app.component.html',
 styleUrls: ['./app.component.css']
 })
 export class AppComponent implements OnInit{
 title = "app works!";
 prometo:PrometoPaTu = new PrometoPaTu();
 
 ngOnInit(): void {
 console.log("init mano");
 
 // this.vamoAwaitar();
 
 // prometo.getMsg1().then((str: string) => {
 //   console.log(str);
 // });
 //
 // prometo.getMsg2().then((str: string) => {
 //   console.log(str);
 // });
 
 this.myInit();
 }
 
 private async myInit(){
 //await this.getAwaitada();
 await this.vamoAwaitar();
 this.pele();
 this.maradona();
 }
 
 private pele(){
 console.log("pele");
 }
 
 private maradona(){
 console.log("maradona");
 }
 
 private async getAwaitada(){
 let str: string = await this.awaitarDentroDeOutro();
 console.log(str);
 }
 
 private async awaitarDentroDeOutro(): Promise<string>{
 let msg4: string;
 let msg2: string = "";
 let ret: string;
 
 msg4 = await this.prometo.getMsg4();
 console.log(msg4);
 
 for(let i = 0; i < 3; i++){
 msg2 += await this.prometo.getMsg2();
 }
 
 ret = msg2;
 
 return ret;
 }
 
 private async vamoAwaitar() {
 let msg1: string;
 let msg2: string;
 
 msg2 = await this.prometo.getMsg2();
 msg1 = await this.prometo.getMsg1();
 
 console.log(msg2);
 console.log(msg1);
 }
 }


*/
