"use client"

import Wrapper from '../shared/Wrapper';
import ProductCard from '../shared/ProductCard';
import { productsData } from '@/components/shared/Data';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import 'swiper/css';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import { InfiniteMovingCards } from '../ui/infinite-moving-cards';


const DealsandSig = () => {

    const data = productsData.map((product) => product)
    const upperDeal = data.slice(5, 7)

    const lowerDeal = data.slice(7)

    return (
        <Wrapper>
            <div className='mb-20 mt-20'>
                {/* Heading */}
                <div className='mx-10'>
                    <h2 className='text-5xl w-auto tracking-wider font-bold mb-4 font-sans leading-tight'>
                        Signature & Deals
                    </h2>
                    <span className="mx-1 block h-1 w-16 bg-gradient-to-r from-[#dd1818] to-[#333333]"></span>
                </div>
                {/* Signature And Deals */}
                <div className='flex flex-col md:flex-row'>
                    {/* Signature Left Side  */}
                    <div className="h-[30rem] mt-16 mx-2 items-center md:w-1/2 rounded-md flex flex-col antialiased  dark:bg-black dark:bg-grid-white/[0.05] justify-center relative overflow-hidden">
                        <InfiniteMovingCards
                            direction="right"
                            speed="slow"
                        />
                    </div>
                    
                    {/* Deals Right Side */}
                    <div className='bg-[#EA002A] rounded-sm mt-8 md:w-1/2'>
                        {/* Upper Side */}
                        <div className=''>
                            <div className='flex flex-col md:flex-row items-center justify-between'>
                                {upperDeal.map((product) => (
                                    <div key={product.id} className="">
                                        <button>
                                            <Image
                                                width={250}
                                                height={300}
                                                src={product.image}
                                                className='transform hover:scale-110 transition-transform'
                                                alt='Deal 1 and Deal 2'
                                            />
                                            <div className='mb-4 text-center'>
                                                <p className='font-extrabold text-3xl italic'>{product.title}</p>
                                            </div>
                                        </button>
                                    </div>
                                ))}
                            </div>

                        </div>
                        {/* Lower Side */}
                        <div className='h-1/2'>
                            <div className='flex flex-row justify-center'>
                                {lowerDeal.map((product) => (
                                    <div key={product.id} className="">
                                        <button>
                                            <Image
                                                width={250}
                                                height={300}
                                                src={product.image}
                                                className='transform hover:scale-110 transition-transform'
                                                alt='Deal 3'
                                            />
                                            <div className='mb-4 text-center'>
                                                <p className='font-extrabold text-3xl italic'>{product.title}</p>
                                            </div>
                                        </button>
                                    </div>
                                ))}
                            </div>

                        </div>
                    </div>
                </div>
            </div>

        </Wrapper>
    )
}

export default DealsandSig