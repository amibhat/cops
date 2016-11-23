console.log("start");

var cc_mv = new (function ()
{
    return {

	name: 'cc_mv',

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

function swap(a, b)
{
    console.log("swapping " + a.which + " " + b.which);

    var tmp = a;
    a = b;
    b = tmp;

    console.log("swappeed " + a.which + " " + b);
}

var End = function(ps, cs, e) {
    return {
	which: e,
	p_cnt: ps,
	c_cnt: cs,

	validate: function()
	{
	    return (
		this.p_cnt >= this.c_cnt
		||
		this.p_cnt == 0
	    );
	}
    }
};


var e1 = new End(3, 3, 'E1');
var e2 = new End(0, 0, 'E2');

var moves = [cc_mv, cp_mv, pp_mv];

var src = e1,
    dst = e2;

while(true) {
    var tmp;
    var next_move = Math.floor(Math.random() * 3);
  
    console.log(moves[next_move].name + " from " + src.which + " to " + dst.which);

    if(!moves[next_move].do(src, dst)) {

	break;
    }
    
//    swap(src, dst);
    tmp = src;
    src = dst;
    dst = src;
}
    
