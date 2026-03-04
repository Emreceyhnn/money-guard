export interface HomePageState {
    isLoggedIn: boolean;
    isRefreshing: boolean;
}

export interface HomePageActions {
    navigateToLogin: () => void;
    navigateToRegister: () => void;
}

export interface HomePageProps {
    state: HomePageState;
    actions: HomePageActions;
}
