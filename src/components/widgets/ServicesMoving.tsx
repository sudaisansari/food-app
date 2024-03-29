
import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import Wrapper from "../shared/Wrapper";

export function InfiniteMovingCardsDemo() {
    return (
        <Wrapper>
            <div className='mb-20 mt-32'>
                <div className='mx-10'>
                    <h2 className='text-5xl w-auto tracking-wider font-bold mb-4 font-sans leading-tight'>
                        Best Selling
                    </h2>
                    <span className="mx-1 block h-1 w-16 bg-gradient-to-r from-[#dd1818] to-[#333333]"></span>
                </div>
                <div className="h-[30rem] rounded-md flex flex-col antialiased dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
                    <InfiniteMovingCards
                        direction="left"
                        speed="slow"
                    />
                </div>
            </div>
        </Wrapper>
    );
}