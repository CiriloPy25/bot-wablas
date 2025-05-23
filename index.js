const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

const mensajeBienvenida = `
👋 *¡Hola, bienvenido/a!*

*Elegí una opción para continuar:*

*A* ➤ Ver servicios disponibles  
*B* ➤ Renovar mi cuenta  
*C* ➤ Hacer un reclamo

✍️ *Escribí la letra de la opción que querés* y te asistimos al instante ✅`;

const formasPago = `
💳 *Formas de Pago:*
(*Giro* 🙅🏻‍♂️ no carga de billetera)

- *Titular:* Cirilo Guillen
- *C.I.:* 5578346
- *Alias:* 5578346

➯ Ueno Bank: 619196233  
➯ Atlas: 1530937  
➯ Banco Familiar: 81-245664  
➯ Mango: 0972302296 - @ciriloguillen  
➯ Tigo Money: 0982832010  
➯ Personal Pay: 0972302296  
➯ Claro: 0992598035  
➯ Eko: 0992598035  
➯ Wally: 0982832010`;

const respuestas = {
  "a": `
*📋 Servicios disponibles:*

➯ *1.* Free Fire  
➯ *2.* Netflix Premium  
➯ *3.* Disney+ Premium  
➯ *4.* Max  
➯ *5.* Prime Video  
➯ *6.* Paramount+  
➯ *7.* Crunchyroll  
➯ *8.* Spotify Premium  
➯ *9.* YouTube Premium  
➯ *10.* FlujoTV  
➯ *11.* FénixTV  
➯ *12.* Ib Player Pro  
➯ *13.* IPTV Smarters  
➯ *14.* Tigo Sports
➯ *15.* Apple TV  
➯ *16.* Apple Music  
➯ *17.* Call of Duty Mobile  
➯ *18.* PUBG Mobile  
➯ *19.* Clash Royale  
➯ *20.* Clash of Clans  
➯ *21.* Roblox  
➯ *22.* 8 Ball Pool  
➯ *23.* Tarjeta Virtual  
➯ *24.* Monedas TikTok

✍️ *Escribí el número del servicio que querés* para ver el precio y formas de pago.`,

  "b": `
🔁 *Renovación de cuenta iniciada*.

📋 *Servicios disponibles para renovar:*

➯ *2.* Netflix Premium  
➯ *3.* Disney+ Premium  
➯ *4.* Max  
➯ *5.* Prime Video  
➯ *6.* Paramount+  
➯ *7.* Crunchyroll  
➯ *8.* Spotify Premium  
➯ *9.* YouTube Premium  
➯ *10.* FlujoTV  
➯ *11.* FénixTV  
➯ *12.* Ib Player Pro  
➯ *13.* IPTV Smarters  
➯ *14.* Tigo Sports  
➯ *15.* Apple TV  
➯ *16.* Apple Music

✍️ *Escribí el número del servicio que querés renovar* para ver el precio y formas de pago.
`,

  "c": `📢 Para reclamos, por favor enviá tu *nombre, apellido y una captura* del problema para ayudarte lo antes posible.`,

  // Desde aquí siguen los códigos del 1 al 24, ya existentes
  "1": `*➯ Diamantes Free Fire:*
- 10.000 Gs : 110
- 25.000 Gs : 341
- 40.000 Gs : 572
- 75.000 Gs : 1155
- 140.000 Gs : 2398
- 325.000 Gs : 6160
- 20.000 Gs : Vip Semanal
- 75.000 Gs : Vip Mensual
- 35.000 Gs : Pase de Nivel
- 20.000 Gs : Pase Booyah${formasPago}`,

  "2": `*➯ Netflix Premium:*
(Acceso por código)
- 1 Dispositivo
- 30.000 Gs : 30 días
- 55.000 Gs : 60 días${formasPago}`,

  "3": `*➯ Disney+ Premium:*
- Incluye Espn
- 1 Dispositivo
- 30.000 Gs : 30 días
- 50.000 Gs : 60 días

- No Incluye Espn
- 1 Dispositivo
- 20.000 Gs : 30 días
- 35.000 Gs : 60 días${formasPago}`,

  "4": `*➯ Max:*
- 1 Dispositivo
- 20.000 Gs : 30 días
- 35.000 Gs : 60 días${formasPago}`,

  "5": `*➯ Prime Video:*
- 1 Dispositivo
- 20.000 Gs : 30 días
- 35.000 Gs : 60 días${formasPago}`,

  "6": `*➯ Paramount:*
- 1 Dispositivo
- 20.000 Gs : 30 días
- 35.000 Gs : 60 días${formasPago}`,

  "7": `*➯ Crunchyroll:*
- 1 Dispositivo
- 15.000 Gs : 30 días
- 25.000 Gs : 60 días${formasPago}`,

  "8": `*➯ Spotify Premium:*
- 25.000 Gs : 30 días
- 45.000 Gs : 60 días${formasPago}`,

  "9": `*➯ YouTube Premium:*
- 20.000 Gs : 30 días
- 35.000 Gs : 60 días${formasPago}`,

  "10": `*➯ FlujoTv Compartido:*
- 1 Dispositivo
- 30.000 Gs : 30 días
- 50.000 Gs : 60 días

*➯ FlujoTv Privado:*
- 3 Dispositivo
- 60.000 Gs : 30 días
- 100.000 Gs : 60 días${formasPago}`,

  "11": `*➯ FénixTv Compartido:*
- 1 Dispositivo
- 15.000 Gs : 30 días
- 25.000 Gs : 60 días

*➯ FénixTv Privado:*
- 3 Dispositivo
- 25.000 Gs : 30 días
- 45.000 Gs : 60 días${formasPago}`,

  "12": `*➯ Ib Player Pro:*
- 1 Dispositivo
- 30.000 Gs : 30 días
- 50.000 Gs : 60 días${formasPago}`,

  "13": `*➯ IPTV Smarters:*
- 3 Dispositivo
- 25.000 Gs : 30 días
- 40.000 Gs : 60 días${formasPago}`,

  "14": `*➯ Tigo Sport App:*
- Plan Privado : Reproduce en 2 dispositivos
- 50.000 Gs : 30 días

- Plan Compartido : Reproduce en 1 dispositivos
- 30.000 Gs : 30 días
- 55.000 Gs : 60 días${formasPago}`,

  "15": `*➯ Apple Tv:*
- 30.000 Gs : 90 días${formasPago}`,

  "16": `*➯ Apple Music:*
- 30.000 Gs : 90 días${formasPago}`,

  "17": `*➯ CP Call Of Duty Mobile:*
- 12.000 Gs : 80 CP
- 50.000 Gs : 420 CP
- 90.000 Gs : 880 CP${formasPago}`,

  "18": `*➯ UC Pubg Mobile:*
- 13.000 Gs : 63 UC
- 47.000 Gs : 340 UC
- 90.000 Gs : 690 UC
- 195.000 Gs : 1875 UC${formasPago}`,

  "19": `*➯ Pass Clash Royale:*
- 100.000 Gs : Pase Diamante${formasPago}`,

  "20": `*➯ Pass Clash of Clans:*
- 65.000 Gs : Pase Oro${formasPago}`,

  "21": `*➯ Moneda Roblox:*
- 50.000 Gs : 500 Robux
- 90.000 Gs : 1000 Robux
- 135.000 Gs : 1500 Robux${formasPago}`,

  "22": `*➯ Pass 8 Ball Pool:*
- 40.000 Gs : Premium Pass
- 70.000 Gs : Élite Pass${formasPago}`,

  "23": `*➯ Tarjeta Virtual (Play Store):*
- 10.000 : 15.000 Gs
- 20.000 : 29.000 Gs
- 30.000 : 40.000 Gs
- 40.000 : 52.000 Gs
- 50.000 : 63.000 Gs
- 60.000 : 74.000 Gs
- 70.000 : 85.000 Gs
- 80.000 : 96.000 Gs
- 90.000 : 107.000 Gs
- 100.000 : 118.000 Gs${formasPago}`,

  "24": `*➯ Monedas TikTok:*
- 48.000 Gs : 471 monedas
- 57.000 Gs : 566 monedas
- 65.000 Gs : 660 monedas
- 75.000 Gs : 754 monedas
- 83.000 Gs : 849 monedas
- 93.000 Gs : 943 monedas
- 102.000 Gs : 1037 monedas${formasPago}`
};

const ultimosSaludos = {};

app.post("/", (req, res) => {
  const numero = req.body.phone;
  const mensaje = (req.body.message || "").toLowerCase().trim();
  const ahora = Date.now();
  const MILISEGUNDOS_EN_24H = 24 * 60 * 60 * 1000;

  const palabrasPago = ["forma de pago", "numero para giro", "número para giro", "para giro", "hacer giro", "hacer pago"];

  if (!ultimosSaludos[numero] || ahora - ultimosSaludos[numero] > MILISEGUNDOS_EN_24H) {
    ultimosSaludos[numero] = ahora;
    res.set("Content-Type", "text/plain");
    return res.send(mensajeBienvenida);
  }

  if (palabrasPago.some(palabra => mensaje.includes(palabra))) {
    res.set("Content-Type", "text/plain");
    return res.send(formasPago);
  }

  if (respuestas[mensaje]) {
    res.set("Content-Type", "text/plain");
    return res.send(respuestas[mensaje]);
  }
});

app.get("/", (req, res) => {
  res.send("Bot online ✅");
});

app.listen(PORT, () => {
  console.log("✅ Bot activo en el puerto " + PORT);
});
