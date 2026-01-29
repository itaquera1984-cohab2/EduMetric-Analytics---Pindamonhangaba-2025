import React, { useState } from 'react';
import { SCHOOLS_2024, SCHOOLS_2025 } from '../constants';
import { SchoolResult } from '../types';
import { Stethoscope, Search, AlertTriangle, CheckCircle, ListFilter } from 'lucide-react';

// 1. Visualization: Fluency Levels (PL vs LI vs LF)
const FluencyLevelBar: React.FC<{ school: SchoolResult }> = ({ school }) => {
  return (
    <div className="mb-4 group hover:bg-slate-50 p-3 rounded transition-colors border-b border-slate-100 last:border-0">
      <div className="flex justify-between items-end mb-1">
        <span className="text-sm font-semibold text-slate-700 truncate w-2/3" title={school.name}>
          {school.name}
        </span>
        <div className="text-xs font-medium text-slate-500">
          <span className="text-amber-600">PL: {school.pl}%</span> | 
          <span className="text-emerald-500"> LI: {school.li}%</span> | 
          <span className="text-emerald-700 font-bold"> LF: {school.lf}%</span>
        </div>
      </div>
      <div className="w-full h-4 bg-slate-200 rounded-full overflow-hidden flex text-[10px] leading-4 text-white font-bold text-center">
        {school.pl > 0 && (
          <div style={{ width: `${school.pl}%` }} className="bg-amber-300 flex items-center justify-center transition-all hover:bg-amber-400" title={`Pré-leitor: ${school.pl}%`}>
            {school.pl >= 5 && `${school.pl}%`}
          </div>
        )}
        {school.li > 0 && (
          <div style={{ width: `${school.li}%` }} className="bg-emerald-300 flex items-center justify-center transition-all hover:bg-emerald-400" title={`Leitor Iniciante: ${school.li}%`}>
            {school.li >= 5 && `${school.li}%`}
          </div>
        )}
        {school.lf > 0 && (
          <div style={{ width: `${school.lf}%` }} className="bg-emerald-600 flex items-center justify-center transition-all hover:bg-emerald-700" title={`Leitor Fluente: ${school.lf}%`}>
            {school.lf >= 5 && `${school.lf}%`}
          </div>
        )}
      </div>
    </div>
  );
};

