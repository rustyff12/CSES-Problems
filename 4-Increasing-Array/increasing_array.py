test_1 = [3, 2, 5, 1, 7];
test_2 = [1, 2, 4, 6, 4, 2];
test_3 = [1, 2, 4, 6, 7, 8];


def increasing_array(num_list):
	count = 0
	i = 0
	for _ in num_list:
		if i > 0:
			current = num_list[i]
			prev = num_list[i - 1]
			difference = prev - current
			
			if difference > 0:
				count = count + difference
				num_list[i] = num_list[i] + difference
		
		i += 1

	return count

print(increasing_array(test_1)) # 5
print(increasing_array(test_2)) # 6
print(increasing_array(test_3)) # 0