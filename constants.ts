import { FluencyLevel, AssessmentCycle, Recommendation, DataSet, SchoolResult } from './types';

// --- DATA 2025 (CURRENT) ---
export const ENTRANCE_2025: AssessmentCycle = {
  name: "2025 - Entrada",
  metrics: { ifl: 4.8, participation: 96.4, beginnerPlusFluent: 45.1 }
};

export const EXIT_2025: AssessmentCycle = {
  name: "2025 - Saída",
  metrics: { ifl: 7.2, participation: 98.0, beginnerPlusFluent: 84.4 }
};

export const LEVELS_2025: FluencyLevel[] = [
  { id: 'pl1', label: 'Pré-leitor 1 (Não Leu)', color: '#fef3c7', percentageEntrance: 6, percentageExit: 1 },
  { id: 'pl2', label: 'Pré-leitor 2 (Soletrou)', color: '#fde68a', percentageEntrance: 5, percentageExit: 1.5 },
  { id: 'pl3', label: 'Pré-leitor 3 (Silabou)', color: '#fcd34d', percentageEntrance: 5, percentageExit: 1.5 },
  { id: 'pl4', label: 'Pré-leitor 4 (Leu <10 p)', color: '#fbbf24', percentageEntrance: 40, percentageExit: 11 },
  { id: 'li', label: 'Leitor Iniciante', color: '#86efac', percentageEntrance: 36, percentageExit: 44 },
  { id: 'lf', label: 'Leitor Fluente', color: '#10b981', percentageEntrance: 9, percentageExit: 41 }
];

// --- DATA 2024 (HISTORICAL) ---
export const ENTRANCE_2024: AssessmentCycle = {
  name: "2024 - Entrada",
  metrics: { ifl: 4.6, participation: 97.4, beginnerPlusFluent: 65.0 }
};

export const EXIT_2024: AssessmentCycle = {
  name: "2024 - Saída",
  metrics: { ifl: 6.5, participation: 96.9, beginnerPlusFluent: 83.5 }
};

export const LEVELS_2024: FluencyLevel[] = [
  { id: 'pl1', label: 'Pré-leitor 1 (Não Leu)', color: '#fef3c7', percentageEntrance: 8, percentageExit: 3 },
  { id: 'pl2', label: 'Pré-leitor 2 (Soletrou)', color: '#fde68a', percentageEntrance: 13, percentageExit: 3 },
  { id: 'pl3', label: 'Pré-leitor 3 (Silabou)', color: '#fcd34d', percentageEntrance: 6, percentageExit: 3 },
  { id: 'pl4', label: 'Pré-leitor 4 (Leu <10 p)', color: '#fbbf24', percentageEntrance: 8, percentageExit: 10 },
  { id: 'li', label: 'Leitor Iniciante', color: '#86efac', percentageEntrance: 45, percentageExit: 59 },
  { id: 'lf', label: 'Leitor Fluente', color: '#10b981', percentageEntrance: 20, percentageExit: 25 }
];

// --- DATA 2023 (HISTORICAL) ---
export const ENTRANCE_2023: AssessmentCycle = {
  name: "2023 - Entrada",
  metrics: { ifl: 4.7, participation: 92.3, beginnerPlusFluent: 55.7 }
};

export const EXIT_2023: AssessmentCycle = {
  name: "2023 - Saída",
  metrics: { ifl: 6.4, participation: 93.1, beginnerPlusFluent: 80.9 }
};

export const LEVELS_2023: FluencyLevel[] = [
  { id: 'pl1', label: 'Pré-leitor 1 (Não Leu)', color: '#fef3c7', percentageEntrance: 14, percentageExit: 3 },
  { id: 'pl2', label: 'Pré-leitor 2 (Soletrou)', color: '#fde68a', percentageEntrance: 5, percentageExit: 3 },
  { id: 'pl3', label: 'Pré-leitor 3 (Silabou)', color: '#fcd34d', percentageEntrance: 9, percentageExit: 6 },
  { id: 'pl4', label: 'Pré-leitor 4 (Leu <10 p)', color: '#fbbf24', percentageEntrance: 16, percentageExit: 7 },
  { id: 'li', label: 'Leitor Iniciante', color: '#86efac', percentageEntrance: 44, percentageExit: 54 },
  { id: 'lf', label: 'Leitor Fluente', color: '#10b981', percentageEntrance: 12, percentageExit: 27 }
];

