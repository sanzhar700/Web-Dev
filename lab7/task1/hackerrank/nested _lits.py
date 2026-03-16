students = []

n = int(input())

for _ in range(n):
    name = input()
    score = float(input())
    students.append([name, score])

# получаем уникальные оценки
scores = sorted(set([s[1] for s in students]))

# вторая минимальная
second_lowest = scores[1]

# собираем имена студентов
names = []

for s in students:
    if s[1] == second_lowest:
        names.append(s[0])

# сортируем имена
names.sort()

for name in names:
    print(name)