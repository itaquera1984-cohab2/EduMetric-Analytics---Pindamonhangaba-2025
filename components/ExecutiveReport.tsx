import React from 'react';
import { Award } from 'lucide-react';
import { DataSet } from '../types';

interface ExecutiveReportProps {
  data: DataSet;
  viewMode: string;
}

const ExecutiveReport: React.FC<ExecutiveReportProps> = ({ data, viewMode }) => {
  const { entrance, exit, levels, reportTitle, reportContext } = data;
  
  const participationGrowth = (exit.metrics.participation - entrance.metrics.participation).toFixed(1);
  const iflGrowth = (exit.metrics.ifl - entrance.metrics.ifl).toFixed(1);
  
  // Logic specifically for PL1 reduction calculation
  const pl1_entrance = levels.find(l => l.id === 'pl1')!.percentageEntrance;
  const pl1_exit = levels.find(l => l.id === 'pl1')!.percentageExit;
  const pl1_reduction_relative = pl1_entrance > 0 
    ? ((pl1_entrance - pl1_exit) / pl1_entrance * 100).toFixed(0) 
    : '0';

  const fluentGrowth = levels.find(l => l.id === 'lf')!.percentageExit - levels.find(l => l.id === 'lf')!.percentageEntrance;
  const pl4_percentage = levels.find(l => l.id === 'pl4')!.percentageExit;

  const comparisonText = viewMode === 'compare' 
    ? `Analisando a evolução interanual, observamos que o município superou o patamar de saída do ano anterior (6,5) atingindo 7,2 em 2025. Isso representa um ganho real de aprendizagem e consolidação das políticas de alfabetização.`
    : `O deslocamento positivo da curva de aprendizado é evidente: o percentual de alunos considerados "Leitores Iniciantes" e "Fluentes" saltou de ${entrance.metrics.beginnerPlusFluent}% para ${exit.metrics.beginnerPlusFluent}%.`;

  return (
    <div className="bg-slate-50 border border-slate-200 rounded-lg p-8 mb-8">
      <div className="flex items-center gap-3 mb-6">
        <div className="p-3 bg-blue-100 rounded-full text-blue-700">
          <Award size={24} />
        </div>
        <div>
          <h2 className="text-2xl font-bold text-slate-800">{reportTitle}</h2>
          <p className="text-slate-500">Pindamonhangaba - Rede Pública</p>
        </div>
      </div>

      <div className="prose text-slate-700 max-w-none">
        <p className="text-lg mb-4 leading-relaxed">
          {reportContext} O <strong>IFL avançou +{iflGrowth} pontos</strong> neste período comparativo. 
          A cobertura da avaliação (participação) atingiu {exit.metrics.participation}%, garantindo alta confiabilidade nos dados.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 my-6">
            <div className="bg-white p-4 rounded shadow-sm border-l-4 border-emerald-500">
                <p className="text-sm text-slate-500 font-semibold uppercase">Salto de Qualidade</p>
                <p className="text-3xl font-bold text-emerald-600">+{fluentGrowth}%</p>
                <p className="text-xs text-slate-500">Crescimento de Leitores Fluentes</p>
            </div>
             <div className="bg-white p-4 rounded shadow-sm border-l-4 border-blue-500">
                <p className="text-sm text-slate-500 font-semibold uppercase">Redução de Defasagem</p>
                <p className="text-3xl font-bold text-blue-600">-{pl1_reduction_relative}%</p>
                <p className="text-xs text-slate-500">Redução relativa de Não-Leitores (PL1)</p>
            </div>
             <div className="bg-white p-4 rounded shadow-sm border-l-4 border-amber-500">
                <p className="text-sm text-slate-500 font-semibold uppercase">Foco Atual</p>
                <p className="text-3xl font-bold text-amber-600">{pl4_percentage}%</p>
                <p className="text-xs text-slate-500">Alunos em transição (PL4)</p>
            </div>
            <div className="bg-white p-4 rounded shadow-sm border-l-4 border-indigo-500">
                <p className="text-sm text-slate-500 font-semibold uppercase">Engajamento</p>
                <p className="text-3xl font-bold text-indigo-600">{exit.metrics.participation}%</p>
                <p className="text-xs text-slate-500">Participação (+{participationGrowth} p.p.)</p>
            </div>
        </div>

        <p className="mb-4">
          {comparisonText}
        </p>
      </div>
    </div>
  );
};

export default ExecutiveReport;
