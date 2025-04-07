
const express = require('express');
const axios = require('axios');
const app = express();

app.use(express.json());

const WABLAS_TOKEN = process.env.WABLAS_TOKEN;
const WABLAS_URL = 'https://bdg.wablas.com/api/send-message';

const sendMessage = async (phone, message) => {
  try {
    const res = await axios.post(WABLAS_URL, {
      phone,
      message
    }, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${WABLAS_TOKEN}`
      }
    });
    console.log('✅ Enviado:', res.data);
  } catch (err) {
    console.error('❌ Error al enviar:', err.response?.data || err.message);
  }
};

app.post('/webhook', async (req, res) => {
  const { phone, message } = req.body;

  if (!phone || !message) return res.sendStatus(400);

  const msg = message.toLowerCase();

  if (msg.includes('netflix')) {
    await sendMessage(phone, '🎬 Netflix:\nPremium 4 pantallas: 15.000 Gs\nVIP personalizado: 18.000 Gs');
  } else if (msg.includes('fenix')) {
    await sendMessage(phone, '🔥 FénixTV:\nAcceso completo por 30 días: 12.000 Gs');
  } else {
    await sendMessage(phone, '👋 Hola! Estos son nuestros servicios:\n📺 Netflix\n🔥 FénixTV\nEscribí el nombre del servicio que querés.');
  }

  res.sendStatus(200);
});

app.listen(3000, () => {
  console.log('🚀 Bot corriendo en puerto 3000');
});
