#!/usr/bin/env python

# Multiples of 3 and 5
# Problem 1
#
# If we list all the natural numbers below 10 that are multiples of 3 or 5, we
# get 3, 5, 6 and 9. The sum of these multiples is 23.
#
# Find the sum of all the multiples of 3 or 5 below 1000.
def SumMultiples(numbers, max):
  sum = 0
  for i in range(1, max):
    for n in numbers:
      if i % n == 0:
        sum += i
        break
  return sum

print SumMultiples([3], 10) == 18
print SumMultiples([5], 10) == 5
print SumMultiples([3, 5], 10) == 23
print SumMultiples([3, 5], 1000) == 233168