// --- DATASETS ---

export const DATASET_2025: DataSet = {
  entrance: ENTRANCE_2025,
  exit: EXIT_2025,
  levels: LEVELS_2025,
  reportTitle: "Diagnóstico: Ciclo 2025",
  reportContext: "Pindamonhangaba elevou seu IFL de 4,8 para 7,2, demonstrando eficácia nas intervenções pós-diagnóstico."
};

export const DATASET_2024: DataSet = {
  entrance: ENTRANCE_2024,
  exit: EXIT_2024,
  levels: LEVELS_2024,
  reportTitle: "Diagnóstico: Ciclo 2024",
  reportContext: "Em 2024, o município partiu de um IFL de 4,6 e alcançou 6,5, estabelecendo a base para o crescimento subsequente."
};

export const DATASET_2023: DataSet = {
  entrance: ENTRANCE_2023,
  exit: EXIT_2023,
  levels: LEVELS_2023,
  reportTitle: "Diagnóstico: Ciclo 2023",
  reportContext: "No ciclo de 2023, os dados apontaram um IFL de saída de 6,4, com um desafio significativo na taxa de não leitores na entrada (14%)."
};

// Comparative Dataset (Exit 2024 vs Exit 2025)
export const DATASET_COMPARE_24_25: DataSet = {
  entrance: EXIT_2024,
  exit: EXIT_2025,
  levels: LEVELS_2025.map((l25, index) => ({
    ...l25,
    percentageEntrance: LEVELS_2024[index].percentageExit,
    percentageExit: l25.percentageExit
  })),
  reportTitle: "Comparativo: 2024 vs 2025",
  reportContext: "Comparando os resultados finais (Saída), o município cresceu de IFL 6,5 (2024) para 7,2 (2025), indicando maturação da política pública."
};

// Comparative Dataset (Exit 2023 vs Exit 2024)
export const DATASET_COMPARE_23_24: DataSet = {
  entrance: EXIT_2023,
  exit: EXIT_2024,
  levels: LEVELS_2024.map((l24, index) => ({
    ...l24,
    percentageEntrance: LEVELS_2023[index].percentageExit,
    percentageExit: l24.percentageExit
  })),
  reportTitle: "Comparativo: 2023 vs 2024",
  reportContext: "Entre 2023 e 2024, o IFL oscilou positivamente de 6,4 para 6,5, mostrando estabilidade nos resultados com leve tendência de alta."
};

export const PL4_RECOMMENDATIONS: Recommendation[] = [
  {
    title: "Leitura Assistida e Repetida",
    description: "Implementar estratégias de leitura em coro e teatro de leitores para aumentar a confiança e a exposição a textos modelares.",
    icon: "book-open"
  },
  {
    title: "Ampliação de Vocabulário Visual",
    description: "Trabalho intensivo com palavras de alta frequência (sight words) para reduzir a carga cognitiva na decodificação e focar na compreensão.",
    icon: "eye"
  },
  {
    title: "Modelagem de Prosódia",
    description: "Uso de audiolivros ou leitura modelo do professor, focando na entonação e pontuação, para transição da decodificação silabada para a fluência.",
    icon: "music"
  }
];

export const PL1_ACTION_PLAN: string[] = [
  "Investigação Diagnóstica Individualizada: Rastrear possíveis dificuldades de aprendizagem ou questões sensoriais (visão/audição) nos alunos restantes.",
  "Intervenção Fonológica Intensiva: Reforço diário em consciência fonológica e correspondência grafema-fonema em pequenos grupos.",
  "Envolvimento Familiar: Programa de letramento familiar para reforçar estímulos de leitura em casa."
];

// --- DATA SCHOOLS ---

