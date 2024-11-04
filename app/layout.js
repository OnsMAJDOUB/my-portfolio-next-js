
import Navbar from "./components/Navbar";


export const metadata = {
  title: "My Portfolio",
  description: "A portfolio website showcasing my work and skills",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
