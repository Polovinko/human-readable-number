module.exports = function toReadable (number) {
  let massiveType1=["zero","one","two","three", "four", "five", "six", "seven","eight","nine"];
  let massiveType2=["ten","eleven","twelve", 'thirteen','fourteen','fifteen','sixteen','seventeen','eighteen','nineteen'];
  let massiveType3=["twenty","thirty", 'forty','fifty','sixty','seventy','eighty','ninety'];
  let num=""+number;
  let str="";
  if (num.length==1){
    str+=massiveType1[number];
  } else if (num.length==2){
      if (num[0]=="1"){
          str=massiveType2[+num[1]];
      }else{
          str=massiveType3[num[0]-2];
          if (num[1]!=0) str+=" "+massiveType1[num[1]];
      }
  }else if (num.length==3){
      str=massiveType1[num[0]]+" hundred";
    if (num[1]=="1"){
        str+=" "+massiveType2[+num[2]];
    }else if (num[1]=="0"&&num[2]!=0){
        str+=" "+massiveType1[num[2]];
    }else if(num[1]!="0"){
        str+=" "+massiveType3[num[1]-2];
        if (num[2]!=0) str+=" "+massiveType1[num[2]];
    }
  }
  return str;
}
