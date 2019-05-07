// "use strict";

function test() {
	const { a1 } = a.a2 || {};
	console.log(a1);
};

function startServer() {

}

var a = { a1: 10 };
test();