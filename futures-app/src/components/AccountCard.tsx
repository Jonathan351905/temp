import type { FutureAccount } from '../lib/api'

type Props = {
  account: FutureAccount
}

function formatAmount(amount: number) {
  return `$${amount.toLocaleString()}`
}

export function AccountCard({ account }: Props) {
  const isFunded = account.status === 'Funded'
  const rootCardClass = account.masterAccount ? 'card-glass-bordered' : 'card-glass'
  const boughtDate = new Date(account.purchasedAt)
  const boughtText = boughtDate.toLocaleDateString(undefined, { month: 'short', day: '2-digit', year: 'numeric' })

  return (
    <div className={`relative ${rootCardClass} w-full h-[306.67px] flex flex-col items-start pt-[25.1176px] rounded-[18.2674px]`}>
      <div className="blur-ellipse" />

      <div className="z-[1] flex flex-col w-full gap-[18.27px]">
        <div className="flex flex-col items-start gap-[9.13px] px-[25.1176px] w-full">
          <div className="flex flex-row items-start w-full gap-0">
            <div className="flex flex-col gap-[9.13px] flex-1">
              <div className="flex flex-row items-center gap-[11.42px] w-[232.09px] h-[26px]">
                <div className="text-white font-medium" style={{ fontFamily: 'Inter', fontSize: '18.2674px', lineHeight: '140%' }}>Two Step Challenge</div>
                <div className="badge-pro flex items-center justify-center px-[9.13369px] py-[2.28342px] gap-[4.57px] w-[45.67px] h-[23.98px]">
                  <div className="font-bold" style={{
                    fontFamily: 'Inter Tight',
                    fontSize: '13.7005px',
                    lineHeight: '140%',
                    background: 'linear-gradient(180deg, #5686FE 0%, #CCDBFF 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    textShadow: '0px 0px 11.4171px rgba(171, 194, 255, 0.7)'
                  }}>PRO</div>
                </div>
              </div>
              <div className="text-white font-semibold" style={{ fontFamily: 'Inter', fontSize: '47.0934px', lineHeight: '57px' }}>
                {formatAmount(account.amount)}
              </div>
              <div className={`${isFunded ? 'badge-outline-green' : 'badge-outline-blue'} flex items-center justify-center gap-[6.34px] px-[12.6734px] py-[3.16836px] w-fit h-[28px]`}>
                <div className="font-medium" style={{ fontFamily: 'Inter Tight', fontSize: '19.0101px', lineHeight: '140%' }}>
                  {isFunded ? 'Funded' : 'On Challenge'}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Meta Row */}
        <div className="flex flex-row items-center gap-[9.13px] px-[25.1176px] w-full">
          <div className="flex flex-row items-center gap-[4.57px] w-fit h-[24px]">
            <div className="text-white/60" style={{ fontFamily: 'Inter Tight', fontSize: '17.1257px', lineHeight: '140%' }}>Balance :</div>
            <div className="text-white font-bold" style={{ fontFamily: 'Inter', fontSize: '17.1257px', lineHeight: '140%' }}>{formatAmount(account.balance)}</div>
          </div>

          <div className="w-[4.57px] h-[4.57px] bg-white opacity-80 rounded-full" />

          <div className="flex flex-row items-center gap-[9.13px] w-fit h-[24px]">
            <div className="text-white/90" style={{ fontFamily: 'Inter', fontSize: '17.1257px', lineHeight: '140%' }}>Bought {boughtText}</div>
            <div className="w-[15.98px] h-[15.98px] opacity-30 border border-white rounded-full" />
          </div>

          <div className="w-[4.57px] h-[4.57px] bg-white opacity-80 rounded-full" />

          <div className="flex flex-row items-center gap-[9.13px] w-fit h-[24px]">
            <div className="text-white/60" style={{ fontFamily: 'Inter', fontSize: '17.1257px', lineHeight: '140%' }}>ID: {account.id}</div>
            <div className="w-[15.98px] h-[15.98px] opacity-30 border border-white rounded-full" />
          </div>
        </div>

        <div className="separator-row flex flex-col items-start py-[11.4171px] w-full z-[2]">
          <div className="flex flex-row items-center gap-[3.43px] w-full px-[25.1176px]">
            <div className="w-[25.12px] h-px opacity-20" />

            <div className="flex flex-row items-center gap-[6.85px] bg-[rgba(88,101,242,0.7)] rounded-[1140.57px] px-[13.7005px] py-[4.56684px] w-[129.25px] h-[26.13px]">
              <div className="w-4 h-4 bg-white rounded" />
              <div className="text-white font-medium" style={{ fontFamily: 'Inter', fontSize: '13.7005px', lineHeight: '17px' }}>Evaluation 1</div>
            </div>

            <div className="flex-1 h-px" />

            <div className="flex flex-row items-center gap-[4.57px] bg-[rgba(255,255,255,0.1)] border border-[rgba(255,255,255,0.1)] rounded-[1140.57px] px-[13.7005px] py-[4.56684px] w-[126.97px] h-[26.13px]">
              <div className="w-4 h-4 bg-white rounded" />
              <div className="text-white" style={{ fontFamily: 'Inter', fontSize: '13.7005px', lineHeight: '17px' }}>Evaluation 2</div>
            </div>

            <div className="flex-1 h-px opacity-20 border-dashed border-t border-white" />

            <div className="flex flex-row items-center gap-[4.57px] bg-[rgba(255,255,255,0.1)] border border-[rgba(255,255,255,0.1)] rounded-[1140.57px] px-[13.7005px] py-[4.56684px] w-[148.97px] h-[26.13px]">
              <div className="w-[14px] h-[14px] bg-white rounded" />
              <div className="text-white" style={{ fontFamily: 'Inter', fontSize: '13.7005px', lineHeight: '17px' }}>Master Account</div>
            </div>

            <div className="w-[25.12px] h-px opacity-20" />
          </div>
        </div>
      </div>

      <div className="flex flex-row items-start gap-[9.13px] px-[25.1176px] pb-[25.1176px] pt-[18.2674px] w-full">
        <div className="btn-white flex flex-row justify-center items-center gap-[9.13px] px-[18.2674px] py-[11.4171px] w-full max-w-[581.76px] h-[45.67px]">
          <div className="w-4 h-4 border border-black rounded" />
          <div className="text-[#070707]" style={{ fontFamily: 'Inter Tight', fontWeight: 500, fontSize: '18.2674px', lineHeight: '22px' }}>Dashboard</div>
        </div>
      </div>
    </div>
  )
}