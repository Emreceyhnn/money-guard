export interface CategoryItem {
    id?: string;
    name: string;
    total: number;
    color?: string;
}

export interface StatisticsPageState {
    categoriesData: CategoryItem[];
    totalIncome: number;
    totalExpense: number;
    loading: boolean;
    error: string | null;
    selectedMonth: number | null;
    selectedYear: number | null;
}

export interface StatisticsPageActions {
    fetchStatistics: (month?: number, year?: number) => Promise<void>;
    setMonth: (month: number) => void;
    setYear: (year: number) => void;
}

export interface StatisticsPageProps {
    state: StatisticsPageState;
    actions: StatisticsPageActions;
}
