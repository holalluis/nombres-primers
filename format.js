
/*return "3,999.4" instead of 3999.4*/
function format(number,digits){

  //if not specified, less digits for big numbers
  if(!digits){
    if     (Math.abs(number)> 1000 ){ digits=0 }
    else if(Math.abs(number)> 100  ){ digits=1 }
    else if(Math.abs(number)> 10   ){ digits=2 }
    else if(Math.abs(number)> 0.1  ){ digits=3 }
    else if(Math.abs(number)> 0.01 ){ digits=4 }
    else if(Math.abs(number)> 0.001){ digits=5 }
    else                            { digits=6 }
  }

  //format number
  var str=new Intl.NumberFormat('en-EN',{maximumFractionDigits:digits}).format(number);

  return str;
}
