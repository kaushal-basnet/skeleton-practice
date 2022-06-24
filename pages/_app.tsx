import "../styles/globals.css";
import type { AppProps } from "next/app";
import "antd/dist/antd.css";
import { QueryClient, QueryClientProvider } from "react-query";
import { Provider } from "../utils/AuthContext";
import { ReactQueryDevtools } from "react-query/devtools";

const queryClient = new QueryClient();
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <Provider>
        <Component {...pageProps} />
      </Provider>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default MyApp;
