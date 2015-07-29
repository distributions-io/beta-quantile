'use strict';

// MODULES //

var betaincinv = require( 'compute-betaincinv/lib/ibeta_inv_imp.js' );


// PARTIAL //

/**
* FUNCTION: partial( alpha, beta )
*	Partially applies first shape parameter `alpha` and second shape parameter `beta` and returns a function for evaluating the quantile function for a Beta distribution.
*
* @param {Number} alpha - first shape parameter
* @param {Number} beta - second shape parameter
* @returns {Function} quantile function
*/
function partial( alpha, beta ) {

	/**
	* FUNCTION: quantile( p )
	*	Evaluates the quantile function for a Beta distribution.
	*
	* @private
	* @param {Number} p - input value
	* @returns {Number} evaluated quantile function
	*/
	return function quantile( p ) {
		if ( p !== p || p < 0 || p > 1 ) {
			return NaN;
		}
		return betaincinv( alpha, beta, p, 1 - p )[ 0 ];
	};
} // end FUNCTION partial()


// EXPORTS //

module.exports = partial;
