options( digits = 16 )
library( jsonlite )


alpha = 20
beta = 84
probs = c( 0, 0.25, 0.5, 0.75, 1 )
y = qbeta( probs, alpha, beta )

cat( y, sep = ",\n" )

data = list(
	alpha = alpha,
	beta = beta,
	data = probs,
	expected = y
)

write( toJSON( data, digits = 16, auto_unbox = TRUE ), "./test/fixtures/number.json" )
