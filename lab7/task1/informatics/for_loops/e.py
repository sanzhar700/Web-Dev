a = float(input())
n = int(input())

s = 1
term = 1

for i in range(n):
    term *= a
    s += term

print(s)