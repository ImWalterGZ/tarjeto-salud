"use client";

import { useMemo, useState } from "react";
import {
  CalendarMonth,
  CheckCircle,
  MedicalInformation,
  NotificationsUnread,
  Shield,
} from "@material-symbols-svg/react";

const VACCINES = [
  { name: "Influenza estacional", dose: "Dosis anual", date: "12 sep 2026", status: "Aplicada" },
  { name: "COVID-19", dose: "Refuerzo", date: "18 feb 2026", status: "Aplicada" },
  { name: "Tétanos y difteria", dose: "Refuerzo", date: "Mar 2027", status: "Próxima" },
];

const FILTERS = ["Todas", "Aplicadas", "Próximas"];

const UserSection = () => {
  const [filter, setFilter] = useState("Todas");
  const visibleVaccines = useMemo(
    () =>
      filter === "Todas"
        ? VACCINES
        : VACCINES.filter((vaccine) => vaccine.status === (filter === "Aplicadas" ? "Aplicada" : "Próxima")),
    [filter]
  );

  return (
    <section className="w-full overflow-hidden bg-surface-raised py-16 md:py-24">
      <div className="mx-auto flex w-full max-w-7xl flex-col items-center gap-10 px-5 sm:px-8 lg:flex-row lg:gap-16 lg:px-16">
        <div className="w-full max-w-xl rounded-[2rem] border border-blue-200 bg-white p-5 shadow-xl shadow-blue-950/10 md:p-7">
          <div className="flex items-start justify-between gap-4 border-b border-blue-100 pb-5">
            <div className="flex items-center gap-3">
              <div className="flex size-12 items-center justify-center rounded-2xl bg-blue-100 text-blue-700">
                <MedicalInformation className="size-7" aria-hidden="true" />
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-blue-700">Tarjeto Salud</p>
                <h2 className="font-domine text-2xl font-bold text-slate-900">Cartilla de vacunación</h2>
              </div>
            </div>
            <span className="rounded-full bg-blue-50 px-3 py-1.5 text-xs font-semibold text-blue-700">Perfil protegido</span>
          </div>

          <div className="mt-5 flex items-center justify-between rounded-2xl bg-slate-50 p-4">
            <div>
              <p className="text-sm font-bold text-slate-900">Paciente de ejemplo</p>
              <p className="mt-1 text-xs text-slate-500">Información ilustrativa · No usar datos reales</p>
            </div>
            <Shield className="size-8 text-blue-600" aria-label="Información protegida" />
          </div>

          <div className="mt-6 flex flex-wrap gap-2" aria-label="Filtrar vacunas">
            {FILTERS.map((item) => (
              <button
                key={item}
                type="button"
                onClick={() => setFilter(item)}
                className={`rounded-full border px-3 py-1.5 text-sm font-semibold transition-colors ${
                  filter === item
                    ? "border-blue-600 bg-blue-600 text-white"
                    : "border-slate-200 bg-white text-slate-600 hover:border-blue-300"
                }`}
              >
                {item}
              </button>
            ))}
          </div>

          <div className="mt-4 divide-y divide-slate-100 rounded-2xl border border-slate-100 bg-white px-4">
            {visibleVaccines.map((vaccine) => {
              const pending = vaccine.status === "Próxima";
              return (
                <div key={vaccine.name} className="flex items-center gap-3 py-4">
                  <div className={`flex size-9 shrink-0 items-center justify-center rounded-full ${pending ? "bg-amber-50 text-amber-600" : "bg-emerald-50 text-emerald-600"}`}>
                    {pending ? <NotificationsUnread className="size-5" aria-hidden="true" /> : <CheckCircle className="size-5" aria-hidden="true" />}
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="font-semibold text-slate-900">{vaccine.name}</p>
                    <p className="text-sm text-slate-500">{vaccine.dose} · {vaccine.date}</p>
                  </div>
                  <span className={`text-xs font-bold ${pending ? "text-amber-600" : "text-emerald-600"}`}>{vaccine.status}</span>
                </div>
              );
            })}
          </div>

          <div className="mt-5 flex items-center gap-3 rounded-2xl bg-blue-600 p-4 text-white">
            <CalendarMonth className="size-6" aria-hidden="true" />
            <div>
              <p className="text-sm font-bold">Próximo refuerzo estimado</p>
              <p className="text-sm text-blue-100">Tétanos y difteria · marzo de 2027</p>
            </div>
          </div>
        </div>

        <div className="flex w-full max-w-xl flex-col gap-6 text-center lg:text-left">
          <p className="font-bold uppercase tracking-widest text-content-text-brand">Seguimiento preventivo</p>
          <h2 className="font-domine text-4xl text-content-text-primary md:text-5xl">Tu cartilla, siempre clara y disponible.</h2>
          <p className="text-lg leading-relaxed text-content-text-secondary">
            Consulta las vacunas registradas, identifica próximos refuerzos y conserva un historial ordenado para compartirlo sólo cuando tú lo autorices.
          </p>
          <div className="grid gap-3 sm:grid-cols-2">
            <div className="rounded-2xl border border-border-default bg-surface-base p-4">
              <CheckCircle className="size-6 text-content-icon-brand" aria-hidden="true" />
              <p className="mt-2 font-bold text-content-text-primary">Historial organizado</p>
              <p className="mt-1 text-sm text-content-text-secondary">Dosis y fechas fáciles de consultar.</p>
            </div>
            <div className="rounded-2xl border border-border-default bg-surface-base p-4">
              <Shield className="size-6 text-content-icon-brand" aria-hidden="true" />
              <p className="mt-2 font-bold text-content-text-primary">Acceso con autorización</p>
              <p className="mt-1 text-sm text-content-text-secondary">La información se comparte bajo tu control.</p>
            </div>
          </div>
          <p className="text-sm text-content-text-muted">La cartilla es un apoyo informativo y no sustituye la valoración del personal de salud.</p>
        </div>
      </div>
    </section>
  );
};

export default UserSection;
