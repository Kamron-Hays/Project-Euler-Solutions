#!/usr/bin/env ruby

=begin
Smallest multiple
Problem 5 
2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.

What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?
=end

#greatest common divisor - Euclidean algorithm
def gcd(a,b)
  if ( a < 1 || b < 1 )
    return nil
  end

  remainder = 0
  loop do
    remainder = a % b
    a = b
    b = remainder
    break if b == 0
  end

  a
end

# least common multiple
def lcm(a, b)
  if ( a < 1 || b < 1 )
    return nil
  end

  (a * b) / gcd(a, b)
end

# You can compute the LCM of more than two numbers by iteratively computing
# the LCM of two numbers, i.e. lcm(a,b,c) = lcm(a,lcm(b,c))
def multi_lcm(*numbers)
  if numbers.size < 2
    return nil
  end

  result = numbers.shift
  numbers.each do |n|
    result = lcm(result, n)
  end
  
  result
end

puts lcm(4,10) == 20
puts lcm(6,15) == 30
puts multi_lcm(4,6,8) == 24
puts multi_lcm(1,2,3,4,5,6,7,8,9,10) == 2520
puts multi_lcm(1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20).to_s