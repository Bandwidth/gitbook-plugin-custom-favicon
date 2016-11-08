var fs = require('fs');
var path = require('path');


module.exports = {
	// Map of hooks
	hooks: {

		"finish" : function () {
			var pathFile = this.options.pluginsConfig && this.options.pluginsConfig.favicon;
			var favicon = path.join(process.cwd(), pathFile);
			if (pathFile && fs.existsSync(pathFile)){
				fs.unlinkSync('_book/gitbook/images/favicon.ico');
				fs.createReadStream('favicon/favicon.ico').pipe(fs.createWriteStream('_book/gitbook/images/favicon.ico'));
			}
		}
	},

	// Map of new blocks
	blocks: {},

	// Map of new filters
	filters: {}
};
