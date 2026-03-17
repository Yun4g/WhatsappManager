import { LanguageSwitcher } from '@/Component/LanguageSwitch';
import React from 'react';

const Auth: React.FC = () => {
    return (
        <div className='bg-[#F7F7F7]  min-h-screen h-screen'>
            <section className='auth-background  w-full h-full flex flex-col relative items-center justify-center px-4'>

                <div className='w-full max-w-[360px] h-auto rounded-[24px] bg-white py-[32px] px-6 md:px-[24px] flex flex-col items-center '>
                    <div>
                        <img src="/LogoManager.png" className='h-[48px] w-[48px]' alt="" />
                    </div>

                    <div className='mt-[14px] text-center'>
                        <h1 className='text-[#181925] font-bold text-2xl'>Let’s get started</h1>

                        <p className=' text-[#666666] text-[17px] leading-5 mt-[12px] font-medium'>
                            Manage your WhatsApp groups.
                            Intuitively and effectively
                        </p>
                    </div>


                    <div className='mt-[56px]'>
                        <button className='flex py-[16px] px-4 md:px-[56px] items-center justify-center gap-2 w-full bg-[#F5F5F5] text-[#181925] text-[16px] font-bold  rounded-full'>
                            <span>
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M15.68 8.18177C15.68 7.6145 15.6291 7.06905 15.5345 6.54541H8V9.64359H12.3055C12.1164 10.64 11.5491 11.4836 10.6982 12.0509V14.0654H13.2945C14.8073 12.669 15.68 10.6181 15.68 8.18177Z" fill="#5881F3" />
                                    <path d="M7.99729 16C10.1573 16 11.9682 15.2873 13.2918 14.0655L10.6955 12.0509C9.98274 12.5309 9.07365 12.8218 7.99729 12.8218C5.91729 12.8218 4.15001 11.4182 3.51729 9.52734H0.855469V11.5928C2.17183 14.2037 4.87001 16 7.99729 16Z" fill="#34A853" />
                                    <path d="M3.52 9.52001C3.36 9.04001 3.26545 8.53091 3.26545 8.00001C3.26545 7.4691 3.36 6.96001 3.52 6.48001V4.41455H0.858182C0.312727 5.49091 0 6.70546 0 8.00001C0 9.29455 0.312727 10.5091 0.858182 11.5855L2.93091 9.97091L3.52 9.52001Z" fill="#FBC605" />
                                    <path d="M7.99729 3.18545C9.17547 3.18545 10.2227 3.59273 11.0591 4.37818L13.35 2.08727C11.9609 0.792727 10.1573 0 7.99729 0C4.87001 0 2.17183 1.79636 0.855469 4.41455L3.51729 6.48C4.15001 4.58909 5.91729 3.18545 7.99729 3.18545Z" fill="#EA4335" />
                                </svg>

                            </span>
                            Continue with Google
                        </button>

                        <p className='mt-[16px] text-[#999999] flex items-center justify-center w-full gap-1 text-sm text-center font-medium'>
                            Read our terms and conditions

                            <span className='text-[#FA7319] cursor-pointer text-sm font-bold '>
                                here
                            </span>
                        </p>
                    </div>
                </div>



                <footer className='absolute bottom-6 left-0 w-full px-6 md:px-[44px] flex justify-between items-center'>
                    <p className='text-[#5C5C5C] text-sm font-semibold'>
                        © 2025 Group Manager
                    </p>

                    <LanguageSwitcher />
                </footer>


            </section>



        </div>

    );
}

export default Auth;