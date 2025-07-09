test_1 = 5;
test_2 = 3;
test_3 = 4;
test_4 = 1;
test_5 = 2;



def permutations(n):
	if n == 1:
		return [1]
	if n < 4:
		return "NO SOLUTION"
	
	odds = []
	evens = []

	for i in range(n):
		if i % 2 == 0:
			evens.append(i + 1)
		else:
			odds.append(i + 1)
	return odds + evens


print(permutations(test_1)) # [2, 4, 1, 3, 5] 
print(permutations(test_2)) # NO SOLUTION
print(permutations(test_3)) # [2, 4, 1, 3]
print(permutations(test_4)) # [1]
print(permutations(test_5)) # NO SOLUTION