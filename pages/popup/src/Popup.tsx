import '@src/Popup.css';
import { useStorageSuspense, withErrorBoundary, withSuspense } from '@extension/shared';
import { exampleThemeStorage } from '@extension/storage';
import { DynamicContextProvider, DynamicWidget } from '@dynamic-labs/sdk-react-core';
import { EthereumWalletConnectors } from '@dynamic-labs/ethereum';

const Popup = () => {
  const theme = useStorageSuspense(exampleThemeStorage);
  const isLight = theme === 'light';

  return (
    <div className={`App ${isLight ? 'bg-slate-50' : 'bg-gray-800'}`}>
      <DynamicContextProvider
        settings={{
          environmentId: '69472d16-95d4-437f-acb9-8c3c613dc338',
          apiBaseUrl: 'https://app.dynamic-preprod.xyz/api/v0',
          walletConnectors: [EthereumWalletConnectors],
        }}>
        <DynamicWidget />
      </DynamicContextProvider>
    </div>
  );
};

export default withErrorBoundary(withSuspense(Popup, <div> Loading ... </div>), <div> Error Occur </div>);
