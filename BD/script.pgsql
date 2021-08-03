create table autor(
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