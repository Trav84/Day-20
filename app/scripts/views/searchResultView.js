var searchResultView = Backbone.View.extend({
	el: '#search-results-view',

	initialize: function() {

		this.mySearchCollection = new searchViewCollection();

		_.bindAll(
			this,
			'onKeyUp',
			'createNewItem',
			'onCollectionsAdded'
		);

		this.$textBox = 

	},


	onKeyUp: function(e) {
		if(e.which === 13) {
			$.get(
				'http://www.omdbapi.com/',	
				{
					s: query,
				},
				this.createNewItem,
				'json'
			);
		}
	},

	createNewItem: function() {
		this.newSearchItem = new searchResultModel();

	},

	onCollectionsAdded: function() {

	}

});