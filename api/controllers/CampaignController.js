/**
 * CampaignController
 *
 * @description :: Server-side logic for managing campaigns
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {
	
	process: function(req, res){

		// e.g.
		// 0 => infinite
		// 240000 => 4 minutes (240,000 miliseconds)
		// etc.
		//
		// Node defaults to 2 minutes.
		res.setTimeout(0);
		sails.log(req.file('xFile'));
		req.file('xFile').upload({
			
// You can apply a file upload limit (in bytes)
			maxBytes: 1000000

		}, function whenDone(err, uploadedFiles){
			if(err) {
				return res.serverError(err);
			} else {

				if(typeof require !== 'undefined') {
					XLSX = require('xlsx');
				}

				sails.log(_.str.fileExtension(uploadedFiles.filename));

				/*var workbook = XLSX.readFile(req.xfile);
				sails.log(workbook);*/

				return res.json({
					files: uploadedFiles,
					textParams: req.params.all()
				});
			}
		);

		// Iterate through each uploaded file
		/*var resultSet= [];
		async.forEach(req.files.files,function(file,cb) {
			async.auto({
				// Read temp file
				readFile: function(cb,r){   
					sails.log(file.path);
					//fs.readFile(file.path,cb);
				}
			}, function(err,res){          
				cb(err,res);
			});
		},
		// And respond
		function(err) {
			// Respond to client with success or failure
			if (err) { 
				res.json({ success:false, error: err }); 
			} else { 
				res.json({ success: true }); 
			}
		});*/
		//return res.redirect('/campaign/upload');
	},

	upload: function(req, res){
		return res.view();
	}

};