export const SCHOOLS_2025: SchoolResult[] = [
  { name: "EM ABDIAS JUNIOR SANTIAGO E SILVA", pl: 0, li: 63, lf: 37 },
  { name: "EM DULCE PEDROSA ROMEIRO GUIMA", pl: 15, li: 0, lf: 85 }, // Note: Adjusted based on visual interpretation of 'green' split in image or text data
  { name: "EM PROFA MARIA APARECIDA CAMARGO", pl: 0, li: 42, lf: 58 },
  { name: "EM PROFA MARIA MADUREIRA SALGADO", pl: 0, li: 82, lf: 18 },
  { name: "EM DOUTOR ANGELO PAZ DA SILVA", pl: 4, li: 47, lf: 49 },
  { name: "EM PROFESSOR AUGUSTO CESAR RIBEIRO", pl: 4, li: 43, lf: 52 },
  { name: "EM PROFA MARIA ZARA MINE RENO", pl: 5, li: 48, lf: 48 },
  { name: "EM PROFESSOR MOACYR DE ALMEIDA", pl: 7, li: 54, lf: 39 },
  { name: "EM PROFESSOR FELIX ADIB MIGUEL", pl: 8, li: 35, lf: 58 },
  { name: "EM PROFESSOR PAULO FREIRE", pl: 8, li: 25, lf: 67 },
  { name: "EM PADRE ZEZINHO", pl: 11, li: 44, lf: 44 },
  { name: "EM PROFA MARIA HELENA RIBEIRO", pl: 11, li: 60, lf: 29 },
  { name: "ESCOLA MUN PADRE MARIO ANTONIO", pl: 12, li: 33, lf: 55 },
  { name: "EM DR ANDRE FRANCO MONTORO", pl: 14, li: 50, lf: 36 },
  { name: "EM SERAFIM FERREIRA SR SARA", pl: 14, li: 36, lf: 50 },
  { name: "EM JOSE GONCALVES DA SILVA SEU", pl: 16, li: 27, lf: 58 },
  { name: "EM PROFESSOR ORLANDO PIRES", pl: 21, li: 45, lf: 33 },
  { name: "EM JOAO CESARIO", pl: 22, li: 50, lf: 28 },
  { name: "EM PROFESSORA RUTH AZEVEDO", pl: 23, li: 49, lf: 29 },
  { name: "EM PROF LAURO VICENTE DE AZEVEDO", pl: 24, li: 58, lf: 18 },
  { name: "EM JOAO KOLENDA LEMOS", pl: 24, li: 47, lf: 29 },
  { name: "EM VITO ARDITO", pl: 27, li: 39, lf: 34 },
  { name: "EM PROFA MADALENA CALTABIANO", pl: 28, li: 21, lf: 51 },
  { name: "EM PROFESSOR ELIAS BARGIS MATTAR", pl: 28, li: 59, lf: 13 },
  { name: "EM PROFA RACHEL DE AGUIAR LOUSADA", pl: 31, li: 48, lf: 20 },
  { name: "EM PROFESSORA YVONE APPARECIDA", pl: 31, li: 56, lf: 13 },
  { name: "EM PROFESSORA JULIETA REALE", pl: 43, li: 43, lf: 14 }
].sort((a, b) => a.pl - b.pl); // Best schools (lowest PL) first

export const SCHOOLS_2024: SchoolResult[] = [
  { name: "EM PROFESSOR MOACYR DE ALMEIDA", pl: 0, li: 64, lf: 36 },
  { name: "EM PROFA MARIA HELENA RIBEIRO", pl: 4, li: 73, lf: 22 },
  { name: "EM DR ANDRE FRANCO MONTORO", pl: 4, li: 69, lf: 27 },
  { name: "EM ABDIAS JUNIOR SANTIAGO E SILVA", pl: 5, li: 73, lf: 22 },
  { name: "EM PROFESSOR AUGUSTO CESAR RIBEIRO", pl: 5, li: 63, lf: 32 },
  { name: "EM PROFA MADALENA CALTABIANO", pl: 7, li: 55, lf: 38 },
  { name: "EM PROFA MARIA MADUREIRA SALGADO", pl: 8, li: 69, lf: 23 },
  { name: "EM PROFESSOR MARIO DE ASSIS", pl: 9, li: 58, lf: 33 },
  { name: "EM PROFESSORA ISABEL DO CARMO", pl: 9, li: 70, lf: 21 },
  { name: "EM PROFESSORA GILDA PIORINI", pl: 9, li: 44, lf: 47 },
  { name: "EM PROFESSOR FELIX ADIB MIGUEL", pl: 10, li: 58, lf: 33 },
  { name: "EM PROFA MARIA APARECIDA CAMARGO", pl: 10, li: 72, lf: 17 },
  { name: "EM PROFA RACHEL DE AGUIAR LOUSADA", pl: 10, li: 55, lf: 34 },
  { name: "EM PROFA ODETE CORREA MADUREIRA", pl: 11, li: 43, lf: 46 },
  { name: "EM PADRE ZEZINHO", pl: 11, li: 71, lf: 17 }
].sort((a, b) => a.pl - b.pl);
