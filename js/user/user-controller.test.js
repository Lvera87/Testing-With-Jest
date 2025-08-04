const UserController = require("./user-controller");
const User = require("./user");

const userController = new UserController();

test('add user to userController', () => {    
    let user = new User(1234,"Santiago", "santiago@generation.org");
    userController.add(user);    
    expect(userController.getUsers()).toContain(user);
  });

test('remove user to userController', () => {    
    let user = new User(1234,"Santiago", "santiago@generation.org");
    userController.add(user);    
    userController.remove(user);
    expect(userController.users).not.toContain(user);
  });
//--------------------ojo aca empezamos a probar--------------------
// Tarea 2
// Test para la función add - usuario no está en la lista
test('agregar usuario que no está en la lista de usuarios', function() {
  let user = new User(5678, "Ana", "ana@example.com"); // esta variable se encarga de crear un nuevo usuario
  let initialLength = userController.getUsers().length; // esta variable se encarga de guardar la cantidad de usuarios antes de agregar el nuevo
  userController.add(user);
  expect(userController.getUsers().length).toBe(initialLength + 1);
  expect(userController.getUsers()).toContain(user);
});

// Test para la función remove - usuario no esta en la lista
test('eliminar usuario que no está en la lista de usuarios', function() {
  let user = new User(9999, "Pedro", "pedro@example.com");
  let initialUsers = [...userController.getUsers()];
  userController.remove(user);
  expect(userController.getUsers()).toEqual(initialUsers);
});

// Test para la funcion findByEmail - email existe
test('findByEmail retorna el usuario cuando el email existe', function() {
  let user = new User(1111, "Maria", "maria@test.com");
  userController.add(user);
  let foundUser = userController.findByEmail("maria@test.com");
  expect(foundUser).toBe(user);
});

// Test para la funcion  de buscar por email - que no existe
test('findByEmail retorna undefined cuando el email no existe', function() {
  let foundUser = userController.findByEmail("nonexistent@test.com");
  expect(foundUser).toBeUndefined();
});

// Test para la funcion de buscar por id
test('findById retorna el usuario cuando el id existe', function() {
  let user = new User(2222, "Carlos", "carlos@test.com");
  userController.add(user);
  let foundUser = userController.findById(2222);
  expect(foundUser).toBe(user);
});

// Test para la funcion de buscar por id - id no existe
test('findById retorna undefined cuando el id no existe', function() {
  let foundUser = userController.findById(9999);
  expect(foundUser).toBeUndefined();
});

