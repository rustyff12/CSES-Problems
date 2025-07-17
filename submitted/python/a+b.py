def sum_num(a, b):
	return a + b


def main():
    n1, n2 = map(int, input().split())
    result = sum_num(n1, n2)
    print(result)

if __name__=="__main__":
	main()