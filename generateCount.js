var fs = require('fs');
var _ = require('underscore')

fs.readFile('./checkProduct.txt','utf8',	function(err,result){
		if(err){ console.log(err); }
		else{
			var allContent = result.split('\n')
			// console.log(allContent[1])
			var firstArr = _.map(allContent, function(row){
				var [barCode, filename] = row.split(',')
				return {barCode, filename}
			})
			// console.log(firstArr)
			// allContent.forEach(row=>{
			// 	// console.log(_.compact(row.split(',')))
			// 	console.log((row.split(',')))
			// })
			var output = _.countBy(firstArr, function(item){
				return item.barCode
			})
			console.log(output)
		}
	})