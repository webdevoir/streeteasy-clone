StreetEasyClone.Collections.AlbumPhotos = Backbone.Collection.extend({
	model: StreetEasyClone.Models.AlbumPhoto,
	
	initialize: function(options) {
		this.property = options.property;
	},
	
	url: function() {
		return this.property.url() + "/album_photos"
	}
})