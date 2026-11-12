import { NextResponse } from "next/server";

// Multi-dominio en un solo proyecto Next.js.
//
// Producción
// ----------
// - tarjeto.mx       → landing de clientes  (sirve `app/page.js`)
// - tarjeto.app      → landing de negocios  (rewrite de `/` a `/negocios`, sirve `app/negocios/page.js`)
//
// La URL pública nunca expone `/negocios` — el visitante de tarjeto.app ve `/`,
// `/privacy-policy`, `/terms`, etc. Internamente Next.js rendea la ruta `/negocios/*`.
//
// Desarrollo (localhost)
// ----------------------
// El rewrite por host se desactiva. Las dos landings se acceden con paths explícitos:
//   - http://localhost:3000/         → landing de clientes
//   - http://localhost:3000/negocios → landing de negocios
//
export function proxy(request) {
  const host = request.headers.get("host") || "";
  const { pathname } = request.nextUrl;

  // Bloquear acceso directo a /negocios desde tarjeto.mx (clientes)
  if (host.includes("tarjeto.mx") && pathname.startsWith("/negocios")) {
    return NextResponse.rewrite(new URL("/404", request.url));
  }

  // En tarjeto.app, todo se sirve desde /negocios — rewriteamos la URL pública
  if (host.includes("tarjeto.app")) {
    // Si ya viene con prefijo /negocios (acceso interno o error), bloquear
    if (pathname.startsWith("/negocios")) {
      return NextResponse.rewrite(new URL("/404", request.url));
    }
    const url = request.nextUrl.clone();
    url.pathname = `/negocios${pathname === "/" ? "" : pathname}`;
    return NextResponse.rewrite(url);
  }

  // Localhost / cualquier otro host: pasa tal cual (rutas explícitas en dev)
  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico|icon|apple-icon|robots.txt|sitemap|.*\\..*).*)"],
};
