import React, { useState } from 'react';
import { LayoutDashboard, GraduationCap, History, BarChart2, TrendingUp, Calendar, LineChart, Stethoscope } from 'lucide-react';
import ExecutiveReport from './components/ExecutiveReport';
import ComparisonTable from './components/ComparisonTable';
import FluencyChart from './components/FluencyChart';
import HistoricalTrend from './components/HistoricalTrend';
import SchoolAnalysis from './components/SchoolAnalysis';
import { RecommendationsPL4, ActionPlanPL1 } from './components/ActionPlan';
import { DATASET_2023, DATASET_2024, DATASET_2025, DATASET_COMPARE_23_24, DATASET_COMPARE_24_25 } from './constants';
import { ViewMode } from './types';

function App() {
  const [viewMode, setViewMode] = useState<ViewMode>('2025');

  const getActiveData = () => {
    switch (viewMode) {
      case '2023': return DATASET_2023;
      case 'compare23_24': return DATASET_COMPARE_23_24;
      case '2024': return DATASET_2024;
      case 'compare24_25': return DATASET_COMPARE_24_25;
      case '2025': 
      default: return DATASET_2025;
    }
  };

  const activeData = getActiveData();

  // Define if we should show standard dashboard components
  const showStandardDashboard = !['trend_23_25', 'school_analysis'].includes(viewMode);

  return (
    <div className="min-h-screen bg-slate-50 pb-12">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-slate-200 sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="bg-blue-600 p-2 rounded text-white">
              <LayoutDashboard size={20} />
            </div>
            <h1 className="text-xl font-bold text-slate-800">EduMetric <span className="text-slate-400 font-light">| Pindamonhangaba</span></h1>
          </div>
          <div className="flex items-center gap-2 text-sm text-slate-500">
             <GraduationCap size={16} />
             <span>Análise Estratégica de Fluência</span>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        
        {/* Navigation Tabs */}
        <div className="overflow-x-auto pb-4 mb-4 custom-scrollbar">
          <div className="flex gap-3 min-w-max items-center">
            
            {/* 1. Diagnóstico 2023 */}
             <button 
              onClick={() => setViewMode('2023')}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-wide transition-all shadow-sm border ${viewMode === '2023' ? 'bg-slate-800 text-white border-slate-800' : 'bg-white text-slate-600 hover:bg-slate-50 border-slate-200'}`}
            >
              <Calendar size={14} />
              2023
            </button>

            {/* 2. Diagnóstico 2024 */}
             <button 
              onClick={() => setViewMode('2024')}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-wide transition-all shadow-sm border ${viewMode === '2024' ? 'bg-slate-800 text-white border-slate-800' : 'bg-white text-slate-600 hover:bg-slate-50 border-slate-200'}`}
            >
              <History size={14} />
              2024
            </button>

            {/* 3. Diagnóstico 2025 */}
            <button 
              onClick={() => setViewMode('2025')}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-wide transition-all shadow-sm border ${viewMode === '2025' ? 'bg-blue-600 text-white border-blue-600' : 'bg-white text-slate-600 hover:bg-slate-50 border-slate-200'}`}
            >
              <BarChart2 size={14} />
              2025
            </button>

            <div className="w-px h-8 bg-slate-300 mx-1"></div>

            {/* 4. Comparativo 23/24 */}
            <button 
              onClick={() => setViewMode('compare23_24')}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-wide transition-all shadow-sm border ${viewMode === 'compare23_24' ? 'bg-indigo-600 text-white border-indigo-600' : 'bg-white text-indigo-700 hover:bg-indigo-50 border-indigo-100'}`}
            >
              <TrendingUp size={14} />
              Comp 23/24
            </button>

             {/* 5. Comparativo 24/25 */}
            <button 
              onClick={() => setViewMode('compare24_25')}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-wide transition-all shadow-sm border ${viewMode === 'compare24_25' ? 'bg-emerald-600 text-white border-emerald-600' : 'bg-white text-emerald-700 hover:bg-emerald-50 border-emerald-100'}`}
            >
              <TrendingUp size={14} />
              Comp 24/25
            </button>

            <div className="w-px h-8 bg-slate-300 mx-1"></div>

             {/* 6. Tendência Histórica */}
            <button 
              onClick={() => setViewMode('trend_23_25')}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-wide transition-all shadow-sm border ${viewMode === 'trend_23_25' ? 'bg-purple-600 text-white border-purple-600' : 'bg-white text-purple-700 hover:bg-purple-50 border-purple-100'}`}
            >
              <LineChart size={14} />
              Tendência 23-25
            </button>

             {/* 7. Olhar Clínico */}
             <button 
              onClick={() => setViewMode('school_analysis')}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-wide transition-all shadow-sm border ${viewMode === 'school_analysis' ? 'bg-rose-600 text-white border-rose-600' : 'bg-white text-rose-700 hover:bg-rose-50 border-rose-100'}`}
            >
              <Stethoscope size={14} />
              Escolas
            </button>

          </div>
        </div>

        {/* Dynamic Content Rendering */}
        
        {viewMode === 'trend_23_25' && (
          <HistoricalTrend />
        )}

        {viewMode === 'school_analysis' && (
          <SchoolAnalysis />
        )}

        {showStandardDashboard && (
          <>
            <ExecutiveReport data={activeData} viewMode={viewMode} />
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <ComparisonTable data={activeData} viewMode={viewMode} />
              <FluencyChart data={activeData} viewMode={viewMode} />
            </div>
            <div className="mt-8">
              <h2 className="text-2xl font-bold text-slate-800 mb-6 border-l-4 border-indigo-600 pl-4">Intervenções e Encaminhamentos</h2>
              <RecommendationsPL4 />
              <ActionPlanPL1 />
            </div>
          </>
        )}
        
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-slate-200 mt-12 py-8">
        <div className="max-w-7xl mx-auto px-4 text-center text-slate-400 text-sm">
          <p>© 2025 EduMetric Analytics. Baseado nos dados CAEd - Avaliação de Fluência Leitora.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
