import { ContextProvider } from "@/contexts/Context";
import "./globals.css";
import type { Metadata } from "next";
import { Lato } from "next/font/google";
import { Loading } from "@/components/Loading";

const lato = Lato({
  weight: ["100", "300", "400", "700", "900"],
  subsets: ["latin"],
  variable: "--font-lato",
});

export const metadata: Metadata = {
  title: "Kauã Braz",
  description:
    "Portfolio de um desenvolvedor front-end de 17 anos, especializado em Next.js, React.js, JavaScript, Typescript e Tailwind CSS. Minha paixão pela web me levou a também me tornar um web designer. Descubra mais sobre meus projetos inovadores e soluções criativas neste portfolio.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className={lato.className}>
        <div className="px-vw160px bg-background-container bg-cover bg-opacity-70 min-h-screen md:px-vw64px dark:bg-background-container-dark">
          <div className="bg-white shadow-container h-full px-vw64px py-[60px] dark:bg-support-1000">
            <ContextProvider>
              <Loading />
              {children}
            </ContextProvider>
          </div>
        </div>
      </body>
    </html>
  );
}
