import { Box, Button, Stack } from "@mui/material";
import Header from "../../Header";
import Dbg from "../../../img/Desktop/transactions-d.webp";
import Tbg from "../../../img/Tablet/transactions-t.webp";
import Mbg from "../../../img/Mobile/transactions-m.webp";
import Indicators from "../../Currency/Indicators";
import TransactionsWrapper from "../../Transactions/TransactionWrapper";
import AddTransactionDialog from "../../Dialogs/addTransactionDialog/AddTransactions";
import EditTransactionDialog from "../../Dialogs/EditTransaction.jsx/EditTransactions";
import { TransactionsPageProps } from "../../../lib/type/transactions";

export default function TransactionsPageView({ state, actions }: TransactionsPageProps) {
    return (
        <>
            <AddTransactionDialog
                open={state.isAddModalOpen}
                onClose={() => actions.setAddModalOpen(false)}
            />
            {state.selectedTransaction && (
                <EditTransactionDialog
                    open={Boolean(state.selectedTransaction)}
                    onClose={() => actions.setSelectedTransaction(null)}
                    value={state.selectedTransaction}
                />
            )}
            <Box sx={{ backgroundColor: "rgba(16, 16, 16, 0.9)" }}>
                <Box
                    sx={{
                        minHeight: "100vh",
                        backgroundImage: {
                            xs: `url(${Mbg})`,
                            sm: `url(${Tbg})`,
                            md: `url(${Dbg})`,
                        },
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        backgroundRepeat: "no-repeat",
                    }}
                >
                    <Header />
                    <Stack
                        mt={2}
                        flexDirection={{ md: "row", sm: "column", xs: "column" }}
                        spacing={{ md: 0, sm: 2 }}
                        sx={{
                            width: "100%",
                            minHeight: "100vh",
                            alignItems: "start",
                            justifyContent: "space-between",
                        }}
                    >
                        <Box
                            sx={{
                                width: "100%",
                                display: "flex",
                                flex: 1,
                            }}
                        >
                            <Indicators />
                        </Box>
                        <Box sx={{ width: "100%", display: "flex", flex: 2 }}>
                            <TransactionsWrapper state={state} actions={actions} />
                            <Button
                                onClick={() => actions.setAddModalOpen(true)}
                                variant="text"
                                sx={{
                                    position: "fixed",
                                    bottom: 20,
                                    right: 20,
                                    width: 44,
                                    height: 44,
                                    minWidth: 44,
                                    padding: 0,
                                    borderRadius: "50%",
                                    background:
                                        "linear-gradient(96.76deg, #FFC727 -16.42%, #9E40BA 97.04%, #7000FF 150.71%)",
                                    color: "#fff",
                                    fontSize: 28,
                                    lineHeight: 1,
                                }}
                            >
                                +
                            </Button>
                        </Box>
                    </Stack>
                </Box>
            </Box>
        </>
    );
}
