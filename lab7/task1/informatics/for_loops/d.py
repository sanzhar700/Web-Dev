import math

n = int(input())
k = int(input())

print(math.factorial(n) // (math.factorial(k) * math.factorial(n-k)))