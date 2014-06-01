var checkAST = require("./check-ast.js");
var esprima = require("esprima");
var fs = require("fs");

var allPassed = true;

valid("Test 1", {
	"type": "Program",
	"body": [{
		"type": "ExpressionStatement",
		"expression": {
			"type": "Literal",
			"value": 24
		}
	},
	{
		"type": "FunctionDeclaration",
		"id": {
			"type": "Identifier",
			"name": "dave"
		},
		"params": [
			{
				"type": "Identifier",
				"name": "param"
			}
		],
		"defaults": [],
		"body": {
			"type": "BlockStatement",
			"body": []
		},
		"rest": null,
		"generator": false,
		"expression": false
	}]
});

var source = fs.readFileSync("check-ast.js", "utf8");
var ast = esprima.parse(source);

var start = Date.now();
valid("Own source", ast);
console.log("time: " + (Date.now() - start) + "ms");

function invalid(name, input) {
	return runTest(false, name, input);
}

function valid(name, input) {
	return runTest(true, name, input);
}

function runTest(expected, name, input) {
	var result;
	var msg = "should have failed, but succeeded";
	try {
		result = checkAST(input);
	}
	catch (e) {
		msg = e;
		result = false;
	}
	if (result !== expected) {
		console.log("Test failed: " + name);
		console.log(msg.toString());
		allPassed = false;
	}
}

if (allPassed) {
	console.log("All tests passed");
}