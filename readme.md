JavaScript AST Validator
===

Validates a JavaScript AST object to ensure that it meets the specification for the [Mozilla Parser API](https://developer.mozilla.org/en-US/docs/Mozilla/Projects/SpiderMonkey/Parser_API). This is the AST format used by [Esprima](http://esprima.org/) and [Escodegen](https://github.com/Constellation/escodegen). If you are generating ASTs to pass to Escodegen, this validator will give more informative error messages when the AST is invalid, to help you track down the problem.

The module exposes a single function which takes an AST node object and an optional second parameter specifying the type of the node: `"expression"`, `"statement"` or `"program"`. If the node type is omitted, it is presumed to be a top-level `"Program"` node. The function will return true if the AST is valid, or throw an error otherwise, with a message detailing where the invalid node was found.