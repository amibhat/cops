define([
    'models/EndModel.js',
    'views/EndView.js'
], function(EndModel, EndView) {

    var cc_mv = new (function ()
		     {
			 return {

			     name: 'cc_mv',

			     possible: function(en_src) {
				 return en_src.c_cnt >= 2;
			     },

			     do: function(en1, en2) {

				 en1.c_cnt -= 2;
				 en2.c_cnt += 2;
				 
				 return (en1.validate() && en2.validate());
			     },

			     undo: function(en1, en2) {
				 en1.c_cnt += 2;
				 en2.c_cnt -= 2;
			     }
			 }
		     })();

    var cp_mv = new (function ()
		     {
			 return {

			     name: 'cp_mv',

			     possible: function(en_src) {
				 return (en_src.c_cnt >=1 && en_src.p_cnt >= 1);
			     },

			     do: function(en1, en2) {
				 en1.c_cnt -= 1;
				 en2.c_cnt += 1;

				 en1.p_cnt -= 1;
				 en2.p_cnt += 1;

				 return (en1.validate() && en2.validate());
			     },
			     
			     undo: function(en1, en2) {
				 en1.c_cnt += 1;
				 en2.c_cnt -= 1;
				 
				 en1.p_cnt += 1;
				 en2.p_cnt -= 1;
			     }
			 }
		     })();

    var pp_mv = new (function ()
		     {
			 return {
			     name: 'pp_mv',

			     possible: function(en_src) {
				 return en_src.p_cnt >= 2;
			     },

			     do: function(en1, en2) {
				 en1.p_cnt -= 2;
				 en2.p_cnt += 2;

				 return (en1.validate() && en2.validate());
			     },

			     undo: function(en1, en2) {
				 en1.p_cnt += 2;
				 en2.p_cnt -= 2;
			     }
			 }
		     })();


    var c0_mv = new (function() {
	return {
	    name: 'c0_mv',

	    possible: function(en_src) {
		return en_src.c_cnt >= 1;
	    },

	    do: function(en1, en2) {
		en1.c_cnt -= 1;
		en2.c_cnt += 1;

		return (en1.validate() && en2.validate());
	    }
	}
    });

    var p0_mv = new (function() {
	return {
	    name: 'p0_mv',

	    possible: function(en_src) {
		return en_src.p_cnt >= 1;
	    },

	    do: function(en1, en2) {
		en1.p_cnt -= 1;
		en2.p_cnt += 1;

		return (en1.validate() && en2.validate());
	    }
	}
    });

    var e1 = new EndModel(3, 3, 'E1');
    var e2 = new EndModel(0, 0, 'E2');

    var moves = [cc_mv, cp_mv, pp_mv, c0_mv, p0_mv];

    var src = e1,
	dst = e2;

    var e1View = new EndView({ el: $('#end1'), model: e1 });
    var e2View = new EndView({ el: $('#end2'), model: e2 });

    var num_moves = 0;
    
    while(true) {
	var tmp;
	var next_move;

	next_move = Math.floor(Math.random() * 3);
	
	console.log(moves[next_move].name + " from " + src.which + " to " + dst.which);

	if(moves[next_move].possible(src, dst)) {
	    moves[next_move].do(src, dst);
	    e1View.render();
	    e2View.render();
	    num_moves++;
	    if (num_moves >= 5)
		break;
	}
	
	//    swap(src, dst);
	tmp = src;
	src = dst;
	dst = tmp;
    }
});
