#!/usr/bin/env ruby

# Special Pythagorean triplet
# Problem 9 
#
# A Pythagorean triplet is a set of three natural numbers, a < b < c, for which,
# 
# a**2 + b**2 = c**2
# For example, 3**2 + 4**2 = 9 + 16 = 25 = 5**2.
# 
# There exists exactly one Pythagorean triplet for which a + b + c = 1000.
# Find the product abc.

# Use Euclid's Formula to iteratively generate triplets. Stop when we find
# where the sum of a, b, and c equals the specified value. Return the product
# of abc.
#
# Euclid's Formula:
# For any integers where m > n > 0
# a = m**2 - n**2
# b = 2mn
# c = m**2 + n**2
def find_pythagorean_triplet_sum(num)
  done = false
  product = nil
  m = 1
  while !done
    m += 1
    n = m
    loop do
      n -= 1
      break if n <= 0
      #puts "m=#{m} n=#{n}"
      a = m**2 - n**2
      b = 2*m*n
      c = m**2 + n**2
      #puts "a=#{a} b=#{b} c=#{c}"
      if a + b + c == num
        product = a * b * c
        done = true
        break
      end
    end
  end
  product
end

puts find_pythagorean_triplet_sum(12) == 60
puts find_pythagorean_triplet_sum(1000)
