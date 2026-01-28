import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { DataSet } from '../types';
import { LEVELS_2023, LEVELS_2024, LEVELS_2025 } from '../constants';

interface FluencyChartProps {
  data: DataSet;
  viewMode: string;
}

const FluencyChart: React.FC<FluencyChartProps> = ({ data, viewMode }) => {
  let chartData: any[] = [];
  let isComparison = false;
  let barConfig: any[] = [];
  let title = '';

  if (viewMode === 'compare23_24') {
    isComparison = true;
    title = 'Evolução Interanual Completa (Entrada/Saída 23 vs 24)';
    chartData = LEVELS_2023.map((l23, i) => {
      const l24 = LEVELS_2024[i];
      return {
        name: l23.label.split('(')[0].trim(),
        fullLabel: l23.label,
        'Entrada 23': l23.percentageEntrance,
        'Saída 23': l23.percentageExit,
        'Entrada 24': l24.percentageEntrance,
        'Saída 24': l24.percentageExit,
      };
    });
    barConfig = [
      { key: 'Entrada 23', color: '#cbd5e1' }, // Slate 300
      { key: 'Saída 23', color: '#64748b' },   // Slate 500
      { key: 'Entrada 24', color: '#86efac' }, // Green 300
      { key: 'Saída 24', color: '#16a34a' },   // Green 600
    ];

  } else if (viewMode === 'compare24_25') {
    isComparison = true;
    title = 'Evolução Interanual Completa (Entrada/Saída 24 vs 25)';
    chartData = LEVELS_2024.map((l24, i) => {
      const l25 = LEVELS_2025[i];
      return {
        name: l24.label.split('(')[0].trim(),
        fullLabel: l24.label,
        'Entrada 24': l24.percentageEntrance,
        'Saída 24': l24.percentageExit,
        'Entrada 25': l25.percentageEntrance,
        'Saída 25': l25.percentageExit,
      };
    });
    barConfig = [
      { key: 'Entrada 24', color: '#cbd5e1' }, // Slate 300
      { key: 'Saída 24', color: '#64748b' },   // Slate 500
      { key: 'Entrada 25', color: '#86efac' }, // Green 300
      { key: 'Saída 25', color: '#16a34a' },   // Green 600
    ];

  } else {
    // Standard Single Year View
    isComparison = false;
    title = 'Evolução no Ciclo (%)';
    chartData = data.levels.map(level => ({
      name: level.label.split('(')[0].trim(),
      fullLabel: level.label,
      Entrada: level.percentageEntrance,
      Saída: level.percentageExit,
    }));
    barConfig = [
      { key: 'Entrada', color: '#94a3b8' },
      { key: 'Saída', color: '#10b981' },
    ];
  }

  return (
    <div className="bg-white rounded-lg shadow p-6 mb-8 h-96">
      <h3 className="text-xl font-bold text-slate-800 mb-4">{title}</h3>
      <ResponsiveContainer width="100%" height="85%">
        <BarChart
          data={chartData}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" vertical={false} />
          <XAxis dataKey="name" tick={{fontSize: 10}} interval={0} />
          <YAxis />
          <Tooltip 
            formatter={(value: number) => [`${value}%`, '']}
            labelStyle={{ color: '#334155', fontWeight: 'bold' }}
          />
          <Legend wrapperStyle={{ fontSize: '12px' }} />
          {barConfig.map((bar, index) => (
             <Bar key={bar.key} dataKey={bar.key} fill={bar.color} radius={[4, 4, 0, 0]} />
          ))}
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default FluencyChart;