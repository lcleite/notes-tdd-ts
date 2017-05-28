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
