#!/usr/bin/env ruby

# 10001st prime
# Problem 7
#
# By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see
# that the 6th prime is 13.
#
# What is the 10,001st prime number?

# Yes, Ruby has a prime number module that could be used to solve this problem,
# but where's the fun in that? Use the Sieve of Eratosthenes to return an array
# of prime numbers up to the specified max number.
def get_primes(max)
  arr = (0..max).to_a
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

primes = get_primes(150_000)
puts primes[5] == 13 # the 6th prime
puts primes[10_000] # the 10,001st prime
