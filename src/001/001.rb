#!/usr/bin/env ruby

# Find the sum of all multiples of the specified numbers below the specified
# maximum value. For example, if we list all the natural numbers below 10 that
# are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
def sum_multiples(*numbers, max)
  sum = 0
  (1...max).each do |i|
    numbers.each do |n|
      if i % n == 0
        sum += i
        break
      end
    end
  end
  sum
end

puts sum_multiples(10) == 0
puts sum_multiples(3, 10) == 18
puts sum_multiples(5, 10) == 5
puts sum_multiples(3, 5, 10) == 23
puts sum_multiples(3, 5, 1000) == 233168
