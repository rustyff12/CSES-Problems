num = int(input())
result = []

while num != 1:
	result.append(num)
	if num % 2 == 0:
		num //= 2
	else:
		num = num * 3 + 1


result.append(1) 

print(' '.join(map(str, result)))





