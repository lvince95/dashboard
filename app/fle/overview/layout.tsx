type OverviewLayoutProps = {
  children: React.ReactNode;
};

export const metadata = {
  title: "FLE - Overview",
  description: "Overview of the data",
};

export default function OverviewLayout({ children }: OverviewLayoutProps) {
  return (
    <>
      <main className="px-8">{children}</main>
      <footer className="float-right px-4 py-11 text-sm leading-7 text-gray-400 sm:px-6 lg:px-8">
        Last updated: unknown seconds ago
      </footer>
    </>
  );
}
