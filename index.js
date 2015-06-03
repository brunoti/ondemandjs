function OnDemandJs () {
	var self    = this;
	var head    = document.getElementsByTagName('head').item(0);
	var metaTag = document.querySelector('meta[property=ondemand]');
	var libs    = metaTag.content.split(',');
	var libsObj = [];

	self.setNewLibraryName = function (name, options) {
		libsObj[name] = options;
	}

	self.getLibraryByName = function (name) {
		return libsObj[name];
	}

	self.renderLibraries = function () {
		libs.forEach(function (element, index) {
			if(typeof libsObj[element] == 'undefined') {
				throw new Error('Library "' + element + '" was not found!');
			} else {
				var script = document.createElement('script');
				script.setAttribute('src', libsObj[element]);
				head.appendChild(script)
			}
		});
	}

}
