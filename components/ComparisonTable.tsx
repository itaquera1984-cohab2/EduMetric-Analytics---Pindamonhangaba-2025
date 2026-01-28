import React from 'react';
import { ArrowUpRight, ArrowDownRight } from 'lucide-react';
import { DataSet } from '../types';

interface ComparisonTableProps {
  data: DataSet;
  viewMode: string;
}

const ComparisonTable: React.FC<ComparisonTableProps> = ({ data, viewMode }) => {
  const { entrance, exit, levels } = data;

  // Calculations
  const iflGrowth = (exit.metrics.ifl - entrance.metrics.ifl).toFixed(1);
  
  // Sum of PL1 + PL2
  const pl1_pl2_entrance = levels.find(l => l.id === 'pl1')!.percentageEntrance + levels.find(l => l.id === 'pl2')!.percentageEntrance;
  const pl1_pl2_exit = levels.find(l => l.id === 'pl1')!.percentageExit + levels.find(l => l.id === 'pl2')!.percentageExit;
  const reductionPl1Pl2 = (pl1_pl2_entrance - pl1_pl2_exit).toFixed(1);

  // Fluent increase
  const fluentEntrance = levels.find(l => l.id === 'lf')!.percentageEntrance;
  const fluentExit = levels.find(l => l.id === 'lf')!.percentageExit;
  const increaseFluent = (fluentExit - fluentEntrance).toFixed(1);

  // Participation
  const partEntrance = entrance.metrics.participation;
  const partExit = exit.metrics.participation;
  const partGrowth = (partExit - partEntrance).toFixed(1);

  const isComparison = viewMode.startsWith('compare');
  
  let columnLabel1 = entrance.name;
  let columnLabel2 = exit.name;
  let growthLabel = 'Evolução no Ciclo';

  if (viewMode === 'compare24_25') {
    columnLabel1 = 'Saída 2024';
    columnLabel2 = 'Saída 2025';
    growthLabel = 'Crescimento Interanual';
  } else if (viewMode === 'compare23_24') {
    columnLabel1 = 'Saída 2023';
    columnLabel2 = 'Saída 2024';
    growthLabel = 'Crescimento Interanual';
  }

  return (
    <div className="bg-white rounded-lg shadow p-6 mb-8">
      <h3 className="text-xl font-bold text-slate-800 mb-4 border-b pb-2">
        {isComparison ? 'Comparativo de Resultados Finais' : 'Comparativo Entrada vs Saída'}
      </h3>
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-slate-100 text-slate-600 text-sm uppercase tracking-wider">
              <th className="p-4 border-b">Indicador</th>
              <th className="p-4 border-b">{columnLabel1}</th>
              <th className="p-4 border-b">{columnLabel2}</th>
              <th className="p-4 border-b">{growthLabel}</th>
            </tr>
          </thead>
          <tbody className="text-slate-700">
            <tr className="border-b hover:bg-slate-50">
              <td className="p-4 font-semibold">IFL (Índice de Fluência Leitora)</td>
              <td className="p-4 text-slate-500">{entrance.metrics.ifl}</td>
              <td className="p-4 text-slate-500">{exit.metrics.ifl}</td>
              <td className="p-4 text-emerald-600 font-bold flex items-center gap-1">
                {parseFloat(iflGrowth) >= 0 ? <ArrowUpRight size={16} /> : <ArrowDownRight size={16} />}
                {parseFloat(iflGrowth) >= 0 ? '+' : ''}{iflGrowth} pontos
              </td>
            </tr>
            <tr className="border-b hover:bg-slate-50">
              <td className="p-4 font-semibold">% Redução (Pré-leitor 1 e 2)</td>
              <td className="p-4 text-slate-500">{pl1_pl2_entrance}%</td>
              <td className="p-4 text-slate-500">{pl1_pl2_exit}%</td>
              <td className="p-4 text-emerald-600 font-bold flex items-center gap-1">
                <ArrowDownRight size={16} /> {reductionPl1Pl2 > '0' ? '-' : ''}{reductionPl1Pl2} p.p.
              </td>
            </tr>
            <tr className="border-b hover:bg-slate-50">
              <td className="p-4 font-semibold">% Aumento (Leitor Fluente)</td>
              <td className="p-4 text-slate-500">{fluentEntrance}%</td>
              <td className="p-4 text-slate-500">{fluentExit}%</td>
              <td className="p-4 text-emerald-600 font-bold flex items-center gap-1">
                {parseFloat(increaseFluent) >= 0 ? <ArrowUpRight size={16} /> : <ArrowDownRight size={16} />}
                {parseFloat(increaseFluent) >= 0 ? '+' : ''}{increaseFluent} p.p.
              </td>
            </tr>
            <tr className="hover:bg-slate-50">
              <td className="p-4 font-semibold text-slate-600">Taxa de Participação</td>
              <td className="p-4 text-slate-500">{partEntrance}%</td>
              <td className="p-4 text-slate-500">{partExit}%</td>
              <td className="p-4 text-emerald-600 font-bold flex items-center gap-1">
                 {parseFloat(partGrowth) >= 0 ? <ArrowUpRight size={16} /> : <ArrowDownRight size={16} />} 
                 {parseFloat(partGrowth) >= 0 ? '+' : ''}{partGrowth} p.p.
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ComparisonTable;
