def genCombination(expectVal: int, expectStr: str = None) -> str:
    """
    Ищет комбинацию строки, где ее математический результат будет равен ожидаемому значению.

                Параметры:
                    expectVal (int): ожидаемое значение
                    expectStr (str): ожидаемая часть строки 
                        (например для получения результата существует несколько комбинаций, но необходимо, 
                        чтобы строка содержала (3+2) или (3-2)))
            Возвращаемое значение:
                    mayCombos (list[str]): массив комбинций, удовлетворяющих условию

    """
    import itertools

    digits: list[int] = list(range(9, -1, -1))
    ops: list[str] = ['+', '-', '']
    combos: list[str] = itertools.product(ops, repeat = 9)

    mayCombos = []

    for combo in combos:
        # Склеиваем цифры и операции в строку
        expr = "".join(str(d) + o for d, o in zip(digits, combo)) + "0"
        # Вычисляем значение выражения
        value: int = eval(expr)
        # Если значение равно ожидаемому, выводим выражение и останавливаем цикл
        if value == expectVal:
            if expectStr == None or expectStr in expr:
                mayCombos.append(f'{expr} = {value}')

    return mayCombos

