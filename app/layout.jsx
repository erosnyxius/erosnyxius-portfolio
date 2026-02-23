import "./globals.css";

export const metadata = {
  title: "Mahtabul Shourav - Software Engineer",
  description: "Personal portfolio showcasing projects, skills, and experience",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <body className="min-h-screen bg-background antialiased">
        {children}
      </body>
    </html>
  );
}
