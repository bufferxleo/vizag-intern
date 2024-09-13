-- crud operations
create

create table

const query = `CREATE TABLE elios (
  name TEXT,
  age INTEGER,
  city TEXT,
  position TEXT
);`;
client.query(query)
  .then(() => {
    console.log('Table created successfully');
  })
  .catch((err) => {
    console.error('Error occurred', err.stack);
  })
  .finally(() => {
    client.end();
    console.log("Finally block executed");
  });

create rows

const query= `INSERT INTO elios (name, age, city, position) values
('random', 25, 'Rome', 'Software Engineer'),
('randome2',23,'vsk','dev')`
client.query(query)
  .then(() => {
    console.log('elements inserted successfully');
  })
  .catch((err) => {
    console.error('Error occurred', err.stack);
  })
  .finally(() => {
    client.end();
    console.log("Finally block executed");
  });

create columns

const query = `
ALTER TABLE elios
ADD COLUMN intern boolean;
`;

client.query(query)
.then(() => {console.log('column added sucessfully')})
.catch((err)=>{console.log('error occ',err.stack)})
.finally(()=>{client.end();console.log('finally block excecuted')})

READ
read a table

const query = `select * from elios`;
client.query(query)
  .then((result) => {
    console.log(result.rows);
    console.log('table read successfully');
  })
  .catch((err) => {
    console.log('error occurred', err.stack);
  })
  .finally(() => {
    client.end();
    console.log('finally block executed');
  });

read subset of table

const query = `select name from elios`;
client.query(query)
  .then((result) => {
    console.log(result.rows);
    console.log('table read successfully');
  })
  .catch((err) => {
    console.log('error occurred', err.stack);
  })
  .finally(() => {
    client.end();
    console.log('finally block executed');
  });

update

const query = 'UPDATE elios SET position = $1 WHERE name = $2';
const values = ['senior', 'random'];
client.query(query,values)
.then(() => {console.log('updated')})
.catch((err)=>{console.log('error occurred', err.stack)})
.finally(()=>{client.end();})

delete
const query = `DROP TABLE IF EXISTS elios`;
client.query(query)
  .then(() => {
    console.log('Table dropped successfully');
  })
  .catch((err) => {
    console.error('Error occurred', err.stack);
  })
  .finally(() => {
    client.end();
    console.log("Finally block executed");
  });
