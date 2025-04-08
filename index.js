const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

const mensajeBienvenida = `👋 *¡Bienvenido/a!*

*¿Qué servicio te interesa? Responde con un número:*

🔵 1️⃣ Netflix Premium / Vip  
🔵 2️⃣ Disney+ Premium  
🔵 3️⃣ Max  
🔵 4️⃣ Prime Video  
🔵 5️⃣ Paramount  
🔵 6️⃣ Crunchyroll  
🔵 7️⃣ Spotify Premium  
🔵 8️⃣ YouTube Premium  
🔵 9️⃣ FlujoTv  
🔵 🔟 FénixTv  
🔵 1️⃣1️⃣ Ib Player Pro  
🔵 1️⃣2️⃣ IPTV Smarters  
🔵 1️⃣3️⃣ Tigo Sport App  
🔵 1️⃣4️⃣ Apple Tv  
🔵 1️⃣5️⃣ Apple Music  
🔵 1️⃣6️⃣ Free Fire  
🔵 1️⃣7️⃣ Call Of Duty Mobile  
🔵 1️⃣8️⃣ Pubg Mobile  
🔵 1️⃣9️⃣ Clash Royale  
🔵 2️⃣0️⃣ Clash Of Clans  
🔵 2️⃣1️⃣ Roblox  
🔵 2️⃣2️⃣ 8 Ball Pool  
🔵 2️⃣3️⃣ Tarjeta Virtual  
🔵 2️⃣4️⃣ Monedas TikTok

📍 *Responde solo con el número del servicio.*

📸 *Para reclamos o comprobantes:* envía una imagen.
`;

const formasPago = `
💳 *Formas de Pago:*
(*Giro* 🙅🏻‍♂ no carga de billetera)

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
  "1": `*Netflix Premium:* 30.000 Gs - 30 días\n*Netflix Vip:* 45.000 Gs - 30 días${formasPago}`,
  "2": `*Disney+ Premium:* 30.000 Gs - 30 días${formasPago}`,
  "3": `*Max:* 20.000 Gs - 30 días${formasPago}`,
  "4": `*Prime Video:* 20.000 Gs - 30 días${formasPago}`,
  "5": `*Paramount:* 20.000 Gs - 30 días${formasPago}`,
  "6": `*Crunchyroll:* 15.000 Gs - 30 días${formasPago}`,
  "7": `*Spotify Premium:* 25.000 Gs - 30 días${formasPago}`,
  "8": `*YouTube Premium:* 20.000 Gs - 30 días${formasPago}`,
  "9": `*FlujoTv:* 30.000 Gs - 30 días${formasPago}`,
  "10": `*FénixTv:* 15.000 Gs - 30 días${formasPago}`,
  "11": `*Ib Player Pro:* 30.000 Gs - 30 días${formasPago}`,
  "12": `*IPTV Smarters:* 25.000 Gs - 30 días${formasPago}`,
  "13": `*Tigo Sport App:* 45.000 Gs - 30 días${formasPago}`,
  "14": `*Apple TV:* 30.000 Gs - 90 días${formasPago}`,
  "15": `*Apple Music:* 30.000 Gs - 90 días${formasPago}`,
  "16": `*Free Fire:*\n- 10.000 Gs : 110 diamantes\n- 25.000 Gs : 341\n- 40.000 Gs : 572\n- 75.000 Gs : 1155\n- 140.000 Gs : 2398\n- 325.000 Gs : 6160\n- 20.000 Gs : VIP semanal\n- 75.000 Gs : VIP mensual\n- 35.000 Gs : Pase de Nivel${formasPago}`,
  "17": `*Call Of Duty:* 50.000 Gs - 420 CP${formasPago}`,
  "18": `*Pubg Mobile:* 47.000 Gs - 340 UC${formasPago}`,
  "19": `*Clash Royale:* 100.000 Gs - Pase Diamante${formasPago}`,
  "20": `*Clash Of Clans:* 65.000 Gs - Pase Oro${formasPago}`,
  "21": `*Roblox:*\n- 50.000 Gs : 500 Robux\n- 90.000 Gs : 1000 Robux${formasPago}`,
  "22": `*8 Ball Pool:*\n- 40.000 Gs : Premium Pass\n- 70.000 Gs : Elite Pass${formasPago}`,
  "23": `*Tarjeta Virtual Play Store:*\n- 15.000 Gs : Saldo 10.000\n- 29.000 Gs : 20.000\n- 40.000 Gs : 30.000\n- 52.000 Gs : 40.000\n- 63.000 Gs : 50.000\n- 118.000 Gs : 100.000${formasPago}`,
  "24": `*Monedas TikTok:*\n- 48.000 Gs : 471\n- 57.000 Gs : 566\n- 65.000 Gs : 660\n- 75.000 Gs : 754\n- 83.000 Gs : 849${formasPago}`
};

app.post("/", (req, res) => {
  const mensaje = (req.body.message || "").trim().toLowerCase();

  if (
    mensaje === "hola" ||
    mensaje === "servicios" ||
    mensaje === "precios"
  ) {
    return res.send({ status: "success", reply: mensajeBienvenida });
  }

  if (mensaje.includes("reclamo")) {
    return res.send({
      status: "success",
      reply: "📩 *Para ayudarte con tu reclamo, por favor envianos:*\n\n1️⃣ *Tu nombre y apellido completo*\n2️⃣ *Una captura de pantalla o foto del problema*"
    });
  }

  if (respuestas[mensaje]) {
    return res.send({ status: "success", reply: respuestas[mensaje] });
  }

  return res.sendStatus(200); // no responde si no reconoce nada
});

app.listen(PORT, () => {
  console.log("Bot activo en el puerto", PORT);
});
