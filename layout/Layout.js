import Head from "next/head";
import { Children } from "react";

export default function Layout({ children, pagina }) {
  return (
    <>
      <Head>
        <title>Cafe - {pagina}</title>
        <meta name="description" content="Quiosco Cafeteria" />
      </Head>
      <div className="md:flex">
        <aside className="md:w-4/12">
          <h1>Sidebar aqui</h1>
        </aside>
        <main className="md:w-8/12">{children}</main>
      </div>
    </>
  );
}
