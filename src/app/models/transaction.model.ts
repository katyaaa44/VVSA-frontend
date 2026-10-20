
export interface Transaction {
  id: number;
  type: 'incoming' | 'outgoing' | 'atm';
  category: 'transfer' | 'atm';

  counterparty?: string;
  amount: number;
  currency: string;
  transactionDate: string;

  accountNumber?: string;
  bankCode?: string;
  processingDate?: string;
  settlementDate?: string;

  originalAmount?: number;
  originalCurrency?: string;

  description?: string;
  recipientInfo?: string;

  cardNumber?: string;
  atmLocation?: string;
  withdrawalDateTime?: string;
}
