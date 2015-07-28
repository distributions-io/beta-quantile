options( digits = 16 )
library( jsonlite )


alpha = 1
beta = 1
probs = seq( 0, 1, 0.01 )
y = qbeta( probs, alpha, beta )

cat( y, sep = ",\n" )

data = list(
	alpha = alpha,
	beta = beta,
	data = probs,
	expected = y
)

write( toJSON( data, digits = 16, auto_unbox = TRUE ), "./test/fixtures/deepset.json" )
