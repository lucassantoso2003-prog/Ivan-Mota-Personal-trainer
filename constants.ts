import { CheckCircle, Clock, Target, ShieldCheck, MapPin, Instagram } from "lucide-react";

export const CONTACT_INFO = {
  name: "Ivan Mota",
  role: "Personal Trainer",
  location: "Alagoinhas, BA",
  whatsappLink: "https://api.whatsapp.com/send?phone=557587052115&text=Oi,%20vim%20pela%20p%C3%A1gina%20e%20quero%20saber%20mais%20sobre%20o%20acompanhamento",
  instagramLink: "https://www.instagram.com/ivanmota_team/?__pwa=1",
};

export const IMAGES = {
  hero: "https://i.imgur.com/FPZSo6A.png", 
  heroAlt: "https://i.imgur.com/wkksg0A.png",
  about: "https://i.imgur.com/hA2Vj66.png",
  gallery: [
    "https://i.imgur.com/wkksg0A.png", // Added missing image
    "https://i.imgur.com/bjeIJtC.png",
    "https://i.imgur.com/OTcIEZE.png",
    "https://i.imgur.com/63jeyqB.png",
    "https://i.imgur.com/rUlyyTZ.png",
    "https://i.imgur.com/TdNWkUb.png",
    "https://i.imgur.com/v1f99cB.png",
    "https://i.imgur.com/btv2iji.png",
    "https://i.imgur.com/PfB8Yv5.png",
    "https://i.imgur.com/usmQ4ke.png",
  ]
};

export const DIFFERENTIALS = [
  {
    icon: Target,
    title: "Sem Achismos",
    description: "Estratégia baseada em ciência e fisiologia aplicada."
  },
  {
    icon: ShieldCheck,
    title: "Avaliação Honesta",
    description: "Feedback real sobre sua condição e prazos para resultados."
  },
  {
    icon: Clock,
    title: "Foco no Resultado",
    description: "Metodologia otimizada para quem não tem tempo a perder."
  },
  {
    icon: CheckCircle,
    title: "Atendimento Claro",
    description: "Comunicação direta, sem termos técnicos complicados."
  }
];

export const STEPS = [
  {
    number: "01",
    title: "Toque no WhatsApp",
    desc: "Clique no botão e inicie uma conversa diretamente comigo."
  },
  {
    number: "02",
    title: "Agendamento",
    desc: "Vamos definir o melhor horário para entender seus objetivos."
  },
  {
    number: "03",
    title: "Avaliação Inicial",
    desc: "Analisamos seu perfil e traçamos o plano ideal."
  }
];