'use strict';

// MODULES //

var betaincinv = require( 'compute-betaincinv/lib/ibeta_inv_imp.js' );


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
	return betaincinv( alpha, beta, p, 1 - p )[ 0 ];
} // end FUNCTION quantile()


// EXPORTS //

module.exports = quantile;
