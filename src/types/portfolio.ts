export interface ContributionItem {
  area: string;
  percentage: number;
}

export interface MetricItem {
  label: string;
  value: string;
}

export interface ProjectItem {
  id: string;
  category: 'work' | 'campaign' | 'strategy';
  organization: string;
  role: string;
  period: string;
  title: string;
  badge: string;
  image: string;
  // 어떤 방식으로 생각했는가
  thoughtProcess: string;
  problem: string;
  insight: string;
  // 무엇을 실행했는가
  whatIDid: string[];
  action: string[];
  // 어떤 성과를 냈는가
  result: string[];
  metrics: MetricItem[];
  // 이 경험을 통해 무엇을 배웠는가
  whatILearned: string;
  // 기여도
  contributions: ContributionItem[];
  tags: string[];
  externalLink?: string;
}

export interface CareerStep {
  step: string;
  track: 'intern' | 'other';
  company: string;
  role: string;
  period: string;
  badge: string;
  summary: string;
  thoughtSnippet: string;
  learningSnippet: string;
  metrics: string;
  image: string;
  primaryProjectId: string;
}

export interface MindsetPillar {
  number: string;
  title: string;
  subtitle: string;
  question: string;
  description: string;
  example: string;
  keywords: string[];
}

export interface PeopleExperienceItem {
  title: string;
  role: string;
  period: string;
  summary: string;
  detail: string;
  learning: string;
  tags: string[];
}
