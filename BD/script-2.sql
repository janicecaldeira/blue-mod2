create table vendedor(
	id int not null generated always as identity,
    nome varchar(20) not null,
    regiao varchar(15),
    primary key (id)
)

create table cliente(
	id int not null generated always as identity,
	nome varchar(20) not null,
	estado varchar(2) not null,
	primary key (id)
)

create table produto(
	id int not null generated always as identity,
	nome varchar(50) not null,
	quantidade int not null,
	valor real not null,
	id_cliente int not null,
	id_vendedor int not null,
	primary key (id),
	foreign key (id_cliente) references cliente(id),
	foreign key (id_vendedor) references vendedor(id)
)

insert into cliente(nome, estado)
values('Avelino', 'MG'), ('Dafne', 'SP'), ('Sasha', 'RJ'), ('Andra', 'MA'), ('Grace', 'PA'), ('Inara', 'RS'), ('Nelia', 'MG'), ('Benicio', 'BA'), ('Luca', 'PB'), ('Joyce', 'SC')


ALTER TABLE cliente ADD nome_produto VARCHAR(50)

UPDATE cliente SET nome_produto = 'abacate' WHERE id = 1
UPDATE cliente SET nome_produto = 'abacaxi' WHERE id = 2
UPDATE cliente SET nome_produto = 'banana' WHERE id = 3
UPDATE cliente SET nome_produto = 'figo' WHERE id = 4
UPDATE cliente SET nome_produto = 'goiaba' WHERE id = 5
UPDATE cliente SET nome_produto = 'limao' WHERE id = 6
UPDATE cliente SET nome_produto = 'laranja' WHERE id = 7
UPDATE cliente SET nome_produto = 'melancia' WHERE id = 8
UPDATE cliente SET nome_produto = 'melao' WHERE id = 9
UPDATE cliente SET nome_produto = 'uva' WHERE id = 10

insert into vendedor(nome, regiao)
values('Angel', 'Norte'), ('Dagoberto', 'Norte'), ('Sheila', 'Nordeste'), ('Andre', 'Nordeste'), ('Carlos', 'Sul'), ('Maria', 'Sul'), ('Gloria', 'Sudeste'), ('Pedro', 'Sudeste'), ('Lumena', 'Centro Oeste'), ('Jaqueline', 'Centro Oeste')

select * from produto

insert into produto(nome, quantidade, valor, id_cliente, id_vendedor)
values('abacate', 10, 10, 1, 8), ('abacaxi', 10, 10, 2, 7), ('banana', 10, 10, 3, 8), ('figo', 10, 10, 4, 3), ('goiaba', 10, 10, 5, 1), ('limao', 10, 10, 6, 5), ('laranja', 10, 10, 7, 7), ('melancia', 10, 10, 8, 4), ('melao', 10, 10, 9, 3), ('uva', 10, 10, 10, 6)

select produto.nome, produto.valor, cliente.nome, vendedor.nome
from produto
inner join cliente
on livro.id_editora = editora.id
inner join autor
on livro.id_autor = autor.id