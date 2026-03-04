export interface CurrencyRate {
    currency: string;
    buy: number;
    sell: number;
    cross: number;
}

export interface CurrencyPageState {
    rates: CurrencyRate[];
    loading: boolean;
    error: string | null;
    lastUpdated: number | null;
}

export interface CurrencyPageActions {
    fetchCurrencyRates: () => Promise<void>;
}

export interface CurrencyPageProps {
    state: CurrencyPageState;
    actions: CurrencyPageActions;
}
