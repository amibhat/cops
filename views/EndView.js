define(['backbone',
	'jquery',
	'text!../templates/EndTpl.html'],
       function(Backbone,
		$,
		Template) {

	    return Backbone.View.extend ({

    		template: _.template(Template),

		initialize: function(options) {
		    this.render();
		},

		/*template: _.template("../templates/EndTpl.html"),
		
    template: _.template("<div>  <span><% this.model.name %></span> \
<ul> \
    <% _.range(this.model.p_cnt).forEach(function(val, i) { %> \
    <li>P</li> \
    <% }); %> \
</div>"),*/

		render: function() {
		    this.$el.html(this.template());
		    return this;
		}
    
	});
});
