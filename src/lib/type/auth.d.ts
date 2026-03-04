export interface AuthPageState {
    isLoading: boolean;
    error: string | null;
}

export interface LoginPageActions {
    login: (credentials: any) => Promise<void>;
    navigateToRegister: () => void;
}

export interface RegisterPageActions {
    register: (credentials: any) => Promise<void>;
    navigateToLogin: () => void;
}

export interface LoginPageProps {
    state: AuthPageState;
    actions: LoginPageActions;
}

export interface RegisterPageProps {
    state: AuthPageState;
    actions: RegisterPageActions;
}
