test_1 = 3
test_2 = 4
test_3 = 37

def collatz(num, result = ""):
	if num == 1:
		result = result + f"{int(num)}"
		return result
	
	if num % 2 == 0:
		result = result + f"{int(num)} "
		num = num / 2
		return collatz(num, result)
	else:
		result = result + f"{int(num)} "
		num = (num * 3)  + 1
		return collatz(num, result)


	

print(collatz(test_1)) # 3 10 5 16 8 4 2 1
print(collatz(test_2)) # 4 2 1
print(collatz(test_3)) # 37 112 56 28 14 7 22 11 34 17 52 26 13 40 20 10 5 16 8 4 2 1



