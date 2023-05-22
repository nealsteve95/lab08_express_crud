conn = new Mongo();
db = conn.getDB("myappdb");

db.productos.insert(
  [
   {nombre: 'Mochila', tipo: 'Escolar', precio: 100, descripcion:'De cuero', created_at: new Date('01/23/2020')}
 ]);

conn = new Mongo();
db = conn.getDB("myappdb");

db.usuarios.insert(
  [
   {nombre: 'Jaime', apellido: 'Farfan', email: 'jfarfan@abc.com', estado:'A', created_at: new Date('01/23/2020')}
 ]);

conn = new Mongo();
db = conn.getDB("myappdb");

db.empleados.insert(
  [
   {nombre: 'Jaime', apellido: 'Farfan', correo: 'jfarfan@abc.com', fecha_nacimiento:'21/06/2001',sexo: 'Masculino', edad: 24}
 ]);

