import { gql } from '@apollo/client';

export const GET_SUMMARY = gql`
  {
    wealthSummary {
      cdi
      gain
      hasHistory
      id
      profitability
      total
    }
  }
`
