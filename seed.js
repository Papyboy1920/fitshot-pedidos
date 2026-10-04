// ============================================================
// CATÁLOGO SEMILLA — FitShot by Dana (demo)
// Precios REALES en US$ del menú que la dueña envió por WhatsApp
// (04-oct-2026): jugos 8oz $7 / 12oz $10, shots 2oz $4 (mínimo 7),
// paquete semanal (7 shots) $28, combo de la semana $53,
// flor de jamaica 1L $15, electrolitos 8oz $7, yogur natural 1L
// $20, queso artesanal $10/libra.
// NOTA: el flyer nombra categorías por momento ("para comenzar tu
// mañana", "algo verde", "día activo") pero no nombra sabores
// individuales — NO se inventan sabores. Los jugos se ofrecen por
// tamaño y el cliente elige el momento en la nota del pedido.
// La dueña confirma precios finales en /tienda → Catálogo.
// ============================================================

// v1 (04-oct-2026): catálogo inicial desde el menú real de la dueña.
// Fotos recortadas de sus propios flyers (cero repeticiones entre
// tipos de producto).
const CATALOG_VERSION = 1;

const SEED_CATALOG = {
  departments: [
    {
      id: "jugos",
      name: "Jugos",
      icon: "🧃",
      img: "img/jugo-8oz.jpg",
      categories: [
        {
          id: "jugos-naturales",
          name: "Naturales",
          items: [
            { id: "jugo-8oz", img: "img/jugo-8oz.jpg", name: "Jugo Natural 8 oz", price: 7.00, unit: "vaso", active: true, desc: "Elige tu momento: para comenzar tu mañana, algo verde, o remolacha para tu día activo." },
            { id: "jugo-12oz", img: "img/jugo-12oz.jpg", name: "Jugo Natural 12 oz", price: 10.00, unit: "botella", active: true, desc: "Elige tu momento: para comenzar tu mañana, algo verde, o remolacha para tu día activo." }
          ]
        }
      ]
    },
    {
      id: "shots",
      name: "Shots",
      icon: "⚡",
      img: "img/shot-2oz.jpg",
      categories: [
        {
          id: "shots-detox",
          name: "Detox",
          items: [
            { id: "shot-2oz", img: "img/shot-2oz.jpg", name: "Shot 2 oz", price: 4.00, unit: "shot", active: true, desc: "Shot natural de 2 oz para energía y equilibrio. Compra mínima: 7 shots." }
          ]
        }
      ]
    },
    {
      id: "paquetes",
      name: "Paquetes",
      icon: "📦",
      img: "img/combo-semana.jpg",
      categories: [
        {
          id: "paquetes-semanales",
          name: "Para tu semana",
          items: [
            { id: "paquete-semanal", img: "img/paquete-semanal.jpg", name: "Paquete Semanal (7 shots 2 oz)", price: 28.00, unit: "paquete", active: true, desc: "7 shots de 2 oz para toda tu semana. Elige las variedades en la nota del pedido." },
            { id: "combo-semana", img: "img/combo-semana.jpg", name: "Combo de la Semana (7 shots + 1 lb queso artesanal + 1 yogur natural)", price: 53.00, unit: "combo", active: true, tag: "⭐ Combo", desc: "El combo de la semana: 7 shots de 2 oz, 1 libra de queso artesanal y 1 yogur natural. Elige, combina y disfruta." }
          ]
        }
      ]
    },
    {
      id: "extras",
      name: "Extras",
      icon: "🌿",
      img: "img/jamaica.jpg",
      categories: [
        {
          id: "extras-frescos",
          name: "Frescos y cremosos",
          items: [
            { id: "jamaica-1l", img: "img/jamaica.jpg", name: "Flor de Jamaica 1 litro", price: 15.00, unit: "litro", active: true, desc: "Agua de flor de jamaica natural, 1 litro. Para refrescarte a tu ritmo." },
            { id: "electrolitos-8oz", img: "img/electrolitos.jpg", name: "Electrolitos 8 oz", price: 7.00, unit: "vaso", active: true, desc: "Bebida de electrolitos de 8 oz. Fresca para disfrutar a tu ritmo." },
            { id: "yogur-1l", img: "img/yogur.jpg", name: "Yogur Natural 1 litro", price: 20.00, unit: "litro", active: true, desc: "Yogur natural cremoso de 1 litro. Para tu desayuno o merienda." },
            { id: "queso-1lb", img: "img/queso.jpg", name: "Queso Artesanal (1 libra)", price: 10.00, unit: "libra", active: true, desc: "Queso artesanal Casa Mima. Único ingrediente: leche. Sin conservantes." }
          ]
        }
      ]
    }
  ]
};

module.exports = { SEED_CATALOG, CATALOG_VERSION };
