export interface FluencyLevel {
  id: string;
  label: string;
  color: string;
  percentageEntrance: number;
  percentageExit: number;
}

export interface MetricData {
  ifl: number;
  participation: number;
  beginnerPlusFluent: number;
}

export interface AssessmentCycle {
  name: string;
  metrics: MetricData;
}

export interface Recommendation {
  title: string;
  description: string;
  icon: string;
}

export interface SchoolResult {
  name: string;
  pl: number; // Pré-leitor (soma dos níveis PL)
  li: number; // Leitor Iniciante
  lf: number; // Leitor Fluente
}

export type ViewMode = '2023' | 'compare23_24' | '2024' | 'compare24_25' | '2025' | 'trend_23_25' | 'school_analysis';

export interface DataSet {
  entrance: AssessmentCycle;
  exit: AssessmentCycle;
  levels: FluencyLevel[];
  reportTitle: string;
  reportContext: string;
}
