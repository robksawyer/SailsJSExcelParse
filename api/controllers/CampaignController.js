/**
 * CampaignController
 *
 * @description :: Server-side logic for managing campaigns
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {
	
	process: function(req, res){
		sails.log(req.files);

		// Parse form data from server
		/*var parsedFormData = JSON.parse(req.param('xfile'));
		sails.log(parsedFormData);*/

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
		/*if(typeof require !== 'undefined') {
			XLSX = require('xlsx');
		}
		var workbook = XLSX.readFile(req.xfile);
		sails.log(workbook);*/
		return res.redirect('/campaign/upload');
	},

	upload: function(req, res){
		return res.view();
	}

};
