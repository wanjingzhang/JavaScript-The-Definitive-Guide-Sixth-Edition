//Object
var empty = {};
var point = {x:0,y:0};
var point2 = {x:point.x,y:point.y+1};
var book = {
  "main title":"JavaScript",
  'sub-title':"The Definitive Guide",
  "for":"all audiences",
  author:{
    firstname:"David",
    surname:"Flanagan"
  }
};

var o1 = Object.create({x:1,y:2});
var o2 = Object.create(null);
var o3 - Object.create(Object.prototype);

//eg：6-1 通过原型继承创建一个新对象
function inherit(p){
  if(p == null)throw TypeError();
  if(Object.create)
    return Object.create(p);
  var t = typeof p;
  if(t !== "object" && t !== "function") throw TypeError();
  function f(){};
  f.prototype = p;
  return new f();
}
// 添加股票
function addstock(portfolio,stockname,shares){
  portfolio[stockname] = shares;
}

// for in
function getvalue(portfolio){
  var total = 0.0;
  for(stock in portfolio){
    var shares = portfolio[stock];
    var price = getquote(stock);
    total += shares *price;
  }
  return total;
}

// 属性访问错误
var len = undefined;
if(book){
  if(book.subtitle)len = book.subtitle.length;
}
// 方法二 更简单常用
var len = book&&book.subtitle&&book.subtitle.length;

// 检测属性
var o = {x:1}
"x" in o;// true :"x" 是o的属性
"y" in o;// false：“y" 不是o的属性
"toString" in o; // true:o继承toSting属性

//检测自有属性
var o = {x:1};
o.hasOwnProperty("x");//true:o有一个自有属性
o.hasOwnProperty("y");//false:o中不存在属性y
o.hasOwnProperty("toString"); //false ：toString是继承属性






