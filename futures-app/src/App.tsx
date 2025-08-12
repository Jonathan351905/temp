import { useEffect, useState } from 'react'
import './index.css'
import { fetchFutures, type FutureAccount } from './lib/api'
import { AccountCard } from './components/AccountCard'

export default function App() {
  const [accounts, setAccounts] = useState<FutureAccount[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    fetchFutures()
      .then(setAccounts)
      .catch((e) => setError(e.message))
      .finally(() => setLoading(false))
  }, [])

  return (
    <div className="container-1440 relative w-full min-h-screen flex flex-col">
      <div className="flex flex-col w-full h-full py-7 gap-7">
        <div className="flex flex-col px-20 gap-6 w-full">
          <div className="flex flex-col gap-4 w-full">
            <div className="flex flex-col lg:flex-row gap-4 w-full">
              {loading && <div className="text-white/80">Loading accounts...</div>}
              {error && <div className="text-red-400">{error}</div>}
              {!loading && !error && accounts.slice(0, 2).map((acc) => (
                <div key={acc.id} className="flex-1 min-w-[300px]">
                  <AccountCard account={acc} />
                </div>
              ))}
            </div>
            <div className="flex flex-col lg:flex-row gap-4 w-full">
              {!loading && !error && accounts.slice(2, 4).map((acc) => (
                <div key={acc.id} className="flex-1 min-w-[300px]">
                  <AccountCard account={acc} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
