def two_knights(num):

	for i in range(1, num + 1):
		if i == 1:
			print(0)
			continue

		total_combinations = int((i * i * (i * i - 1) / 2))
		attcking_moves = int(4 * (i - 1) * (i - 2))
		print(total_combinations - attcking_moves)
		
		
	
	return "Finished"


print(two_knights(8))