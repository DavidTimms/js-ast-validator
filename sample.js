// this is a sample file using every ES5 syntax construct

var x = 45;
function frobnicate(a, b) {
	var y = x + 56.2;
	{
		if (!true || false)
			return y;

		switch (y) {
			case false:
				return null;
			default:
				try {
					throw new Error("error");
				}
				catch (e) {
					return e;
				}
		}
	}
}

while (x > 40) {
	x -= 1;
	break;
	;;;
}

label:
	do {
		x = x - 1;
		continue;
	} while (x >= 10);

for (var i = 0; i < 100; i++) {
	console.log(i);
}

var obj = {
	name: "Dave",
	age: 21,
	"say hello": function () {
		console.log("hello, my name is " + this.name);
	}
};

for (var key in obj) 
	typeof obj[key] === "function" ? obj[key]() : (undefined, null);

with (obj) {
	name.match(/^hello/)
}

var a = [1, 2, 3, 4];