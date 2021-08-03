lista=['Avelino', 'MG', 31, 988568798, 1, 'Dafne', 'SP', 11, 945864587, 2, 'Sasha', 'RJ', 21, 987456598, 3, 'Andra', 'MA', 91, 956846598, 4, 'Grace', 'RJ', 21, 985468589, 1, 'Inara', 'SP', 11, 984565896, 2, 'Nelia', 'MG', 31, 986584563, 3, 'Benicio', 'BA', 81, 945685412, 1, 'Luca', 'RJ', 21, 985654589, 2, 'Joyce', 'RS', 51, 956584563, 5]

for i in range(10):
    nome = input("Nome: ")
    lista.append(nome)
    estado = input("Estado: ")
    lista.append(estado)
    ddd = int(input("DDD: "))
    lista.append(ddd)
    celular = int(input("Celular: "))
    lista.append(celular)
    produto = int(input("Produto: "))
    lista.append(produto)

# print(lista)