import { CalendarMonth, CheckCircle, Lock, NotificationsUnread } from "@material-symbols-svg/react";

const AppointmentVisual = () => (
  <div className="rounded-[2rem] border border-blue-100 bg-white p-5 shadow-xl shadow-blue-950/10">
    <div className="flex items-center justify-between">
      <div><p className="text-xs font-bold uppercase tracking-wider text-blue-700">Mi agenda</p><h4 className="mt-1 text-xl font-bold text-slate-900">Próximas citas</h4></div>
      <CalendarMonth className="size-8 text-blue-600" aria-hidden="true" />
    </div>
    <div className="mt-5 rounded-2xl bg-blue-600 p-4 text-white"><p className="text-xs text-blue-100">Martes · 24 septiembre</p><p className="mt-1 font-bold">Consulta de seguimiento</p><p className="mt-1 text-sm text-blue-100">10:30 a. m. · Consultorio asignado</p></div>
    <div className="mt-4 flex items-center gap-3 rounded-2xl border border-slate-100 p-3"><span className="flex size-9 items-center justify-center rounded-full bg-emerald-50 text-emerald-600"><CheckCircle className="size-5" /></span><div><p className="text-sm font-bold text-slate-900">Confirmada</p><p className="text-xs text-slate-500">Recordatorio activado</p></div></div>
  </div>
);

const AccessVisual = () => (
  <div className="rounded-[2rem] border border-blue-100 bg-white p-5 shadow-xl shadow-blue-950/10">
    <div className="flex items-center justify-between"><div><p className="text-xs font-bold uppercase tracking-wider text-blue-700">Privacidad</p><h4 className="mt-1 text-xl font-bold text-slate-900">Accesos autorizados</h4></div><Lock className="size-8 text-blue-600" aria-hidden="true" /></div>
    <div className="mt-5 space-y-3">
      {["Titular de la cuenta", "Profesional autorizado", "Centro de atención"].map((role, index) => <div key={role} className="flex items-center justify-between rounded-2xl bg-slate-50 px-4 py-3"><div><p className="text-sm font-bold text-slate-900">{role}</p><p className="text-xs text-slate-500">Acceso según permiso</p></div><span className={`size-2.5 rounded-full ${index === 2 ? "bg-amber-400" : "bg-emerald-500"}`} /></div>)}
    </div>
    <p className="mt-4 text-xs text-slate-500">Puedes revisar y actualizar permisos en cualquier momento.</p>
  </div>
);

const ReminderVisual = () => (
  <div className="rounded-[2rem] border border-blue-100 bg-white p-5 shadow-xl shadow-blue-950/10">
    <div className="flex items-center justify-between"><div><p className="text-xs font-bold uppercase tracking-wider text-blue-700">Seguimiento</p><h4 className="mt-1 text-xl font-bold text-slate-900">Recordatorios</h4></div><NotificationsUnread className="size-8 text-blue-600" aria-hidden="true" /></div>
    <div className="mt-5 space-y-3">
      {["Confirmar cita de seguimiento", "Revisar próximo refuerzo", "Actualizar contacto de emergencia"].map((item, index) => <div key={item} className="flex gap-3 rounded-2xl border border-slate-100 p-3"><span className={`mt-1 size-2.5 shrink-0 rounded-full ${index === 0 ? "bg-blue-600" : "bg-slate-300"}`} /><div><p className="text-sm font-bold text-slate-900">{item}</p><p className="mt-1 text-xs text-slate-500">{index === 0 ? "Para esta semana" : "Cuando tú lo decidas"}</p></div></div>)}
    </div>
  </div>
);

const HealthFeatureVisual = ({ type }) => {
  if (type === "access") return <AccessVisual />;
  if (type === "reminders") return <ReminderVisual />;
  return <AppointmentVisual />;
};

export default HealthFeatureVisual;
