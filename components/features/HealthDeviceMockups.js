const CalendarIcon = ({ className = "h-5 w-5" }) => (
  <svg
    aria-hidden="true"
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
  >
    <path strokeLinecap="round" d="M7 3v3m10-3v3M4 9h16M5 5h14a1 1 0 0 1 1 1v14H4V6a1 1 0 0 1 1-1Z" />
    <path strokeLinecap="round" d="m9.5 15 1.6 1.6 3.7-4" />
  </svg>
);

const LockIcon = ({ className = "h-5 w-5" }) => (
  <svg
    aria-hidden="true"
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M7 10V7a5 5 0 0 1 10 0v3m-11 0h12a1 1 0 0 1 1 1v9H5v-9a1 1 0 0 1 1-1Z" />
    <path strokeLinecap="round" d="M12 14v2.5" />
  </svg>
);

const ShieldIcon = ({ className = "h-5 w-5" }) => (
  <svg
    aria-hidden="true"
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3 5 6v5c0 4.6 2.8 8.1 7 10 4.2-1.9 7-5.4 7-10V6l-7-3Z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="m9 12 2 2 4-4" />
  </svg>
);

const ChevronIcon = () => (
  <svg aria-hidden="true" className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path strokeLinecap="round" strokeLinejoin="round" d="m9 18 6-6-6-6" />
  </svg>
);

const PhoneShell = ({ children, className = "", label }) => (
  <article
    aria-label={label}
    className={`absolute overflow-hidden rounded-[2.4rem] border-[5px] border-slate-800 bg-slate-50 shadow-[0_30px_80px_-24px_rgba(15,23,42,0.45)] ring-1 ring-white/50 ${className}`}
  >
    <div aria-hidden="true" className="absolute left-1/2 top-2 z-20 h-5 w-20 -translate-x-1/2 rounded-full bg-slate-900" />
    <div className="relative flex h-full flex-col overflow-hidden rounded-[2rem] bg-[#f7faff] pt-9 text-slate-900">
      {children}
    </div>
  </article>
);

const MiniHeader = ({ title, eyebrow }) => (
  <div className="px-5 pb-4">
    <p className="text-[9px] font-bold uppercase tracking-[0.14em] text-blue-600">{eyebrow}</p>
    <h3 className="mt-1 text-lg font-black tracking-[-0.03em] text-slate-950">{title}</h3>
  </div>
);

