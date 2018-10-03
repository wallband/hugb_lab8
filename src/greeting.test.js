//greetin.test.js

const greeting = require('./greeting');


test("returns greeting with custome name", () => {
	expect(greeting("Mei")).toBe("Hello, Mei!");
});
