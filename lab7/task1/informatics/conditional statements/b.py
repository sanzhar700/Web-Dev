year = int(input())

if(year % 400 == 0) or (year % 4 and year % 100 != 0):
    print("YES")
else:
    print("NO")
