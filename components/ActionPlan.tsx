import React from 'react';
import { BookOpen, Target, Users, Zap, CheckCircle2 } from 'lucide-react';
import { PL4_RECOMMENDATIONS, PL1_ACTION_PLAN } from '../constants';

export const RecommendationsPL4: React.FC = () => {
  return (
    <div className="bg-white rounded-lg shadow p-6 mb-8">
      <div className="flex items-center gap-2 mb-6">
        <Zap className="text-amber-500" />
        <h3 className="text-xl font-bold text-slate-800">Intervenções Pedagógicas: Estagnados em Pré-leitor 4</h3>
      </div>
      <p className="text-slate-600 mb-6">
        Alunos neste nível decodificam palavras isoladas (até 10), mas carecem de fluência textual. O foco deve ser a <strong>automatização</strong>.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {PL4_RECOMMENDATIONS.map((rec, index) => (
          <div key={index} className="border rounded-lg p-5 hover:border-amber-400 transition-colors bg-amber-50/30">
            <h4 className="font-bold text-slate-800 mb-2 flex items-center gap-2">
               {index + 1}. {rec.title}
            </h4>
            <p className="text-sm text-slate-600">{rec.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export const ActionPlanPL1: React.FC = () => {
  return (
    <div className="bg-red-50 border border-red-100 rounded-lg p-6">
      <div className="flex items-center gap-2 mb-4">
        <Target className="text-red-600" />
        <h3 className="text-xl font-bold text-red-800">Plano de Ação: Nível Pré-leitor 1 (Não Leu)</h3>
      </div>
      <p className="text-red-700 mb-4 font-medium">
        Foco crítico no 1% de alunos (aprox. 14 estudantes) que não apresentaram leitura.
      </p>
      <ul className="space-y-3">
        {PL1_ACTION_PLAN.map((action, index) => (
          <li key={index} className="flex items-start gap-3 text-slate-700 bg-white p-3 rounded border border-red-100 shadow-sm">
            <CheckCircle2 className="text-red-500 mt-1 shrink-0" size={18} />
            <span>{action}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};
