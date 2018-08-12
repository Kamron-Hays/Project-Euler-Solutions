#!/usr/bin/env ruby

# Summation of primes
# Problem 10
#
# The sum of the primes below 10 is 2 + 3 + 5 + 7 = 17.
#
# Find the sum of all the primes below two million.

# Yes, Ruby has a prime number module that could be used to solve this problem,
# but where's the fun in that? Use the Sieve of Eratosthenes to return an array
# of prime numbers below the specified max number.
def get_primes(max)
  arr = (0...max).to_a
  arr[0] = arr[1] = nil
  arr.each do |n|
    next unless n
    break if n**2 > max
    # Starting with the square of the current number, mark all multiples as
    # "not prime".
    (n**2).step(max,n) { |x| arr[x] = nil }
  end
  # Remove all numbers marked as "not prime" (i.e. nil).
  arr.compact
end

puts get_primes(10).reduce(0, :+) == 17
puts get_primes(2_000_000).reduce(0, :+)
