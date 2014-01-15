/**
 * Module dependencies
 */

var util = require('util')
	, _ = require('lodash');

// Make _.defaults recursive
_.defaults = require('merge-defaults');




/**
 * This `before` function is run before generating targets.
 * Validate, configure defaults, get extra dependencies, etc.
 *
 * @param  {Object} scope
 * @param  {Function} cb    [callback]
 */

module.exports = function(scope, cb) {

	//
	// Validate custom scope variables which
	// are required by this generator.
	//

	if ( !scope.foo ) {
		return cb(new Error(
			'Missing scope variable: `foo`\n' +
			'Please make sure it is specified and try again.'
		));
	}


	//
	// Determine default values based on the
	// available scope.
	//

	_.defaults(scope, {
		currentTime: new Date()
	});



	//
	// Take multiple "passes" if necessary.
	//

	_.defaults(scope, {
		rootPath: scope.rootPath
	});



	//
	// Trigger callback with no error to proceed.
	//

	cb();
};
