
// Scripts para tablas en sqlite

CREATE TABLE IF NOT EXISTS Localidades (
    CodLocalidades INTEGER,
    Nombre VARCHAR(100) NOT NULL,
    FechaFundacion DATE NOT NULL,
    Activo BOOLEAN NOT NULL DEFAULT 1,
    PRIMARY KEY (CodLocalidades AUTOINCREMENT)
);

CREATE TABLE IF NOT EXISTS Clientes (
    CodigoCliente INTEGER,
    Nombre VARCHAR NOT NULL,
    Apellido VARCHAR NOT NULL,
    Telefono NUMBER NOT NULL,
    FechaNacimiento DATE NOT NULL,
    Activo BOOLEAN NOT NULL DEFAULT 1,
    PRIMARY KEY (CodigoCliente AUTOINCREMENT)
);

CREATE TABLE IF NOT EXISTS Sucursales (
    CodSucursal INTEGER PRIMARY KEY AUTOINCREMENT,
    Nombre VARCHAR(100) NOT NULL,
    InicioActividad DATE NOT NULL,
    CodLocalidad INTEGER NOT NULL,
    Activo BOOLEAN NOT NULL DEFAULT 1,
    FOREIGN KEY (CodLocalidad) REFERENCES Localidades (CodLocalidades)
);

CREATE TABLE IF NOT EXISTS Cuentas (
    IdCuenta INTEGER,
    FechaAlta DATE NOT NULL,
    Saldo NUMBER NOT NULL,
    TipoCuenta VARCHAR(100) NOT NULL,
    CodigoCliente INTEGER NOT NULL,
    Activo BOOLEAN NOT NULL DEFAULT 1,
    FOREIGN KEY(CodigoCliente) REFERENCES Clientes(CodigoCliente),
    PRIMARY KEY (IdCuenta AUTOINCREMENT)
); 

CREATE TABLE IF NOT EXISTS Boletas (
    NroBoleta INTEGER, 
    Monto NUMBER NOT NULL,
    FechaOperacion DATE NOT NULL,
    Descripcion VARCHAR(150) NOT NULL,
    IdCuenta INTEGER NOT NULL,
    CodSucursal INTEGER NOT NULL,
    TipoMovimiento VARCHAR(80) NOT NULL,
    Activo BOOLEAN NOT NULL DEFAULT 1,
    FOREIGN KEY (IdCuenta) REFERENCES Cuentas(IdCuenta),
    FOREIGN KEY (CodSucursal) REFERENCES Sucursales(CodSucursal),
    PRIMARY KEY (NroBoleta AUTOINCREMENT)
);

//---------------------------------------------------------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------


// sentencias para tablas en MySQL

CREATE TABLE IF NOT EXISTS Localidades (
    CodLocalidades INTEGER AUTO_INCREMENT,
    Nombre VARCHAR(100) NOT NULL,
    FechaFundacion DATE NOT NULL,
    Activo BOOLEAN NOT NULL DEFAULT 1,
    PRIMARY KEY (CodLocalidades)
);

CREATE TABLE IF NOT EXISTS Clientes (
    CodigoCliente INTEGER AUTO_INCREMENT,
    Nombre VARCHAR(100) NOT NULL,
    Apellido VARCHAR(100) NOT NULL,
    Telefono INT NOT NULL,
    FechaNacimiento DATE NOT NULL,
    Activo BOOLEAN NOT NULL DEFAULT 1,
    PRIMARY KEY (CodigoCliente)
);

CREATE TABLE IF NOT EXISTS Sucursales (
    CodSucursal INTEGER PRIMARY KEY AUTO_INCREMENT,
    Nombre VARCHAR(100) NOT NULL,
    InicioActividad DATE NOT NULL,
    CodLocalidad INTEGER NOT NULL,
    Activo BOOLEAN NOT NULL DEFAULT 1,
    FOREIGN KEY (CodLocalidad) REFERENCES Localidades (CodLocalidades)
);

CREATE TABLE IF NOT EXISTS Cuentas (
    IdCuenta INTEGER AUTO_INCREMENT,
    FechaAlta DATE NOT NULL,
    Saldo DECIMAL(10,2) NOT NULL,
    TipoCuenta VARCHAR(100) NOT NULL,
    CodigoCliente INTEGER NOT NULL,
    Activo BOOLEAN NOT NULL DEFAULT 1,
    FOREIGN KEY(CodigoCliente) REFERENCES Clientes(CodigoCliente),
    PRIMARY KEY (IdCuenta)
); 

CREATE TABLE IF NOT EXISTS Boletas (
    NroBoleta INTEGER AUTO_INCREMENT, 
    Monto DECIMAL(10,2) NOT NULL,
    FechaOperacion DATE NOT NULL,
    Descripcion VARCHAR(150) NOT NULL,
    IdCuenta INTEGER NOT NULL,
    CodSucursal INTEGER NOT NULL,
    TipoMovimiento VARCHAR(80) NOT NULL,
    Activo BOOLEAN NOT NULL DEFAULT 1,
    FOREIGN KEY (IdCuenta) REFERENCES Cuentas(IdCuenta),
    FOREIGN KEY (CodSucursal) REFERENCES Sucursales(CodSucursal),
    PRIMARY KEY (NroBoleta)
);