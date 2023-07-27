/*
* Title: Database
*/

// dependencies
const fs = require('fs');
const path = require('path');

// module-scaffold
const lib = {};

lib.basedir = path.join(__dirname,'../.data/');
 
// write data
lib.create=function(dir,file,data,callback){
	// open file for  writing 
	fs.open(`${lib.basedir+dir}/${file}.json`,'wx',function(err,fileDescriptor){
		if(!err && fileDescriptor){
			// stringify data
			const stringData=JSON.stringify(data)
			//write data to file
			fs.writeFile(fileDescriptor,stringData,function(err){
				if(!err){
					fs.close(fileDescriptor,function(err){
						if(!err){
							callback(false)
						}else{
							callback('Error closing the new file ')
						}
					})
				}else{
					callback('error writing to file')
				}
			})
		}else{
			callback('Could not create new file .It already exist!')
		}
	})

}

module.exports=lib;