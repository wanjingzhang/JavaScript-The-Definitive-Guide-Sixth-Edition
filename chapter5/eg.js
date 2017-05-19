//throw
function factorial(x){
  if(x<0)throw new Error("x不能是负数");
  for(var f = 1;x>1;f*=x,x--);
  return f;
}

Util.log(factorial(-3));
