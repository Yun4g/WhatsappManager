export default function PricingPage() {
    const plans = [
        {
            name: 'Free',
            price: '₦0',
            period: '/month',
            subtitle: 'Included in every free account:',
            features: [
                '2 Groups',
                '10 monthly automations per group',
                '10 monthly scheduled messages per group',
            ],
            current: true,
            cta: 'CURRENT PLAN: ACTIVE',
        },
        {
            name: 'Pro',
            price: '₦2000',
            period: '/month',
            subtitle: 'Included in every pro account:',
            features: [
                'Unlimited groups',
                'Unlimited automations',
                'Unlimited scheduled messages',
                'Multiple WhatsApp numbers',
                'Group stats',
            ],
            current: false,
            cta: 'Subscribe to Pro Plan',
        },
    ];

    return (
        <div >
            <div className="w-full ">
                <div className="mb-6">
                    <h1 className="text-[24px] font-bold  text-[#181925]">
                        Pricing
                    </h1>
                    <p className="text-[12px]  text-[#999999]  font-medium">
                        Simple, transparent pricing
                    </p>
                </div>

                <div className="space-y-6 mb-7">
                    {plans.map((plan) => (
                        <div
                            key={plan.name}
                            className="bg-white rounded-[16px] overflow-hidden "
                        >
                            <div className=" p-4">
                                <div className="flex items-center gap-1 flex-wrap">
                                    <span className="text-[28px]  font-bold  text-[#111827]">
                                        {plan.price}
                                    </span>
                                    <span className="text-[17px]  mt-1 leading-none font-medium text-[#171717] mb-1">
                                        {plan.period}
                                    </span>
                                </div>

                                <p className="text-[#999999] text-[16px]  mb-1 font-medium">
                                    {plan.subtitle}
                                </p>

                                <ul className="">
                                    {plan.features.map((feature) => (
                                        <li key={feature} className="flex items-center gap-3 ">
                                            <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <rect width="14.53" height="15" rx="7.265" transform="matrix(1 0 0 -1 0 15)" fill="#F5F5F5" />
                                                <path d="M3.9873 7.85476L5.56233 9.4156C5.85558 9.70884 6.21032 9.85547 6.62654 9.85547C7.04277 9.85547 7.3975 9.70884 7.69075 9.4156L11.153 5.99594L10.3016 5.13038L6.83938 8.55004C6.78263 8.61626 6.71168 8.64937 6.62654 8.64937C6.54141 8.64937 6.47046 8.61626 6.4137 8.55004L4.83867 7.00339L3.9873 7.85476Z" fill="#999999" />
                                            </svg>

                                            <span className="text-[14px]  leading-7 text-[#181925] font-medium">
                                                {feature}
                                            </span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="border-t border-[#efefef]  px-4  py-[11px]  flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                                {plan.current ? (
                                    <button className="w-fit rounded-full bg-[#CDFACE] text-[#366625]   px-[10px] py-2 text-[12px]  font-bold ">
                                        {plan.cta}
                                    </button>
                                ) : (
                                    <>
                                        <div className="flex items-center gap-[6px] text-[#999999] text-[12px] s">
                                            <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M5 10C7.76142 10 10 7.76142 10 5C10 2.23858 7.76142 0 5 0C2.23858 0 0 2.23858 0 5C0 7.76142 2.23858 10 5 10ZM5.89268 7.56686L5.97252 7.24048C5.93119 7.25989 5.86456 7.28206 5.77319 7.30731C5.68157 7.33256 5.59912 7.34541 5.52665 7.34541C5.37229 7.34541 5.26362 7.32011 5.20052 7.26926C5.13789 7.2184 5.10665 7.12274 5.10665 6.98262C5.10665 6.9271 5.11607 6.84434 5.13579 6.73602C5.15489 6.62699 5.17686 6.53009 5.20129 6.44533L5.49935 5.39007C5.52855 5.29323 5.54857 5.18675 5.55933 5.07055C5.57034 4.9546 5.57546 4.87348 5.57546 4.82744C5.57546 4.60491 5.49746 4.42433 5.34141 4.28503C5.18536 4.14583 4.96315 4.07623 4.67517 4.07623C4.51492 4.07623 4.34551 4.10471 4.16621 4.1616C3.98691 4.21835 3.79946 4.28672 3.60337 4.36656L3.52332 4.6932C3.58175 4.67159 3.65135 4.64834 3.73278 4.62427C3.81386 4.6003 3.89339 4.58791 3.97078 4.58791C4.12877 4.58791 4.23519 4.61485 4.29096 4.6679C4.34674 4.72112 4.37475 4.81576 4.37475 4.95107C4.37475 5.02589 4.36589 5.10901 4.3475 5.19935C4.32937 5.29025 4.30674 5.38638 4.28011 5.48784L3.98076 6.54735C3.95413 6.65869 3.93467 6.7583 3.92243 6.84675C3.91029 6.93509 3.90445 7.02179 3.90445 7.10609C3.90445 7.32385 3.98491 7.50336 4.14577 7.64502C4.30664 7.78611 4.53218 7.85714 4.82215 7.85714C5.01098 7.85714 5.17671 7.83246 5.31934 7.78283C5.46181 7.73336 5.65315 7.6614 5.89268 7.56686ZM5.83957 3.28016C5.97882 3.15105 6.04811 2.99403 6.04811 2.81017C6.04811 2.62673 5.97892 2.4694 5.83957 2.33865C5.70068 2.20826 5.53326 2.14286 5.33752 2.14286C5.14116 2.14286 4.97308 2.2081 4.83286 2.33865C4.69263 2.4694 4.62237 2.62667 4.62237 2.81017C4.62237 2.99403 4.69263 3.151 4.83286 3.28016C4.97334 3.40973 5.14111 3.47457 5.33752 3.47457C5.53331 3.47457 5.70068 3.40973 5.83957 3.28016Z" fill="#999999" />
                                            </svg>

                                            <span>Pricing renews automatically unless cancelled.</span>
                                        </div>

                                        <button className="w-full sm:w-auto rounded-full bg-[#181925]  text-white  p-[14px] text-[12px] font-semibold shadow-sm hover:opacity-95 transition">
                                            {plan.cta}
                                        </button>
                                    </>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
