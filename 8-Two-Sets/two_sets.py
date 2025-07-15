

def ptrint_possible_sets(num):
	for i in range(1, num + 1):
		if i % 4 == 0 or i % 4 == 3:
			print(f"{i}: YES")
		else:
			print(f"{i}: NO")
	return True

def two_sets(num):
	if num % 4 == 0 or num % 4 == 3:
		num_list_1 = []
		num_list_2 = []
		for i in range(num, 0, -1):
			if sum(num_list_1) <= sum(num_list_2):
				num_list_1.append(i)
			else:
				num_list_2.append(i)
				
		print(f"Sum of list 1: {sum(num_list_1)}\nSum of list 2: {sum(num_list_2)}")
		return f"List 1: {num_list_1} list 2: {num_list_2}"
	else:
		return "NO"

print(two_sets(12))
print(two_sets(7))
print(two_sets(6))
print(two_sets(4))


