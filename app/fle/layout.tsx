import { cn } from "@/lib/utils";
import { Sidebar } from "@/components/sidebar";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export const metadata = {
  title: "FLE Dashboard Sample",
  description:
    "A sample dashboard for FLE. Not representative of the final product",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Sidebar />
      <div className="xl:pl-72">
        <SiteHeader />
        {children}
        <SiteFooter />
      </div>
    </>
  );
}
