
var username = " wanjing";
var greeting = "hello";
if(username)
  greeting += username;
else
  greeting += "there";
Util.log(greeting);

//2.typeof
var str ;
str = (typeof greeting == "string") ? "'" + greeting + "'" : value;
Util.log(str);

//3.delete
var o = {x:1,y:2};
delete o.x;
Util.log("x" in o); //==> false

var a =[1,2,3];
delete a[2];
Util.log(a);

var o = {x:1,y:2};
delete o.x;
Util.log(typeof o.x);
