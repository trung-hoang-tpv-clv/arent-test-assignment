export enum ProductTime {
  MORNING = 'Morning',
  LUNCH = 'Lunch',
  DINNER = 'Dinner',
  SNACK = 'Snack',
}

export enum RecordChartFilter {
  DAY = '日',
  WEEK = '週',
  MONTH = '月',
  YEAR = '年',
}

export type ID = string | number;

export type ChartData = number[][];

export type Article = {
  id: ID;
  title: string;
  tags: string[];
  src: string;
  date: string;
};

export type Exercise = {
  id: ID;
  title: string;
  kcal: number;
  duration: string;
};

export type Diary = {
  id: ID;
  text: string;
  date: string;
};

export type Product = {
  id: ID;
  src: string;
  date: string;
  time: ProductTime;
};

export type TopPageChart = {
  percentage: number;
  date: string;
  data: ChartData;
};

export type RecordChart = {
  data: ChartData;
  type: RecordChartFilter;
};

export interface PaginationResult<M> {
  data: Array<M>;
  totalCount: number;
  page: number;
}
