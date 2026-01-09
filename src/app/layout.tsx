import './globals.css';
import "./themes.css"; 
import ThemeProvider from "@/components/ThemeProvider";
import ThemeToggle from "@/components/ThemeToggle";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body style={{ margin: 0, fontFamily: "sans-serif" }}>
        <ThemeProvider>
          {}
          <div
            style={{
              display: "flex",
              justifyContent: "flex-end",
              padding: "1rem",
            }}
          >
            <ThemeToggle />
          </div>

          {}
          <main style={{ padding: "1rem" }}>{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}