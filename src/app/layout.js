import "./globals.css";
import { LanguageProvider } from "@/context/LanguageContext";
import { dictionaries } from "@/i18n/dictionaries";

export const metadata = {
  title: dictionaries.en.meta.siteName,
  description: dictionaries.en.meta.description,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
