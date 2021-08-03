/*create table autor(
	id int not null generated always as identity,
	nome varchar(15) not null,
	sobrenome varchar(20) not null,
	primary key (id)
)

create table livro(
	id int not null generated always as identity,
	nome varchar(40) not null,
	id_autor int not null,
	id_editora int not null,
	genero varchar(25),
	num_paginas int,
	primary key (id),
	foreign key (id_autor) references autor(id)
)

create table editora(
    id int not null generated always as identity,
    nome varchar(25) not null,
    primary key (id)
)

alter table livro add constraint id_editora
foreign key (id_editora) references editora (id)

insert into autor (nome, sobrenome)
values ('Thiago', 'Lima'), ('Mayara', 'Alves')

insert into editora (nome)
values ('Blue')

select * from editora

insert into livro (nome, id_autor, id_editora, genero, num_paginas)
values ('PostgreSQL', 1, 1, 'Tecnologia', 500)

select * from livro

insert into livro (nome, id_autor, id_editora, genero, num_paginas)
values ('MySQL', 2, 1, 'Tecnologia', 500)

insert into editora (nome)
values ('Red')

insert into livro (nome, id_autor, id_editora, genero, num_paginas)
values ('Oracle', 1, 2, 'Tecnologia', 500)

select * from livro where id_editora = 2*/