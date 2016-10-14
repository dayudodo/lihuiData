var fs = require('fs');
var path = require('path')

var options = {}
var qrdecoder = require('node-zxing')(options);

function decodeDirectory(dirName){
	console.log('decode barcode in:',dirName)
	var DirectoryOfErrorImages = 'needManuals'

	fs.readdir(dirName, function(err, files){
	    if(err)console.log(err);
	    // console.log(files);
	    files.forEach(file=>{
	    	var path = `${dirName}/${file}`
	    	// console.log(path)
	    	qrdecoder.decode(path,
	    	  function(err, out) {
	    	  	if (err) {
	    	  		// console.log(err)
	    	  		console.log("can't :%s, remove...", path)
	    	  		fs.rename(path, `./${DirectoryOfErrorImages}/need-${file}`)
	    	  	}
	    	    else{ 
	                if (out) {
	                    // console.log(out, file)
	                    fs.appendFile('checkProduct.txt', `${out},${file}\n`, (err) => {
	                      if (err) throw err;
	                      console.log(`${out} was appended to file!`);
	                    });
	                }else{
	                    console.log("no number :%s, remove...", path)
	                    fs.rename(path, `./${DirectoryOfErrorImages}/null-${file}`)
	                }
	    	    	
	    	    }
	    	  }
	    	);
	    })

	})   
}

function decodeOneFile(fileName){
	qrdecoder.decode(fileName, function(err,out){
	    if (err) {
	        console.log(err)
	    }else{
	      console.log("value:",out, fileName)
	    }
	  
	})
}

// decodeOneFile('./needManuals/20160910_094909-2.png')
// var dirName = './needManuals'
decodeDirectory('./images')