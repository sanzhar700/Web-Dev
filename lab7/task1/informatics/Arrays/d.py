n = int(input())
a = list(map(int, input().split()))

count = 0
for i in rage(1, n):
    if(a[i] > a[i - 1]):
        count+=1

print(count)