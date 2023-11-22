insert into Localidades (CodLocalidades, Nombre, FechaFundacion) values (1, 'Deheza', '2022-5-7'); 
insert into Localidades (CodLocalidades, Nombre, FechaFundacion) values (2, 'Cabrera', '2019-12-20'); 
insert into Localidades (CodLocalidades, Nombre, FechaFundacion) values (3, 'Cordoba', '2022-3-31'); 
insert into Localidades (CodLocalidades, Nombre, FechaFundacion) values (4, 'San juan', '2019-3-8'); 
insert into Localidades (CodLocalidades, Nombre, FechaFundacion) values (5, 'Colonia Caroya', '2022-7-8'); 
insert into Localidades (CodLocalidades, Nombre, FechaFundacion) values (6, 'Carlos Paz', '2021-7-11'); 
insert into Localidades (CodLocalidades, Nombre, FechaFundacion) values (7, 'Chucul', '2021-5-31'); 
insert into Localidades (CodLocalidades, Nombre, FechaFundacion) values (8, 'Embalse', '2020-1-3'); 
insert into Localidades (CodLocalidades, Nombre, FechaFundacion) values (9, 'Dalmacio', '2022-12-7'); 
insert into Localidades (CodLocalidades, Nombre, FechaFundacion) values (10, 'Achiras', '2021-9-6');

INSERT INTO Sucursales (CodSucursal,Nombre,InicioActividad,CodLocalidad) VALUES (1,'Sucursal Avellaneda','1999-12-20',1);
INSERT INTO Sucursales (CodSucursal,Nombre,InicioActividad,CodLocalidad) VALUES (2,'Sucursal San Martín','1999-12-20',2);
INSERT INTO Sucursales (CodSucursal,Nombre,InicioActividad,CodLocalidad) VALUES (3,'Sucursal San Justo','1999-12-20',3);
INSERT INTO Sucursales (CodSucursal,Nombre,InicioActividad,CodLocalidad) VALUES (4,'Sucursal Jacksonville','1999-12-20',4);
INSERT INTO Sucursales (CodSucursal,Nombre,InicioActividad,CodLocalidad) VALUES (5,'Sucursal Córdoba','1999-12-20',5);
INSERT INTO Sucursales (CodSucursal,Nombre,InicioActividad,CodLocalidad) VALUES (6,'Sucursal París','1999-12-20',6);
INSERT INTO Sucursales (CodSucursal,Nombre,InicioActividad,CodLocalidad) VALUES (7,'Sucursal Rumania','1999-12-20',7);
INSERT INTO Sucursales (CodSucursal,Nombre,InicioActividad,CodLocalidad) VALUES (8,'Sucursal Letonia','1999-12-20',8);
INSERT INTO Sucursales (CodSucursal,Nombre,InicioActividad,CodLocalidad) VALUES (9,'Sucursal Mendoza','1999-12-20',9);
INSERT INTO Sucursales (CodSucursal,Nombre,InicioActividad,CodLocalidad) VALUES (10,'Sucursal Springfield','1999-12-20',10);

INSERT INTO Clientes (CodigoCliente, Nombre, Apellido, Telefono, FechaNacimiento) VALUES (1, 'Jose', 'Lopez', '351345346', '1980-10-01');
INSERT INTO Clientes (CodigoCliente, Nombre, Apellido, Telefono, FechaNacimiento) VALUES (2, 'Nahuel', 'Figueroa', '351356783', '1989-11-03');
INSERT INTO Clientes (CodigoCliente, Nombre, Apellido, Telefono, FechaNacimiento) VALUES (3, 'Tomas', 'Velez', '351478345', '1990-12-12');
INSERT INTO Clientes (CodigoCliente, Nombre, Apellido, Telefono, FechaNacimiento) VALUES (4, 'Agustin', 'Paz', '351993340', '1992-01-30');
INSERT INTO Clientes (CodigoCliente, Nombre, Apellido, Telefono, FechaNacimiento) VALUES (5, 'Dardo', 'Heredia', '351355601', '1991-07-21');

INSERT INTO Clientes (CodigoCliente, Nombre, Apellido, Telefono, FechaNacimiento) VALUES (6, 'Malena', 'Sosa', '351000115', '2001-06-22');
INSERT INTO Clientes (CodigoCliente, Nombre, Apellido, Telefono, FechaNacimiento) VALUES (7, 'Juliana', 'Diaz', '351345346', '1981-10-03');
INSERT INTO Clientes (CodigoCliente, Nombre, Apellido, Telefono, FechaNacimiento) VALUES (8, 'Alma', 'Perez', '351356783', '1987-11-03');
INSERT INTO Clientes (CodigoCliente, Nombre, Apellido, Telefono, FechaNacimiento) VALUES (9, 'Mariana', 'Gomez', '351478345', '1990-12-19');
INSERT INTO Clientes (CodigoCliente, Nombre, Apellido, Telefono, FechaNacimiento) VALUES (10, 'Maria', 'Fernandez', '351993340', '1992-01-04');

