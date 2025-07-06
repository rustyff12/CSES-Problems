test_1 = "ATTCGGGA";

def max_repetitions(str):
	if len(str) == 0:
		return 0
	elif len(str) == 1:
		return 1
	
	max_length = 1
	current_length = 1
	
	current_char = str[0]

	for char in str[1:]:
		if char == current_char:
			current_length += 1
			if current_length > max_length:
				max_length = current_length
		else:
			current_char = char
			current_length = 1 
		
	return max_length
        

print(max_repetitions(test_1))