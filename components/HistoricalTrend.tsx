import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { TrendingUp, Users, Target, Activity } from 'lucide-react';

const dataTrend = [
  { name: '2023 - Ent', readers: 56, pl1: 14 },
  { name: '2023 - Sai', readers: 67, pl1: 9 },
  { name: '2024 - Ent', readers: 54, pl1: 13 },
  { name: '2024 - Sai', readers: 83, pl1: 3 },
  { name: '2025 - Ent', readers: 45, pl1: 6 },
  { name: '2025 - Sai', readers: 84, pl1: 1 }, // Adjusted PL1 based on 1% from other context, though graph shows small yellow
];

// IEA Calculation (Value Added)
// Formula used here: (Exit % - Entrance %) for Readers (Beginner + Fluent)
const iea2024 = 83 - 54;
const iea2025 = 84 - 45;

const HistoricalTrend: React.FC = () => {
  return (
    <div className="space-y-8">
      
      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-lg shadow border-l-4 border-emerald-500">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-sm font-semibold text-slate-500 uppercase">Evolução de Fluentes (Saída)</p>
              <h3 className="text-3xl font-bold text-slate-800 mt-2">19% <span className="text-slate-400 text-lg">→</span> 41%</h3>
              <p className="text-xs text-emerald-600 mt-1 font-medium">De 2023 para 2025 (+115% relativo)</p>
            </div>
            <div className="p-2 bg-emerald-100 rounded text-emerald-600">
              <TrendingUp size={24} />
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow border-l-4 border-blue-500">
           <div className="flex justify-between items-start">
            <div>
              <p className="text-sm font-semibold text-slate-500 uppercase">Redução Pré-leitor 1 (Saída)</p>
              <h3 className="text-3xl font-bold text-slate-800 mt-2">9% <span className="text-slate-400 text-lg">→</span> 3%</h3>
              <p className="text-xs text-blue-600 mt-1 font-medium">Consistente em 2024 e 2025</p>
            </div>
            <div className="p-2 bg-blue-100 rounded text-blue-600">
              <Users size={24} />
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow border-l-4 border-indigo-500">
           <div className="flex justify-between items-start">
            <div>
              <p className="text-sm font-semibold text-slate-500 uppercase">Índice de Eficácia (IEA)</p>
              <h3 className="text-3xl font-bold text-slate-800 mt-2">+{iea2025}pp</h3>
              <p className="text-xs text-indigo-600 mt-1 font-medium">Valor Agregado em 2025 (Sup. a 2024: +{iea2024}pp)</p>
            </div>
            <div className="p-2 bg-indigo-100 rounded text-indigo-600">
              <Activity size={24} />
            </div>
          </div>
        </div>
      </div>

      {/* Main Chart */}
      <div className="bg-white p-6 rounded-lg shadow">
        <h3 className="text-xl font-bold text-slate-800 mb-6 flex items-center gap-2">
          <Target className="text-emerald-600" />
          Taxa de Leitores (Iniciante + Fluente) - Comparativo entre as Edições
        </h3>
        <div className="h-80 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart
              data={dataTrend}
              margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
            >
              <CartesianGrid strokeDasharray="3 3" vertical={false} />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip labelStyle={{ color: '#334155', fontWeight: 'bold' }} />
              <Area 
                type="monotone" 
                dataKey="readers" 
                stroke="#10b981" 
                fill="#86efac" 
                fillOpacity={0.6} 
                name="% Leitores (Inic + Flu)"
                label={{ position: 'top', fill: '#166534', fontSize: 12, fontWeight: 'bold' }}
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
        <p className="text-sm text-slate-500 mt-4 text-center italic">
          Nota: O IEA (Índice de Eficácia) demonstra que, embora 2025 tenha iniciado com uma base menor de leitores (45%) comparado a 2024 (54%), a rede foi capaz de atingir um patamar final superior (84%), demonstrando maior eficácia pedagógica no ciclo.
        </p>
      </div>

      {/* Analysis Text */}
      <div className="bg-slate-800 text-white p-6 rounded-lg shadow">
        <h4 className="font-bold text-lg mb-4 text-emerald-400">Análise de Business Intelligence Educacional</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h5 className="font-semibold text-white mb-2 border-b border-slate-600 pb-1">Base de Conhecimento</h5>
            <ul className="list-disc list-inside space-y-2 text-slate-300 text-sm">
              <li><strong>2023:</strong> Saída com 19% de Fluentes e 9% de Pré-leitor 1.</li>
              <li><strong>2024:</strong> Saída com 25% de Fluentes e 3% de Pré-leitor 1.</li>
              <li><strong>2025:</strong> Saída com 41% de Fluentes e 3% de Pré-leitor 1.</li>
            </ul>
          </div>
          <div>
             <h5 className="font-semibold text-white mb-2 border-b border-slate-600 pb-1">Interpretação Estratégica</h5>
             <p className="text-slate-300 text-sm leading-relaxed">
               A tendência aponta para uma <strong>maturação acelerada</strong> da fluência. Enquanto a redução de não-leitores (PL1) estabilizou em um patamar técnico mínimo (3%), o esforço pedagógico transicionou com sucesso para a qualificação da leitura, dobrando a taxa de fluentes em dois anos.
             </p>
          </div>
        </div>
      </div>

    </div>
  );
};

export default HistoricalTrend;
