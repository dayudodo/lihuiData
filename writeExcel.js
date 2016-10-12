var xlsx=require('node-xlsx');
var _ = require('lodash')
// var excel = xlsx.parse('chenben.xls');
var fs = require('fs')
var _ = require('underscore')

var exportFlatten = []
var exportArr=[
	{
		barCode:13,
		productName:'abc'
	},
	{
		barCode:14,
		productName:'super'
	}
]
var header = ['产品名称','国际条码','单台成本价']
exportFlatten.push(header)
exportArr.forEach(item=>{
	exportFlatten.push(_.values(item))
})
console.log(exportFlatten)


var testData =  [["序号","名称","年龄"],
				[1,'jack',20],
				[2,'rose',19]
			]
// var excel = xlsx.build({'name':'sheet1',data:data});
const data = [[1, 2, 3], [true, false, null, 'sheetjs'], ['foo', 'bar', new Date('2014-02-19T14:30Z'), '0.3'], ['baz', null, 'qux']];
var buffer = xlsx.build([{name: "mySheetName", data: exportFlatten}, {name:'sheet1', data: testData}]); // Returns a buffer
fs.writeFileSync('用户.xlsx', buffer, 'binary');
