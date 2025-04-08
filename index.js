const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

const mensajeBienvenida = `👋 ¡Bienvenido/a!

*¿Cómo podemos ayudarte hoy?*

1️⃣ Free Fire  
2️⃣ Netflix Premium / VIP  
3️⃣ Disney+ Premium  
4️⃣ Max  
5️⃣ Prime Video  
6️⃣ Paramount  
7️⃣ Crunchyroll  
8️⃣ Spotify Premium  
9️⃣ YouTube Premium  
🔟 FlujoTv  
1️⃣1️⃣ FénixTv  
1️⃣2️⃣ Ib Player Pro  
1️⃣3️⃣ Iptv Smarters  
1️⃣4️⃣ Tigo Sport App  
1️⃣5️⃣ Apple Tv  
1️⃣6️⃣ Apple Music  
1️⃣7️⃣ Call Of Duty Mobile  
1️⃣8️⃣ Pubg Mobile  
1️⃣9️⃣ Clash Royale  
2️⃣0️⃣ Clash Of Clans  
2️⃣1️⃣ Roblox  
2️⃣2️⃣ 8 Ball Pool  
2️⃣3️⃣ Tarjeta Virtual  
2️⃣4️⃣ Monedas TikTok

✨ *Escribí el número del servicio para ver los precios.*`;

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
  "1": "*➯ Diamantes Free Fire:*\\n- 10.000 Gs : 110\\n- 25.000 Gs : 341\\n- 40.000 Gs : 572\\n- 75.000 Gs : 1155\\n- 140.000 Gs : 2398\\n- 325.000 Gs : 6160\\n- 20.000 Gs : Vip Semanal\\n- 75.000 Gs : Vip Mensual\\n- 35.000 Gs : Pase de Nivel" + formasPago,
  "2": "*➯ Netflix Premium:*\\n(Acceso por código)\\n- 30.000 Gs : 30 Días\\n- 55.000 Gs : 60 Días\\n\\n*➯ Netflix Vip:*\\n(Acceso por contraseña)\\n- 45.000 Gs : 30 Días\\n- 80.000 Gs : 60 Días" + formasPago,
  "3": "*➯ Disney Premium:*\\n- 30.000 Gs : 30 Días\\n- 50.000 Gs : 60 Días" + formasPago,
  "4": "*➯ Max:*\\n- 20.000 Gs : 30 Días\\n- 35.000 Gs : 60 Días" + formasPago,
  "5": "*➯ Prime Video:*\\n- 20.000 Gs : 30 Días\\n- 35.000 Gs : 60 Días" + formasPago,
  "6": "*➯ Paramount:*\\n- 20.000 Gs : 30 Días\\n- 35.000 Gs : 60 Días" + formasPago,
  "7": "*➯ Crunchyroll:*\\n- 15.000 Gs : 30 Días\\n- 25.000 Gs : 60 Días" + formasPago,
  "8": "*➯ Spotify Premium:*\\n- 25.000 Gs : 30 Días\\n- 45.000 Gs : 60 Días" + formasPago,
  "9": "*➯ YouTube Premium:*\\n- 20.000 Gs : 30 Días\\n- 35.000 Gs : 60 Días" + formasPago,
  "10": "*➯ FlujoTv Compartida (1 pantalla):*\\n- 30.000 Gs : 30 Días\\n- 50.000 Gs : 60 Días" + formasPago,
  "11": "*➯ FénixTv Compartida (1 pantalla):*\\n- 15.000 Gs : 30 Días\\n- 25.000 Gs : 60 Días" + formasPago,
  "12": "*➯ Ib Player Pro:*\\n- 30.000 Gs : 30 Días\\n- 50.000 Gs : 60 Días" + formasPago,
  "13": "*➯ Iptv Smarters (3 pantallas):*\\n- 25.000 Gs : 30 Días\\n- 40.000 Gs : 60 Días" + formasPago,
  "14": "*➯ Tigo Sport App (2 pantallas):*\\n- 45.000 Gs : 30 Días\\n- 80.000 Gs : 60 Días" + formasPago,
  "15": "*➯ Apple Tv:*\\n- 30.000 Gs : 90 Días" + formasPago,
  "16": "*➯ Apple Music:*\\n- 30.000 Gs : 90 Días" + formasPago,
  "17": "*➯ Cp Call of Duty Mobile:*\\n- 12.000 Gs : 80 Cp\\n- 50.000 Gs : 420 Cp\\n- 90.000 Gs : 880 Cp" + formasPago,
  "18": "*➯ Uc Pubg Mobile:*\\n- 13.000 Gs : 63 Uc\\n- 47.000 Gs : 340 Uc\\n- 90.000 Gs : 690 Uc\\n- 195.000 Gs : 1875 Uc" + formasPago,
  "19": "*➯ Pass Clash Royale:*\\n- 100.000 Gs : Pase Diamante" + formasPago,
  "20": "*➯ Pass Clash of Clans:*\\n- 65.000 Gs : Pase Oro" + formasPago,
  "21": "*➯ Moneda Roblox:*\\n- 50.000 Gs : 500 Robux\\n- 90.000 Gs : 1000 Robux\\n- 135.000 Gs : 1500 Robux" + formasPago,
  "22": "*➯ Pass 8 Ball Pool:*\\n- 40.000 Gs : Premium Pass\\n- 70.000 Gs : Élite Pass" + formasPago,
  "23": "*➯ Tarjeta Virtual:*\\n(Play Store)\\n- (10.000) : 15.000 Gs\\n- (20.000) : 29.000 Gs\\n- (30.000) : 40.000 Gs\\n- (40.000) : 52.000 Gs\\n- (50.000) : 63.000 Gs\\n- (60.000) : 74.000 Gs\\n- (70.000) : 85.000 Gs\\n- (80.000) : 96.000 Gs\\n- (90.000) : 107.000 Gs\\n- (100.000) : 118.000 Gs" + formasPago,
  "24": "*➯ Monedas TikTok:*\\n- 48.000 Gs : 471 monedas\\n- 57.000 Gs : 566 monedas\\n- 65.000 Gs : 660 monedas\\n- 75.000 Gs : 754 monedas\\n- 83.000 Gs : 849 monedas\\n- 93.000 Gs : 943 monedas\\n- 102.000 Gs : 1037 monedas" + formasPago
};

app.post("/", (req, res) => {
  const mensaje = (req.body.message || "").trim().toLowerCase();

  if (
    ["hola", "servicios", "servicio", "precios", "ayuda"].includes(mensaje)
  ) {
    return res.send({ status: "success", reply: mensajeBienvenida });
  }

  if (respuestas[mensaje]) {
    return res.send({ status: "success", reply: respuestas[mensaje] });
  }

  return res.send({ status: "success", reply: "➡️ Elegí un número." });
});

app.listen(PORT, () => {
  console.log("✅ Bot activo en el puerto " + PORT);
});