INSERT INTO Cuentas (IdCuenta, FechaAlta, Saldo, TipoCuenta, CodigoCliente) VALUES (1, '2023-04-30', 1000, 'Cuenta Corriente', 4);
INSERT INTO Cuentas (IdCuenta, FechaAlta, Saldo, TipoCuenta, CodigoCliente) VALUES (2, '1993-11-28', 630458, 'Caja de Ahorro en Pesos', 1);
INSERT INTO Cuentas (IdCuenta, FechaAlta, Saldo, TipoCuenta, CodigoCliente) VALUES (3, '2007-06-17', 34275, 'Caja de Ahorro en Dolares', 7);
INSERT INTO Cuentas (IdCuenta, FechaAlta, Saldo, TipoCuenta, CodigoCliente) VALUES (4, '1974-09-14', 324785, 'Cuenta de la seguridad social', 9);
INSERT INTO Cuentas (IdCuenta, FechaAlta, Saldo, TipoCuenta, CodigoCliente) VALUES (5, '2021-04-13', 32475, 'Cuenta Corriente', 2);
INSERT INTO Cuentas (IdCuenta, FechaAlta, Saldo, TipoCuenta, CodigoCliente) VALUES (6, '2009-01-01', 9546783, 'Caja de Ahorro en Pesos', 3);
INSERT INTO Cuentas (IdCuenta, FechaAlta, Saldo, TipoCuenta, CodigoCliente) VALUES (7, '1983-04-25', 32197546, 'Cuenta Corriente', 5);
INSERT INTO Cuentas (IdCuenta, FechaAlta, Saldo, TipoCuenta, CodigoCliente) VALUES (8, '1994-08-16', 349567, 'Caja de Ahorro en Pesos', 10);
INSERT INTO Cuentas (IdCuenta, FechaAlta, Saldo, TipoCuenta, CodigoCliente) VALUES (9, '2018-07-19', 38495, 'Cuenta de la seguridad social', 6);
INSERT INTO Cuentas (IdCuenta, FechaAlta, Saldo, TipoCuenta, CodigoCliente) VALUES (10, '2015-12-22', 324869, 'Caja de Ahorro en Pesos', 8);

INSERT INTO Boletas (NroBoleta, Monto, FechaOperacion, Descripcion, IdCuenta, CodSucursal, TipoMovimiento)
VALUES (1, 75.60, '2023-05-30', 'Compra de alimentos', 1, 1, 'Compra');

INSERT INTO Boletas (NroBoleta, Monto, FechaOperacion, Descripcion, IdCuenta, CodSucursal, TipoMovimiento)
VALUES (2, 200.00, '2023-05-29', 'Pago de factura', 2, 2, 'Pago');

INSERT INTO Boletas (NroBoleta, Monto, FechaOperacion, Descripcion, IdCuenta, CodSucursal, TipoMovimiento)
VALUES (3, 50.75, '2023-05-28', 'Retiro de efectivo', 3, 3, 'Retiro');

INSERT INTO Boletas (NroBoleta, Monto, FechaOperacion, Descripcion, IdCuenta, CodSucursal, TipoMovimiento)
VALUES (4, 120.30, '2023-05-27', 'Compra de ropa', 4, 4, 'Compra');

INSERT INTO Boletas (NroBoleta, Monto, FechaOperacion, Descripcion, IdCuenta, CodSucursal, TipoMovimiento)
VALUES (5, 80.90, '2023-05-26', 'Pago de préstamo', 5, 5, 'Pago');

INSERT INTO Boletas (NroBoleta, Monto, FechaOperacion, Descripcion, IdCuenta, CodSucursal, TipoMovimiento)
VALUES (6, 35.50, '2023-05-25', 'Compra de libros', 6, 6, 'Compra');

INSERT INTO Boletas (NroBoleta, Monto, FechaOperacion, Descripcion, IdCuenta, CodSucursal, TipoMovimiento)
VALUES (7, 90.20, '2023-05-24', 'Pago de servicios públicos', 7, 7, 'Pago');

INSERT INTO Boletas (NroBoleta, Monto, FechaOperacion, Descripcion, IdCuenta, CodSucursal, TipoMovimiento)
VALUES (8, 60.75, '2023-05-23', 'Retiro de efectivo', 8, 8, 'Retiro');

INSERT INTO Boletas (NroBoleta, Monto, FechaOperacion, Descripcion, IdCuenta, CodSucursal, TipoMovimiento)
VALUES (9, 150.00, '2023-05-22', 'Compra de electrónicos', 9, 9, 'Compra');

INSERT INTO Boletas (NroBoleta, Monto, FechaOperacion, Descripcion, IdCuenta, CodSucursal, TipoMovimiento)
VALUES (10, 45.50, '2023-05-21', 'Pago de tarjeta de crédito', 10, 10, 'Pago');
