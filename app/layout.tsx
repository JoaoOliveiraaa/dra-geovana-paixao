import { Poppins } from "next/font/google"
import "./globals.css"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
})

export const metadata = {
  title: "Dra. Geovana Paixão Tegon - Médica de Família e Saúde Mental",
  description: "Médica de Família com foco em Saúde Mental e Cuidado Integral. Atendimento presencial em Taquara e Parobé – RS | Online para todo o Brasil",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className={poppins.className}>{children}</body>
    </html>
  )
}
