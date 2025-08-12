export type FutureAccount = {
  id: string
  title: string
  tier: 'PRO'
  amount: number
  status: 'On Challenge' | 'Funded'
  balance: number
  purchasedAt: string
  evaluation: 1 | 2
  masterAccount: boolean
}

export async function fetchFutures(): Promise<FutureAccount[]> {
  const res = await fetch('/api/futures')
  if (!res.ok) throw new Error('Failed to fetch futures')
  const data = await res.json()
  return data.accounts
}