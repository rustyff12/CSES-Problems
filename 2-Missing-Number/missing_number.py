test1 = [2, 3, 1, 5];

def missing_number(num_list, num):
	return sum([x + 1 for x in range(num)]) -   sum(num_list)


print(missing_number(test1, 5))