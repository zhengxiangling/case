/*var o = {
    name: 'Jack',
    age: 20,
    city: 'Beijing'
};*/
/*for (var key in o) {
    console.log(key); 
}*/
/*for (var key in o) {
    if (o.hasOwnProperty(key)) {
        console.log(key); // 'name', 'age', 'city'
    }
}*/
/*var a = ['A', 'B', 'C','D'];
a.forEach(function (element, index, array) {
    // element: 指向当前元素的值
    // index: 指向当前索引
    // array: 指向Array对象本身
    alert(element);
});*/
/*var m = new Map([[1, 'x'], [2, 'y'], [3, 'z']]);
m.forEach(function (value, key, map) {
    alert(value);
});
*/
/*var xiaoming = {
    name: '小明',
    birth: 1990,
    age: function () {
        var y = new Date().getFullYear();
        return y - this.birth;
    }
};*/
 // console.log(xiaoming.age);
  // console.log(xiaoming.age());
 // function xiaoming.age()
 // 今年调用是25,明年调用就变成26了
function getAge() {
    var y = new Date().getFullYear();
    return y - this.birth;
}

var xiaoming = {
    name: '小明',
    birth: 1990,
    age: getAge
};
console.log(xiaoming.age())
// xiaoming.age(); // 25, 正常结果
console.log(getAge())
// getAge(); // NaN
