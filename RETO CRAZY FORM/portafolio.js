// Portafolio_Web_Analisis_Datos - Single-file React component (App.jsx)
// Instrucciones rápidas:
// 1) Crear proyecto (Vite recommended): `npm create vite@latest my-portfolio --template react`
// 2) Instalar dependencias: `npm install recharts tailwindcss@latest postcss@latest autoprefixer@latest`
// 3) Configurar Tailwind según su guía oficial (crear tailwind.config.cjs y @tailwind directives en index.css)
// 4) Copiar este archivo como `src/App.jsx`, ejecutar `npm run dev`.
// Reemplaza `SAMPLE_DATA` con tus datos reales (CSV o API). Las visualizaciones usan recharts.

import React, { useMemo, useState } from 'react'
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  BarChart, Bar, Legend
} from 'recharts'

// --- Datos de ejemplo (reemplazar con tus datos reales) ---
const SAMPLE_DATA = [
  { date: '2025-01-01', area: 'Soporte', incidents: 12, sla_pct: 92, satisfaction: 4.1 },
  { date: '2025-02-01', area: 'Operaciones', incidents: 8, sla_pct: 95, satisfaction: 4.4 },
  { date: '2025-03-01', area: 'Soporte', incidents: 15, sla_pct: 88, satisfaction: 3.8 },
  { date: '2025-04-01', area: 'Infra', incidents: 6, sla_pct: 97, satisfaction: 4.7 },
  { date: '2025-05-01', area: 'Operaciones', incidents: 10, sla_pct: 93, satisfaction: 4.2 },
  { date: '2025-06-01', area: 'Soporte', incidents: 9, sla_pct: 94, satisfaction: 4.3 }
]

