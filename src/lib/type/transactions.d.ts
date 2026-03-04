export type TransactionType = "INCOME" | "EXPENSE";

export interface TransactionCategory {
    id: string;
    name: string;
    type: TransactionType;
}

export interface Transaction {
    id: string;
    transactionDate: string;
    type: TransactionType;
    categoryId: string;
    comment: string;
    amount: number;
}

export interface TransactionsPageState {
    transactions: Transaction[];
    categories: TransactionCategory[];
    loading: boolean;
    error: string | null;
    selectedTransaction: Transaction | null;
    isAddModalOpen: boolean;
}

export interface TransactionsPageActions {
    fetchData: () => Promise<void>;
    addItem: (transaction: Partial<Transaction>) => Promise<void>;
    updateItem: (transaction: Transaction) => Promise<void>;
    deleteItem: (id: string) => Promise<void>;
    setSelectedTransaction: (transaction: Transaction | null) => void;
    setAddModalOpen: (open: boolean) => void;
}

export interface TransactionsPageProps {
    state: TransactionsPageState;
    actions: TransactionsPageActions;
}
