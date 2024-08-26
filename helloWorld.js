import { LightningElement } from 'lwc';

export default class HelloWorld extends LightningElement {
input1;
input2;
inputbox="";
banner1=true;
banner2=false;
banner3=false;
finalresult;
disableback=false;

buttonhandler(event){
    console.log(event.target.label +'clicked');
    this.inputbox=this.inputbox+String(event.target.label);

}
confirmhandler1(){
    this.disableback=false;
    this.input1=Number(this.inputbox);
    console.log(this.input1);
    console.log(typeof this.input1);
    this.inputbox="";
    this.banner1=false;
    this.banner2=true;
    this.banner3=false;

}
confirmhandler2(){
    this.input2=Number(this.inputbox);
    console.log(this.input2);
    console.log(typeof this.input2);
    this.inputbox="";
    this.banner1=false;
    this.banner2=false;
    
    this.disableback=true;

    


}

addhandler(){
    console.log('add clicked');
    this.finalresult=this.input1+this.input2;
    console.log(this.finalresult);
    this.template.querySelector(".finalresultbanner").innerHTML=`the final result by adding ${this.input1} and ${this.input2} is ${this.finalresult}`;

}
subtracthandler(){
    console.log('subtract clicked');
    this.finalresult=this.input1-this.input2;
    console.log(this.finalresult);
    this.template.querySelector(".finalresultbanner").innerHTML=`the final result by subtracting ${this.input1} and ${this.input2} is ${this.finalresult}`;

}
multiplyhandler(){
    console.log('multiply clicked');
    this.finalresult=this.input1*this.input2;
    console.log(this.finalresult);
    this.template.querySelector(".finalresultbanner").innerHTML=`the final result by multiplying ${this.input1} and ${this.input2} is ${this.finalresult}`;

}

dividehandler(){
    console.log('divide clicked');
    this.finalresult=this.input1/this.input2;
    console.log(this.finalresult);
    this.template.querySelector(".finalresultbanner").innerHTML=`the final result by dividing ${this.input1} and ${this.input2} is ${this.finalresult}`;

}

backhandler(){
    console.log('back clicked');
    this.inputbox=this.inputbox.substring(0, this.inputbox.length - 1);
    console.log(this.inputbox);

}

resetbuttonhandler(){
   

    console.log('reset clicked');
    this.disableback=false;
    this.banner2=false;
    this.banner3=false;
        this.banner1=true;
    this.inputbox="";
    this.input1="";
    this.input2="";
    

}

enterhandler(){
    console.log('enter clicked');
    this.banner3=true;

}




}