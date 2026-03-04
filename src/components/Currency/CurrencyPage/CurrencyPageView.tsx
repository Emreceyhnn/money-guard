import { Box, Stack } from "@mui/material";
import Header from "../../Header";
import Dbg from "../../../img/Desktop/transactions-d.webp";
import Tbg from "../../../img/Tablet/transactions-t.webp";
import Mbg from "../../../img/Mobile/transactions-m.webp";
import MobileIndicator from "../../Currency/MobileIndicator";
import CurrencyTable from "../../Currency/Currency";
import { CurrencyPageProps } from "../../../lib/type/currency";

export default function CurrencyPageView({ state, actions }: CurrencyPageProps) {
    return (
        <Box sx={{ backgroundColor: "rgba(16, 16, 16, 0.9)" }}>
            <Stack
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
                <Stack mt={3} spacing={3}></Stack>
                <MobileIndicator />
                <CurrencyTable rates={state.rates} sx={{ gap: "50px" }} />
            </Stack>
        </Box>
    );
}
