"use client";

import Link from "next/link";
import { Lock, Policy, VerifiedUser } from "@material-symbols-svg/react";
import { motion } from "framer-motion";

const FRAMEWORK = [
  { icon: Lock, title: "Datos sensibles de salud", text: "La LFPDPPP establece principios para el tratamiento de datos personales; los datos de salud requieren protección reforzada y consentimiento expreso cuando corresponda." },
  { icon: Policy, title: "Derechos y atención en salud", text: "La Ley General de Salud orienta el uso responsable de información y servicios de salud, incluido el contexto de salud digital." },
  { icon: VerifiedUser, title: "Expediente y sistemas electrónicos", text: "NOM-004-SSA3-2012 y NOM-024-SSA3-2012 son referentes sectoriales cuando una solución gestiona expediente clínico o sistemas de registro electrónico en salud." },
];

const NOM_GUIDE = [
  {
    name: "NOM-004-SSA3-2012",
    focus: "Expediente clínico",
    explanation:
      "Define cómo debe elaborarse, integrarse, manejarse, conservarse y protegerse la información clínica de una persona paciente.",
    evidence: "Notas e información ordenada, confidencial, atribuible a quien la registra y conservada conforme a las obligaciones aplicables.",
    applies: "Cuando la solución integra o administra expedientes clínicos y atención médica.",
  },
  {
    name: "NOM-024-SSA3-2012",
    focus: "Sistema electrónico de salud",
    explanation:
      "Regula los sistemas digitales que registran, procesan o intercambian información de salud, incluidos los expedientes clínicos electrónicos.",
    evidence: "Autenticación, acceso por roles, trazabilidad, integridad y controles para el intercambio seguro de información.",
    applies: "Cuando la solución funciona como sistema de registro electrónico de salud o intercambia información clínica.",
  },
];

const ProtectionSection = () => (
  <section id="proteccion" className="scroll-mt-28 bg-surface-raised rounded-48 px-5 py-16 md:px-15">
    <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="mx-auto max-w-300">
      <div className="max-w-3xl">
        <p className="font-bold uppercase text-content-text-brand">Protección de tu información</p>
        <h2 className="mt-3 font-domine font-bold text-h1 text-content-text-primary">Privacidad y confidencialidad desde el diseño</h2>
        <p className="mt-5 text-lg text-content-text-secondary">Tarjeto Salud considera el marco aplicable para el manejo responsable de información de salud. No afirma certificación ni cumplimiento operativo.</p>
      </div>
      <div className="mt-10 grid gap-5 md:grid-cols-3">
        {FRAMEWORK.map(({ icon: Icon, title, text }) => (
          <article key={title} className="rounded-32 border border-border-default bg-surface-base p-6 shadow-md">
            <Icon className="size-9 text-content-icon-brand" aria-hidden="true" />
            <h3 className="mt-5 text-xl font-bold text-content-text-primary">{title}</h3>
            <p className="mt-3 text-content-text-secondary">{text}</p>
          </article>
        ))}
      </div>
      <div className="mt-8 rounded-32 border border-blue-200 bg-blue-50/60 p-6 md:p-8">
        <div className="max-w-3xl">
          <p className="font-bold uppercase tracking-wider text-blue-700">Guía para exposición</p>
          <h3 className="mt-2 font-domine text-3xl font-bold text-slate-900">NOM-004 y NOM-024: no son lo mismo</h3>
          <p className="mt-3 text-slate-600">La primera se enfoca en la información clínica; la segunda, en la tecnología que la registra o intercambia.</p>
        </div>
        <div className="mt-6 grid gap-5 lg:grid-cols-2">
          {NOM_GUIDE.map((norm) => (
            <article key={norm.name} className="rounded-2xl border border-blue-100 bg-white p-5 shadow-sm">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <h4 className="font-bold text-blue-700">{norm.name}</h4>
                <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-bold text-blue-700">{norm.focus}</span>
              </div>
              <p className="mt-4 text-slate-700">{norm.explanation}</p>
              <div className="mt-4 border-t border-slate-100 pt-4">
                <p className="text-xs font-bold uppercase tracking-wider text-slate-500">¿Qué demuestra Tarjeto Salud?</p>
                <p className="mt-1 text-sm text-slate-700">{norm.evidence}</p>
              </div>
              <div className="mt-4 rounded-xl bg-slate-50 p-3">
                <p className="text-xs font-bold text-slate-600">¿Cuándo aplica?</p>
                <p className="mt-1 text-sm text-slate-600">{norm.applies}</p>
              </div>
            </article>
          ))}
        </div>
        <p className="mt-5 rounded-xl border border-blue-100 bg-white p-4 text-sm text-slate-700"><strong className="text-slate-900">Idea clave:</strong> una app de recordatorios no se vuelve automáticamente un expediente clínico electrónico; estas NOM cobran especial relevancia cuando almacena, administra o intercambia información clínica real.</p>
      </div>
      <div className="mt-8 rounded-2xl border border-border-default p-5 text-content-text-secondary">
        <p><strong className="text-content-text-primary">Uso responsable.</strong> Tarjeto Salud puede tratar datos de salud conforme al Aviso de privacidad; no realiza diagnósticos, no prescribe tratamientos y no atiende emergencias. Ante una urgencia, llama al 911 o contacta a un profesional de salud.</p>
        <div className="mt-4 flex flex-wrap gap-x-5 gap-y-2 text-content-text-brand font-bold">
          <Link href="/privacy-policy" className="hover:underline">Aviso de privacidad</Link>
          <Link href="/confidencialidad" className="hover:underline">Aviso de confidencialidad</Link>
          <Link href="/terms" className="hover:underline">Deslinde de responsabilidad</Link>
        </div>
      </div>
    </motion.div>
  </section>
);

export default ProtectionSection;
