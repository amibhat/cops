//define(['backbone',
//	'jquery'
  //     ], function(Backbone, $){

var EndModel = Backbone.Model.extend({

    defaults: {
	p_cnt: 0,
	c_cnt: 0,
	which: {}
    },
   
	       initialize: function(ps, cs, e) {
		   this.which = e;
		   this.p_cnt = ps;
		   this.c_cnt = cs;
	       },

	       validate: function() {
		   return (
		       this.p_cnt >= this.c_cnt
			   ||
			   this.p_cnt == 0
		   );
	       }
});
