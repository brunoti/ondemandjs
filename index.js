function OnDemandJs () {
	var self = this;
	var head 		= document.getElementsByTagName('head').item(0);
	var metaTag = document.querySelector('meta[property=ondemand]');
	var libs    = metaTag.content.split(',');
	self.libsObj = [];

	self.setNewLibraryName = function (name, options) {
		self.libsObj[name] = options;
	}
	self.getLibraryByName = function (name) {
		return self.libsObj[name];
	}

}