import "./globals.css";

export const metadata = {
  title: "Mateus Bispo // Portfolio",
  description: "Portfólio de Mateus Bispo — Ciência da Computação, Web, Sistemas e Computação Embarcada."
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
