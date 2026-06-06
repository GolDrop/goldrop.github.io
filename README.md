# Goldrop

Web estatica para vender camisetas del mundial, con catalogo, carrito, cuenta de cliente,
pedidos por WhatsApp, facturas descargables y panel admin con Firebase.

## Publicar gratis en GitHub Pages

1. Sube esta carpeta a un repositorio de GitHub.
2. En GitHub, entra al repositorio y ve a `Settings > Pages`.
3. En `Build and deployment`, selecciona `Deploy from a branch`.
4. Rama: `main` o `master`.
5. Carpeta: `/ (root)`.
6. Pulsa `Save`.
7. La web quedara en una URL tipo:

```txt
https://TU_USUARIO.github.io/NOMBRE_DEL_REPOSITORIO/
```

El archivo `.nojekyll` esta incluido para que GitHub Pages sirva la web tal cual, sin procesarla
con Jekyll.

## Importante sobre emails

GitHub Pages solo sirve archivos estaticos. No ejecuta funciones backend, por eso la web ya no
usa Netlify Forms, Netlify Functions, Stripe ni Resend desde el frontend.

Los pedidos se guardan en Firebase Firestore y se abren por WhatsApp con el resumen del pedido.
Si mas adelante quieres enviar correos automaticos reales al cliente, necesitas un backend externo,
por ejemplo Firebase Cloud Functions, EmailJS, Formspree o volver a Netlify Functions. No pongas
claves privadas como `re_...` o `sk_...` dentro de `index.html`, `script.js` o `firebase-config.js`.

## Firebase

La web usa Firebase para:

- registro e inicio de sesion;
- inicio con Google;
- verificacion de email;
- guardar datos de cliente;
- guardar pedidos;
- panel admin y estados de pedidos.

Configura [firebase-config.js](firebase-config.js):

```js
window.GOLDROP_FIREBASE_CONFIG = {
  apiKey: "TU_API_KEY",
  authDomain: "TU_PROYECTO.firebaseapp.com",
  projectId: "TU_PROYECTO",
  storageBucket: "TU_PROYECTO.appspot.com",
  messagingSenderId: "TU_SENDER_ID",
  appId: "TU_APP_ID",
};

window.GOLDROP_ADMIN_EMAILS = ["goaldrop@hotmail.com"];
```

En Firebase Console:

1. Activa `Authentication > Sign-in method > Email/Password`.
2. Activa `Authentication > Sign-in method > Google`.
3. En `Authentication > Settings > Authorized domains`, anade:

```txt
TU_USUARIO.github.io
```

Si usas dominio propio, anade tambien ese dominio.

4. Activa Cloud Firestore.
5. En `Firestore Database > Rules`, pega las reglas de [firestore.rules](firestore.rules).

El email se verifica con el sistema oficial de Firebase Auth: Firebase envia un enlace al correo
del usuario. El usuario pulsa el enlace y despues vuelve a la web.

## Flujo del pedido

1. El cliente inicia sesion y verifica su email.
2. Anade camisetas al carrito.
3. Introduce datos de envio.
4. Pulsa `Enviar pedido por WhatsApp`.
5. La web guarda el pedido en Firestore.
6. Se abre WhatsApp con el resumen del pedido para confirmar manualmente.

Si Firebase falla, no se abre WhatsApp: asi evitas pedidos que no aparezcan en el panel admin.

## Panel admin

El boton `Gestionar pedidos` solo aparece si el correo de la cuenta esta en
`window.GOLDROP_ADMIN_EMAILS`.

Desde el panel admin puedes:

- ver pedidos por categoria;
- buscar por pedido, cliente, email o telefono;
- cambiar estado del pedido;
- cambiar estado de confirmacion;
- descargar factura;
- exportar CSV;
- eliminar pedidos.

## Resetear pedidos de prueba

1. En Firebase Console, ve a `Firestore Database > orders` y elimina los documentos de prueba.
2. En tu navegador, abre la consola en la web y ejecuta:

```js
localStorage.removeItem("goldropOrders");
location.reload();
```

## Fotos de camisetas

Pon las fotos en:

```txt
assets/products/
```

Cada camiseta puede tener frontal y trasera:

- Frontal: `id.jpg`
- Trasera: `id2.jpg`

Ejemplo:

```txt
usa-local.jpg
usa-local2.jpg
```

La web tambien intenta cargar `.jpeg`, `.png`, `.webp` y variantes comunes sin guion.

Nombres principales:

```txt
usa-local.jpg
uruguay-local.jpg
uruguay-visitante.jpg
turquia-local.jpg
noruega-local.jpg
mexico-local.jpg
mexico-visitante.jpg
portugal-local.jpg
portugal-visitante.jpg
japon-local.jpg
japon-visitante.jpg
italia-local.jpg
italia-visitante.jpg
inglaterra-local.jpg
inglaterra-visitante.jpg
francia-local.jpg
colombia-local.jpg
colombia-visitante.jpg
argentina-local.jpg
argentina-visitante.jpg
alemania-local.jpg
alemania-visitante.jpg
brasil-local.jpg
brasil-visitante.jpg
marruecos-local.jpg
marruecos-visitante.jpg
espana-local.jpg
espana-visitante.jpg
españa-local.jpg
españa-visitante.jpg
```

Para las traseras, usa el mismo nombre con `2` antes de la extension.
