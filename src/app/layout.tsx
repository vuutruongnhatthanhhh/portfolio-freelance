import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/theme-provider";
import SideMenu from "@/components/MenuDesktop";
import MobileMenu from "@/components/MenuMobile";
import BackgroundGrid from "@/components/ThemeBackground";
import BackToTopButton from "@/components/BackToTopButton";

export const metadata: Metadata = {
  title: "Portfolio | Vưu Trường Nhật Thanh",
  description: "Full-stack developer portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="vi" suppressHydrationWarning>
      <body>
        <ThemeProvider>
          <BackgroundGrid>
            <div className="lg:flex">
              {/* Sidebar chỉ hiện từ desktop trở lên (≥ lg) */}
              <div className="hidden lg:block">
                <SideMenu />
              </div>

              {/* Topbar + Mobile/Tablet menu: hiện khi < lg (mobile + tablet) */}
              <div className="lg:hidden sticky top-0 z-40 border-b bg-background/80 backdrop-blur">
                <div className="flex items-center gap-2 px-3 py-2">
                  <MobileMenu />
                  <div className="font-semibold">Portfolio</div>
                </div>
              </div>

              {/* Content */}
              <main className="w-full lg:pl-0">
                <div className="mx-auto max-w-full px-4 py-6 lg:py-10">
                  {children}
                </div>
              </main>
              <BackToTopButton />
            </div>
          </BackgroundGrid>
        </ThemeProvider>
      </body>
    </html>
  );
}