export default function App() {
  const [data] = useState(SAMPLE_DATA)
  const [areaFilter, setAreaFilter] = useState('Todos')
  const [fromDate, setFromDate] = useState('2025-01-01')
  const [toDate, setToDate] = useState('2025-12-31')

  // Filtrado y agregados
  const areas = useMemo(() => ['Todos', ...Array.from(new Set(data.map(d => d.area)))], [data])

  const filtered = useMemo(() => {
    const from = new Date(fromDate)
    const to = new Date(toDate)
    return data.filter(d => {
      const dt = new Date(d.date)
      const okArea = areaFilter === 'Todos' ? true : d.area === areaFilter
      return okArea && dt >= from && dt <= to
    })
  }, [data, areaFilter, fromDate, toDate])

  const metrics = useMemo(() => {
    if (filtered.length === 0) return { totalIncidents: 0, avgSLA: 0, avgSat: 0 }
    const totalIncidents = filtered.reduce((s, r) => s + r.incidents, 0)
    const avgSLA = (filtered.reduce((s, r) => s + r.sla_pct, 0) / filtered.length).toFixed(1)
    const avgSat = (filtered.reduce((s, r) => s + r.satisfaction, 0) / filtered.length).toFixed(2)
    return { totalIncidents, avgSLA, avgSat }
  }, [filtered])

  return (
    <div className="min-h-screen bg-gray-50 p-6 font-sans">
      <header className="max-w-6xl mx-auto mb-6">
        <h1 className="text-2xl font-bold">Portafolio — Análisis de Datos & Automatización</h1>
        <p className="text-sm text-gray-600">Paola Andrea García Tangarife — Ejemplos de dashboards y procesos automatizados</p>
      </header>

      <main className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left: filtros y métricas */}
        <aside className="col-span-1 bg-white rounded-lg p-4 shadow-sm">
          <h2 className="font-semibold mb-2">Controles</h2>

          <label className="block text-xs text-gray-500">Área</label>
          <select value={areaFilter} onChange={e => setAreaFilter(e.target.value)} className="w-full p-2 border rounded mb-3">
            {areas.map(a => <option key={a} value={a}>{a}</option>)}
          </select>

          <label className="block text-xs text-gray-500">Desde</label>
          <input type="date" value={fromDate} onChange={e => setFromDate(e.target.value)} className="w-full p-2 border rounded mb-2" />

          <label className="block text-xs text-gray-500">Hasta</label>
          <input type="date" value={toDate} onChange={e => setToDate(e.target.value)} className="w-full p-2 border rounded mb-4" />

          <div className="grid grid-cols-1 gap-2">
            <div className="p-3 bg-gradient-to-r from-blue-50 to-white rounded">
              <div className="text-sm text-gray-500">Incidentes (Total)</div>
              <div className="text-lg font-bold">{metrics.totalIncidents}</div>
            </div>
            <div className="p-3 bg-gradient-to-r from-green-50 to-white rounded">
              <div className="text-sm text-gray-500">SLA promedio (%)</div>
              <div className="text-lg font-bold">{metrics.avgSLA}</div>
            </div>
            <div className="p-3 bg-gradient-to-r from-yellow-50 to-white rounded">
              <div className="text-sm text-gray-500">Satisfacción promedio</div>
              <div className="text-lg font-bold">{metrics.avgSat}</div>
            </div>
          </div>

        </aside>

        {/* Middle + Right: visualizaciones */}
        <section className="col-span-2 space-y-6">
          <div className="bg-white p-4 rounded shadow-sm">
            <h3 className="font-semibold mb-2">Tendencia de Incidentes</h3>
            <div style={{ width: '100%', height: 260 }}>
              <ResponsiveContainer>
                <LineChart data={filtered} margin={{ top: 10, right: 20, left: -10, bottom: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="date" />
                  <YAxis />
                  <Tooltip />
                  <Line type="monotone" dataKey="incidents" stroke="#1f4e79" strokeWidth={2} />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white p-4 rounded shadow-sm">
              <h3 className="font-semibold mb-2">SLA por período</h3>
              <div style={{ width: '100%', height: 220 }}>
                <ResponsiveContainer>
                  <BarChart data={filtered}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="date" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="sla_pct" name="SLA (%)" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>

            <div className="bg-white p-4 rounded shadow-sm">
              <h3 className="font-semibold mb-2">Tabla de Datos</h3>
              <div className="overflow-x-auto">
                <table className="min-w-full text-sm">
                  <thead className="bg-gray-100 text-left">
                    <tr>
                      <th className="p-2">Fecha</th>
                      <th className="p-2">Área</th>
                      <th className="p-2">Incidentes</th>
                      <th className="p-2">SLA %</th>
                      <th className="p-2">Satisfacción</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filtered.map((r, i) => (
                      <tr key={i} className="border-b">
                        <td className="p-2">{r.date}</td>
                        <td className="p-2">{r.area}</td>
                        <td className="p-2">{r.incidents}</td>
                        <td className="p-2">{r.sla_pct}</td>
                        <td className="p-2">{r.satisfaction}</td>
                      </tr>
                    ))}
                    {filtered.length === 0 && (
                      <tr><td colSpan={5} className="p-3 text-center text-gray-500">Sin datos para el rango seleccionado</td></tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <div className="bg-white p-4 rounded shadow-sm">
            <h3 className="font-semibold mb-2">Descripción del proyecto</h3>
            <p className="text-sm text-gray-700">Este sitio demuestra análisis de datos aplicado a métricas operacionales (SLAs, incidentes y satisfacción). Se usa para evidenciar habilidades en extracción, limpieza, visualización y toma de decisiones. Puede integrarse con automatizaciones (Control-M, BMC APIs) para alimentar datos en tiempo real.</p>
            <p className="text-xs text-gray-500 mt-2">Cómo personalizar: conecta una API, sube un CSV, o usa Google Sheets + Apps Script para exponer un endpoint JSON. Puedo ayudarte a integrar tu dataset real.</p>
          </div>

        </section>
      </main>

      <footer className="max-w-6xl mx-auto mt-8 text-center text-xs text-gray-500">Portafolio generado por Paola — listo para conectar tus datos reales.</footer>
    </div>
  )
}
