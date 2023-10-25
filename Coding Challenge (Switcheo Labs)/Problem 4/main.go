package main

import (
	"fmt"
)

func main() {

	fmt.Printf("Output of A: %v \n", sum_to_n_a(10))
	fmt.Printf("Output of B: %v \n", sum_to_n_b(15))
	fmt.Printf("Output of C: %v \n", sum_to_n_c(5))
}

// Simple For Loop
func sum_to_n_a(n int) int {
	// your code here
	sum := 0
	for i := 0; i <= n; i++ {
		sum += i
	}
	return sum
}

// Using formula for Series Calculation
func sum_to_n_b(n int) int {
	// your code here
	return (n*n + n) / 2
}

// Recursive Function
func sum_to_n_c(n int) int {
	// your code here
	if n == 1 {
		return 1
	} else {
		return n + sum_to_n_c(n-1)
	}
}
