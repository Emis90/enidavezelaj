CREATE TABLE enida (id INT PRIMARY KEY, name VARCHAR(10), lastname VARCHAR(10), work VARCHAR(10), )
INSERT INTO enida VALUES (1, 'Enida', 'Vezelaj', 'Bloomberg')
DROP TABLE enida



SELECT * FROM enida 
WHERE id = 1


ALTER TABLE students
DROP grade




SELECT name AS first_name, age FROM students
WHERE (age = 20 OR age = 30) AND name LIKE 'An%' 


SELECT * FROM fellows
WHERE level IS NOT NULL


SELECT name, age FROM fellows
ORDER BY age ASC


select age, name from students
order by age desc


select id, age, name from students
where age between 25 and 35 limit 3


select students.name, fellows.name from students 
cross join fellows 
--will give for each student the fellow name>> paola - marcus/ paola-mia/ paola-paul ....


SELECT fellows.name, students.name FROM students 
right join fellows ON students.name = fellows.name;

SELECT name,
CASE 
WHEN (age > 30) THEN 'old'
ELSE 'young'
END AS virtualAge
FROM students
ORDER BY age ASC

YOU CAN DO LIMIT (number) 

SELECT name from students
union
SELECT name from fellows

select firstname, surname, joindate
from cd.members
where joindate = (select max(joindate) from cd.members)



-------------------------------------------------------------------
create table students(
 id serial,
 name varchar(10),
 last_name varchar(10),
 school varchar(20) default 'Fullstack Academy',
 f_id int,
 primary key(id)
);

create table fellows(
 id serial,
 full_name varchar(20),
 school varchar(20) default 'Fullstack Academy',
 primary key(id) references students(id) on delete set null
);

insert into students(name, last_name) values 
('Enida', 'V'),
('Michael', 'R'),
('Stephen', 'B'),
('Paola', 'M');

insert into students(name, school) values
('Josh', 'App Academy');


update students set last_name = 'L' where name = 'Josh';

alter table fellows add age int;
insert into fellows(full_name, age)values
('Mike P', 30),
('Sasha K', 29),
('Susy HP', 32);
('Donna W', 36);

update fellows set school = 'App Academy' where full_name like 'S%';
-----------------------------------------------------------------------