const SchoolAnalysis: React.FC = () => {
  const [year, setYear] = useState<'2024' | '2025'>('2025');
  const [filter, setFilter] = useState('');
  
  // Filters state
  const [showHighPerf, setShowHighPerf] = useState(false);
  const [showAlert, setShowAlert] = useState(false);

  const currentData = year === '2025' ? SCHOOLS_2025 : SCHOOLS_2024;
  
  // Sort by Lowest PL (Best first)
  const processedData = [...currentData].sort((a, b) => a.pl - b.pl);

  const filteredData = processedData.filter(s => {
    const matchesSearch = s.name.toLowerCase().includes(filter.toLowerCase());
    
    let matchesCardFilter = true;
    
    // Fluency logic
    const isHighPerf = (s.li + s.lf) >= 90;
    const isCritical = s.pl >= 20;

    if (showHighPerf) matchesCardFilter = isHighPerf;
    if (showAlert) matchesCardFilter = isCritical;

    return matchesSearch && matchesCardFilter;
  });

  // Calculate stats for cards
  const fluencyCriticalCount = currentData.filter(s => s.pl >= 20).length;
  const fluencyHighPerfCount = currentData.filter(s => (s.li + s.lf) >= 90).length;

  return (
    <div className="bg-white rounded-lg shadow p-6">
      {/* Header & Controls */}
      <div className="flex flex-col gap-6 border-b pb-6 mb-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <h3 className="text-xl font-bold text-slate-800 flex items-center gap-2">
              <Stethoscope className="text-blue-600" />
              Olhar Clínico por Unidade Escolar
            </h3>
            <p className="text-sm text-slate-500">Análise detalhada de performance por unidade escolar (Entrada/Saída).</p>
          </div>
          
          <div className="flex items-center bg-slate-100 rounded-lg p-1">
            <button 
              onClick={() => setYear('2024')}
              className={`px-4 py-2 text-sm font-medium rounded-md transition-all ${year === '2024' ? 'bg-white text-slate-800 shadow-sm' : 'text-slate-500 hover:text-slate-700'}`}
            >
              2024
            </button>
            <button 
              onClick={() => setYear('2025')}
              className={`px-4 py-2 text-sm font-medium rounded-md transition-all ${year === '2025' ? 'bg-blue-600 text-white shadow-sm' : 'text-slate-500 hover:text-slate-700'}`}
            >
              2025
            </button>
          </div>
        </div>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        
        <div className={`p-4 rounded border flex items-center gap-3 relative transition-all ${showAlert ? 'bg-red-100 border-red-300 ring-2 ring-red-400' : 'bg-red-50 border-red-100'}`}>
          <div className="bg-red-100 p-2 rounded-full text-red-600">
            <AlertTriangle size={20} />
          </div>
          <div>
            <span className="block text-2xl font-bold text-red-700">{fluencyCriticalCount}</span>
            <span className="text-xs text-red-600 uppercase font-bold">Escolas em Alerta</span>
            <span className="text-xs text-red-500 block">Mais de 20% de Pré-leitores</span>
          </div>
          <button 
            onClick={() => { setShowAlert(!showAlert); setShowHighPerf(false); }}
            className={`absolute right-4 top-1/2 -translate-y-1/2 px-3 py-1.5 rounded text-xs font-bold flex items-center gap-1 transition-colors ${showAlert ? 'bg-red-600 text-white' : 'bg-white text-red-700 border border-red-200 hover:bg-red-50'}`}
          >
            <ListFilter size={14} /> {showAlert ? 'Ver todas' : 'Ver lista'}
          </button>
        </div>

        <div className={`p-4 rounded border flex items-center gap-3 relative transition-all ${showHighPerf ? 'bg-emerald-100 border-emerald-300 ring-2 ring-emerald-400' : 'bg-emerald-50 border-emerald-100'}`}>
          <div className="bg-emerald-100 p-2 rounded-full text-emerald-600">
            <CheckCircle size={20} />
          </div>
          <div>
            <span className="block text-2xl font-bold text-emerald-700">{fluencyHighPerfCount}</span>
            <span className="text-xs text-emerald-600 uppercase font-bold">Alta Performance</span>
            <span className="text-xs text-emerald-500 block">Acima de 90% de Leitores</span>
          </div>
          <button 
            onClick={() => { setShowHighPerf(!showHighPerf); setShowAlert(false); }}
            className={`absolute right-4 top-1/2 -translate-y-1/2 px-3 py-1.5 rounded text-xs font-bold flex items-center gap-1 transition-colors ${showHighPerf ? 'bg-emerald-600 text-white' : 'bg-white text-emerald-700 border border-emerald-200 hover:bg-emerald-50'}`}
          >
            <ListFilter size={14} /> {showHighPerf ? 'Ver todas' : 'Ver lista'}
          </button>
        </div>
      </div>

      <div className="mb-6 relative">
        <Search className="absolute left-3 top-3 text-slate-400" size={18} />
        <input 
          type="text" 
          placeholder="Buscar unidade escolar..." 
          className="w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none text-slate-700"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        />
      </div>

      <div className="space-y-1 h-[600px] overflow-y-auto pr-2 custom-scrollbar">
        {filteredData.length > 0 ? (
          filteredData.map((school, idx) => (
            <FluencyLevelBar key={idx} school={school} />
          ))
        ) : (
          <p className="text-center text-slate-500 py-10">
            Nenhuma escola encontrada com os filtros selecionados.
          </p>
        )}
      </div>
      
      <div className="mt-4 pt-4 border-t text-xs text-slate-400 flex justify-between">
        <span>* Dados extraídos das avaliações de saída CAEd.</span>
        
        <div className="flex gap-4">
          <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-amber-300"></span> Pré-leitor</span>
          <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-emerald-300"></span> Leitor Iniciante</span>
          <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-emerald-600"></span> Leitor Fluente</span>
        </div>
      </div>
    </div>
  );
};

export default SchoolAnalysis;