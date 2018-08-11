#!/usr/bin/env ruby

# Sum square difference
# Problem 6
#
# The sum of the squares of the first ten natural numbers is
# 1**2 + 2**2 + ... + 10**2 = 385
#
# The square of the sum of the first ten natural numbers is
# (1 + 2 + ... + 10)2 = 55**2 = 3025
#
# Hence the difference between the sum of the squares of the first ten natural
# numbers and the square of the sum is 3025 − 385 = 2640.
#
# Find the difference between the sum of the squares of the first one hundred
# natural numbers and the square of the sum.
def sum_square_diff(max)
  sum, sum_squares = 0, 0
  (1..max).each do |n|
    sum += n
    sum_squares += n**2
  end
  (sum**2) - sum_squares
end

puts sum_square_diff(10) == 2640
puts sum_square_diff(100)
