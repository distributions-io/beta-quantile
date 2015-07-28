'use strict';

// MODULES //

var betaincinv = require( 'compute-betaincinv' );


// QUANTILE //

/**
* FUNCTION: quantile( p, alpha, beta )
*	Evaluates the quantile function for a Beta distribution with first shape parameter `alpha` and second shape parameter `beta` at a probability `p`.
*
* @param {Number} p - input value
* @param {Number} alpha - first shape parameter
* @param {Number} beta - second shape parameter
* @returns {Number} evaluated quantile function
*/
function quantile( p, alpha, beta ) {
	if ( p !== p || p < 0 || p > 1 ) {
		return NaN;
	}
	return betaincinv( p, alpha, beta );
} // end FUNCTION quantile()


// EXPORTS //

module.exports = quantile;
