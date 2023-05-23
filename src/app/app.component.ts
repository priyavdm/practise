import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { MyyappComponent } from './myyapp/myyapp.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit{
  ngAfterViewInit(): void {
    // throw new Error('Method not implemented.');
       this.message=this.child.title;
    
  }
  // this is available for child
  title = 'practiseproject';
  title1= 'projectreport';
  var1='';
  var2='';
  message='';
  var3:any[]=[];

  arr=['priya','rajesh','rajiv','selva','roshin'];
  arr1=[{name:'priya',age:22,gender:'female'},{name:'leela',age:22,gender:'female'},{name:'ajisha',age:22,gender:'female'}];

  @ViewChild(MyyappComponent) child:any;

  captureChild(event:any){
      // console.log('what is ur name?',event);
      this.var1=event;
      
  }
  captureChild1(event:any){
    // console.log('what is ur name?',event);
    this.var2=event;
    }
    captureChild2(event:any){
      // console.log('what is ur name?',event);
      console.log(event);
      
      this.var3.push(event);
      // this.var3=event;
      
      console.log(this.var3);
      
      }
  
  
}
