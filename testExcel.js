var xlsx=require('node-xlsx');
var _ = require('lodash')
var excel = xlsx.parse('chenben.xls');

//获取某字段在数组中的index
var field= function(str){
	if (!_.includes(_.first(excel[0].data), str) ) {
		// throw new Error('没有这个字段:'+ str)
		return undefined
	}else{
		return _.first(excel[0].data).indexOf(str)
	}
}

//哪些字段需要是唯一的？貌似直接用数据库里面的会更方便？比如把全部的数据保存进去，然后group一下，就成为唯一了，也就是distinct国际条码！
//这样就不需要在程序中进行唯一的处理了，你的速度还没有人家数据库里面的快。
var excelUniq = function (str) {

}
// console.log(excel);
// 第一个工作表的数据
 // var data = excel.worksheets[0].data;
 var worksheet1 = excel[0]
 var content = worksheet1.data;

 var nameTable ={
	  barCode:"国际条码"
	, productName: "商品名称"
	, model:"商品规格"
	, marketUnit:"销售单位"
	, salesQuantity:"销售数量"
	, salesAmount:"销售金额"
	, singleCostPrice:"单台成本价"
	, totalCostPrice:"总成本价"
	, royalty:"提成"
	, marktRoyalty:"超市提成"
	, profit:"利润"
}
 // console.log(worksheet1)
 // console.log(worksheet1.data[0]);
 // 南漳买多购发来的excel表格，字段名称如下：
 // '序号', '国际条码','商品名称','商品规格','销售单位','销售数量','销售金额','单台成本价','总成本价','提成','利润's
 // console.log(worksheet1.data[1])
 // console.log(worksheet1.data[1][field('国际条码')])
 // console.log(worksheet1.data[1][field('商品名称')])
 // console.log(worksheet1.data[1][field('单台成本价')])
 var objArray = []
 var requireField = '国际条码'
 worksheet1.data.slice(1,worksheet1.data.length).forEach(item=>{
	 let reg= /\d+/
	 if ( reg.test(item[field(requireField)]) ) {
			let obj = new Object();
			for (var key in nameTable) {
				let china = nameTable[key]
				if (field(china)) {
					obj[key]=item[field(china)]
				}else {
					obj[key]=undefined
				}
			}
			objArray.push(obj)
	 }
 })
console.log(objArray);
console.log(objArray.length);
//整个的程序应该就是把所有的表里面的数据都读出来，然后取得国际条码，再把其单价拿出来最后放到想要计算的表里面！
