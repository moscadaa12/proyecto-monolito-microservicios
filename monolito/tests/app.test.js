
const request = require('supertest');
const app = require('../src/app');
const pool = require('../src/db');

// Cerrar la conexión a PostgreSQL al finalizar las pruebas
afterAll(async () => {
    await pool.end();
});

// Prueba 1: Verificar el servidor
test('GET /health debe responder correctamente', async () => {
    const response = await request(app).get('/health');

    expect(response.statusCode).toBe(200);
    expect(response.body.estado).toBe('ok');
});

// Prueba 2: Verificar usuarios
test('GET /usuarios debe devolver usuarios', async () => {
    const response = await request(app).get('/usuarios');

    expect(response.statusCode).toBe(200);
    expect(response.body.length).toBeGreaterThan(0);
});

// Prueba 3: Verificar productos
test('GET /productos debe devolver productos', async () => {
    const response = await request(app).get('/productos');

    expect(response.statusCode).toBe(200);
    expect(response.body.length).toBeGreaterThan(0);
});

// Prueba 4: Verificar pedidos
test('GET /pedidos debe devolver pedidos', async () => {
    const response = await request(app).get('/pedidos');

    expect(response.statusCode).toBe(200);
    expect(response.body.length).toBeGreaterThan(0);
});
