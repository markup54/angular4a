export class Samochod{
  private _nazwa:string;
  private _url:string;
  private _ranking:number;
  private _niedoceniony:boolean;

  public constructor(n:string,u:string){
    this._nazwa = n;
    this._url = u;
    this._ranking = 0;
    this._niedoceniony = true;
  }
  public get nazwa(){
    return this._nazwa;
  }
  public get niedoceniony(){
    return this._niedoceniony
  }
  public set niedoceniony(value:boolean){
    this._niedoceniony =value;
  }
  public get url(){
    return this._url;
  }
  public get ranking(){
    return this._ranking;
  }

  public set ranking(value:number){

    this._ranking += value;
    if(this._ranking>10)
      this._ranking =10;
    else if(this._ranking<0)
      this._ranking = 0;
  }
public set nazwa(value:string){
  this.nazwa = value;
}

}
