

//实例化people 对象
function  people (name) { this.name = name;};

//创建people的eye方法
people.prototype.eye = function(look = 'two eyes') {
	return look;
};

//创建获取实例名的方法
people.prototype.getName = function() {
	return this.name;
};


//开始使用
const man = new people('jac');
let man_name = man.getName();
let man_eye = man.eye();
console.log(man_name + ' has ' + man_eye);
