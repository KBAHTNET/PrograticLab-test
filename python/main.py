from genModule import genCombination

if __name__ == '__main__':
    expectVal: int = int(input('Введите ожидаемое значение: '))
    result = genCombination(expectVal, '3+2')
    if len(result) > 0:
        print(result[0])
    