import { Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-myyapp',
  templateUrl: './myyapp.component.html',
  styleUrls: ['./myyapp.component.scss']
})
export class MyyappComponent{

  name:string='';
  email:string='';
  message:string='';
  twoWay='Heading';
  //  ngAfterViewInit(): void {
  //   //  throw new Error('Method not implemented.');
  //   console.log('inside view init');
    
  //  }

   myapptitle:string='myproject';
   show:boolean=true;

   @Input() public property:any;
   @Input() public child:any;
   @Input() public parent:any;
   @Input() public work:any;

   @Output() click1=new EventEmitter();
   @Output() touch=new EventEmitter();
   @Output() public submit=new EventEmitter();




   onClick(){
    this.click1.emit('hi im priya');
   }
   onTouch(){
    this.touch.emit('welcome');
   }
   onClick1(formname:string,formemail:string,formmessage:string){
    let formdata={
      formname:formname,
      formemail:formemail,
      formmessage:formmessage
     }
     console.log(formdata);
     
     this.submit.emit(formdata);
   }

}
