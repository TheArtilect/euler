'''


If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

Find the sum of all the multiples of 3 or 5 below 1000.

'''

def total(div, amount):
    sum = 0
    for x in range(1, amount + 1):
        sum += div * x
    return sum

def multiples(n):
    limit = n - 1
    three = (limit / 3)
    five = (limit / 5)
    fifteen = (limit / 15)
    return total(3, three) + total(5, five) -  total(15, fifteen)

print multiples(10)
