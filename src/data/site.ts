export const site = {
  name: "Orvenz",
  legalDescription: "Consultoria de software",
  url: "https://www.orvenz.com.br",
  whatsappNumber: "5517992274088",
  phoneDisplay: "(17) 99227-4088",
  email: "pedrohfktlan@gmail.com",
  baseCity: "Novo Horizonte-SP",
  cities: [
    "Novo Horizonte",
    "Catanduva",
    "Borborema",
    "Itajobi",
    "Itápolis",
    "Sales",
    "São José do Rio Preto",
  ],
};

export function whatsappLink(message: string) {
  return `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export const defaultWhatsappMessage =
  "Olá! Vim pelo site da Orvenz e gostaria de conversar sobre o meu negócio.";
