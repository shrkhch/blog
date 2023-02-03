import Header from "./Header";

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <div className="max-w-7xl mx-auto">
        <main>{children}</main>
      </div>
    </>
  );
}