const HealthDeviceMockups = () => {
  const calendarDays = [
    { day: "8" },
    { day: "9" },
    { day: "10", active: true },
    { day: "11" },
    { day: "12" },
  ];

  return (
    <figure
      className="relative mt-6 h-[430px] w-full max-w-7xl overflow-hidden sm:h-[540px] md:mt-10 md:h-[680px]"
      aria-label="Vista de Tarjeto Salud con agenda, recordatorios y controles de privacidad"
    >
      <div
        aria-hidden="true"
        className="absolute left-1/2 top-12 h-[560px] w-[560px] -translate-x-1/2 rounded-full border border-blue-200/80 sm:h-[720px] sm:w-[720px] md:top-10 md:h-[900px] md:w-[900px]"
      />
      <div
        aria-hidden="true"
        className="absolute left-1/2 top-24 h-[440px] w-[440px] -translate-x-1/2 rounded-full border border-blue-300/70 sm:h-[580px] sm:w-[580px] md:top-28 md:h-[720px] md:w-[720px]"
      />
      <div
        aria-hidden="true"
        className="absolute left-1/2 top-36 h-[320px] w-[320px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,_rgba(37,99,235,0.14),_rgba(37,99,235,0)_68%)] sm:h-[450px] sm:w-[450px] md:h-[570px] md:w-[570px]"
      />

      <PhoneShell
        label="Calendario de citas"
        className="bottom-[-78px] left-1/2 z-10 h-[350px] w-[180px] -translate-x-[142%] -rotate-[11deg] sm:bottom-[-90px] sm:h-[470px] sm:w-[240px] sm:-translate-x-[145%] md:bottom-[-128px] md:h-[590px] md:w-[300px] md:-translate-x-[148%]"
      >
        <MiniHeader eyebrow="Agenda" title="Mis citas" />
        <div className="border-y border-blue-100 bg-white px-4 py-4 md:px-5">
          <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Junio</p>
          <div className="mt-3 grid grid-cols-5 gap-1.5">
            {calendarDays.map(({ day, active }) => (
              <div
                key={day}
                className={`flex aspect-square items-center justify-center rounded-xl text-[10px] font-bold md:text-xs ${
                  active ? "bg-blue-600 text-white shadow-lg shadow-blue-200" : "bg-slate-100 text-slate-500"
                }`}
              >
                {day}
              </div>
            ))}
          </div>
        </div>
        <div className="space-y-2.5 px-4 py-4 md:px-5">
          <p className="text-[10px] font-bold text-slate-400">PRÓXIMAS</p>
          <div className="rounded-2xl border border-blue-100 bg-white p-3 shadow-sm">
            <div className="flex items-center gap-2">
              <div className="rounded-xl bg-blue-50 p-2 text-blue-600"><CalendarIcon className="h-4 w-4" /></div>
              <div>
                <p className="text-[11px] font-extrabold text-slate-800 md:text-xs">Consulta general</p>
                <p className="text-[9px] text-slate-500 md:text-[10px]">10:30 · Centro de salud</p>
              </div>
            </div>
          </div>
          <div className="rounded-2xl border border-slate-100 bg-white p-3 opacity-75 shadow-sm">
            <p className="text-[10px] font-bold text-slate-700 md:text-xs">Revisión programada</p>
            <p className="mt-1 text-[9px] text-slate-400">Fecha de consulta</p>
          </div>
        </div>
      </PhoneShell>

      <PhoneShell
        label="Resumen de privacidad y accesos por rol"
        className="bottom-[-78px] left-1/2 z-10 h-[350px] w-[180px] translate-x-[42%] rotate-[11deg] sm:bottom-[-90px] sm:h-[470px] sm:w-[240px] sm:translate-x-[45%] md:bottom-[-128px] md:h-[590px] md:w-[300px] md:translate-x-[48%]"
      >
        <MiniHeader eyebrow="Privacidad" title="Tus accesos" />
        <div className="mx-4 rounded-2xl bg-blue-600 p-4 text-white shadow-xl shadow-blue-200/70 md:mx-5">
          <div className="flex items-center justify-between">
            <div className="rounded-xl bg-white/15 p-2"><ShieldIcon className="h-5 w-5" /></div>
            <span className="rounded-full bg-emerald-300/20 px-2 py-1 text-[9px] font-bold text-emerald-100">Protegido</span>
          </div>
          <p className="mt-4 text-sm font-black md:text-base">Control de privacidad</p>
          <p className="mt-1 text-[9px] leading-relaxed text-blue-100 md:text-[10px]">Tú decides qué información compartir y con quién.</p>
        </div>
        <div className="px-4 py-4 md:px-5">
          <p className="text-[10px] font-bold text-slate-400">ROLES AUTORIZADOS</p>
          <div className="mt-3 space-y-2">
            {[
              ["MC", "Profesional de salud", "Acceso clínico"],
              ["AD", "Personal administrativo", "Sólo agenda"],
            ].map(([initials, name, role]) => (
              <div key={initials} className="flex items-center gap-2 rounded-2xl border border-slate-100 bg-white p-2.5 shadow-sm">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-blue-50 text-[9px] font-black text-blue-700">{initials}</div>
                <div className="min-w-0 flex-1">
                  <p className="truncate text-[9px] font-bold text-slate-800 md:text-[11px]">{name}</p>
                  <p className="text-[8px] text-slate-400 md:text-[9px]">{role}</p>
                </div>
                <ChevronIcon />
              </div>
            ))}
          </div>
        </div>
      </PhoneShell>

      <PhoneShell
        label="Inicio de Tarjeto Salud"
        className="bottom-[-98px] left-1/2 z-30 h-[400px] w-[205px] -translate-x-1/2 sm:bottom-[-118px] sm:h-[540px] sm:w-[276px] md:bottom-[-155px] md:h-[680px] md:w-[348px]"
      >
        <div className="flex items-center justify-between px-5 pb-4 md:px-6">
          <div>
            <p className="text-[9px] font-bold uppercase tracking-[0.14em] text-blue-600">Tarjeto Salud</p>
            <h3 className="mt-1 text-lg font-black tracking-[-0.03em] md:text-xl">Hola, paciente</h3>
          </div>
          <div className="rounded-xl bg-blue-50 p-2 text-blue-700"><LockIcon className="h-4 w-4 md:h-5 md:w-5" /></div>
        </div>

        <div className="mx-4 rounded-[1.6rem] bg-gradient-to-br from-blue-700 via-blue-600 to-cyan-500 p-4 text-white shadow-[0_18px_38px_-15px_rgba(37,99,235,0.72)] md:mx-5 md:p-5">
          <div className="flex items-center justify-between">
            <span className="rounded-full bg-white/15 px-2.5 py-1 text-[8px] font-bold uppercase tracking-wide md:text-[9px]">Próxima cita</span>
            <CalendarIcon className="h-4 w-4 text-blue-100 md:h-5 md:w-5" />
          </div>
          <p className="mt-4 text-base font-black md:text-xl">Consulta general</p>
          <p className="mt-1 text-[10px] text-blue-100 md:text-xs">Miércoles 10 · 10:30</p>
          <div className="mt-4 flex items-center justify-between border-t border-white/20 pt-3">
            <span className="text-[9px] text-blue-100 md:text-[10px]">Centro de salud</span>
            <span className="rounded-lg bg-white px-2.5 py-1.5 text-[8px] font-black text-blue-700 md:text-[9px]">Ver detalle</span>
          </div>
        </div>

        <div className="px-4 pt-4 md:px-5 md:pt-5">
          <div className="flex items-center justify-between">
            <p className="text-xs font-black md:text-sm">Recordatorios</p>
            <span className="text-[9px] font-bold text-blue-600 md:text-[10px]">Ver agenda</span>
          </div>
          <div className="mt-3 grid grid-cols-2 gap-2.5">
            <div className="rounded-2xl border border-blue-100 bg-white p-3 shadow-sm md:p-4">
              <div className="mb-3 w-fit rounded-xl bg-cyan-50 p-2 text-cyan-700"><CalendarIcon className="h-4 w-4" /></div>
              <p className="text-[9px] font-extrabold md:text-[11px]">Confirmar cita</p>
              <p className="mt-1 text-[8px] text-slate-400 md:text-[9px]">Pendiente</p>
            </div>
            <div className="rounded-2xl border border-blue-100 bg-white p-3 shadow-sm md:p-4">
              <div className="mb-3 w-fit rounded-xl bg-emerald-50 p-2 text-emerald-700"><ShieldIcon className="h-4 w-4" /></div>
              <p className="text-[9px] font-extrabold md:text-[11px]">Revisar permisos</p>
              <p className="mt-1 text-[8px] text-slate-400 md:text-[9px]">Privacidad</p>
            </div>
          </div>
        </div>

        <div className="mx-4 mt-3 flex items-center gap-3 rounded-2xl border border-emerald-100 bg-emerald-50 p-3 text-emerald-900 md:mx-5 md:mt-4">
          <div className="rounded-xl bg-white p-2 text-emerald-700 shadow-sm"><LockIcon className="h-4 w-4" /></div>
          <div>
            <p className="text-[9px] font-black md:text-[11px]">Acceso protegido</p>
            <p className="mt-0.5 text-[8px] text-emerald-700 md:text-[9px]">Sesión protegida</p>
          </div>
        </div>
      </PhoneShell>

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 z-40 h-24 bg-gradient-to-t from-[var(--surface-canvas)] via-[var(--surface-canvas)]/85 to-transparent md:h-36"
      />
      <figcaption className="sr-only">Las interfaces mostradas son ilustrativas y no contienen información médica real.</figcaption>
    </figure>
  );
};

export default HealthDeviceMockups;
