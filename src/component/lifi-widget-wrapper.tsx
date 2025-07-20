"use client"
import { LiFiWidget, WidgetConfig, useWidgetEvents, useAvailableChains, ChainType, ChainId } from '@lifi/widget';
import { useParams, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';

const SOLANA_CHAIN_ID = 1151111081099710;

const originalConfig: WidgetConfig = {
  integrator: "dolla",
  variant: "wide",
  theme: {
    container: {
      border: '1px solid rgb(234, 234, 234)',
      borderRadius: '16px',
    },
  },
  chains: {
    from: {
      allow: [1, 8453, 10, 137, 324, 42161, 80094, 81457, 534352, 56],
    },
    to: {
      allow: [SOLANA_CHAIN_ID],
    },
  },
  fromChain: 1,
  toChain: SOLANA_CHAIN_ID,
  fromToken: "0x0000000000000000000000000000000000000000",
  toToken: "EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v",
  toAddress: {
    address: '0x0000000000000000000000000000000000000000',
    chainType: ChainType.EVM,
  },
  tokens: {
    to: {
      allow: [{
        chainId: SOLANA_CHAIN_ID,
        address: 'EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v',
      }, {
        chainId: SOLANA_CHAIN_ID,
        address: 'zBTCug3er3tLyffELcvDNrKkCymbPWysGcWihESYfLg',
      }],
    },
  },
  hiddenUI: ['reverseTokensButton']
};

export default function LiFiWidgetWrapper() {
  const params = useSearchParams();

  const toAddress = params.get('toAddress')
  const fromAmount = params.get('fromAmount')

  const [config, setConfig] = useState(originalConfig)

  useEffect(() => {
    if (!toAddress) return;
    setConfig({
      ...config,
      toAddress: {
        address: toAddress || '',
        chainType: ChainType.EVM,
      },
      fromAmount: fromAmount || 0,
    })
  }, [toAddress, fromAmount])


  
  return (
    <div>
      <LiFiWidget integrator="dolla"  config={config} />
    </div>
  );
}