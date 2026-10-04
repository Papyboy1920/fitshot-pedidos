# 🥤 FitShot by Dana — Pedidos (demo)

Sistema de pedidos para **FitShot by Dana** — jugos naturales y shots
detox (Miami, FL). La dueña hoy toma pedidos solo por WhatsApp, sin canal
de pedido directo propio.

- App de clientes (`/`) — tema verde/amarillo/crema de la marca, precios
  grandes y legibles, español, US$.
- Pantalla de tienda (`/tienda`) — fondo negro, protegida con `STORE_KEY`:
  pipeline nuevo → preparando → listo → entregado, sonido de pedido nuevo,
  editor de catálogo/precios, pestaña Historial (filtros por fecha y estado,
  conteo de pedidos, total de ingresos, confirmación de cancelación).

## Precios semilla

Precios REALES en US$ tomados del menú que la dueña envió por WhatsApp
(04-oct-2026): jugos 8oz $7 / 12oz $10, shots 2oz $4 (mínimo 7), paquete
semanal $28, combo de la semana $53, jamaica 1L $15, electrolitos $7,
yogur natural 1L $20, queso artesanal $10/libra. La dueña confirma los
precios finales en la pestaña Catálogo de `/tienda`.

## Despliegue (Render)

1. Render → **New → Blueprint**
2. Conectar el repo `Papyboy1920/fitshot-pedidos`
3. **Apply** y esperar el despliegue
4. Copiar la clave generada de `STORE_KEY` (Render → Environment)
5. Pegarla en `/tienda` y hacer un pedido de prueba

## Demo local

```bash
npm install
STORE_KEY=prueba node server.js
# http://localhost:3000/        (clientes)
# http://localhost:3000/tienda  (tienda)
```

**Nota:** usa SQLite en disco efímero — solo para demo/arranque.
Un lanzamiento real necesita Postgres pago.
