import { Button } from '@/components/ui/button';
import React, { FC } from 'react'

import { AiOutlineHome } from "react-icons/ai";

interface SidebarProps {
  
}

const Sidebar: FC<SidebarProps> = ({  }) => {
  return (
    <div className='pb-12 min-h-screen'>
        <div className='space-y-4 py-4'>
            <div className='px-3 py-2'>
                <h2 className='mb-2 px-4 text-lg font-semibold'>
                    Dashboard
                </h2>
                <div className='space-y-3'>
                    <Button variant={'ghost'} className='w-full justify-start rounded-none text-primary hover:text-primary'>
                        <AiOutlineHome className='mr-2 text-lg'/>
                        Home
                    </Button>
                    <Button variant={'ghost'} className='w-full justify-start rounded-none text-primary hover:text-primary'>
                        <AiOutlineHome className='mr-2 text-lg'/>
                        Messages
                    </Button>
                    <Button variant={'ghost'} className='w-full justify-start rounded-none text-primary hover:text-primary'>
                        <AiOutlineHome className='mr-2 text-lg'/>
                        Company Profile
                    </Button>
                    <Button variant={'ghost'} className='w-full justify-start rounded-none text-primary hover:text-primary'>
                        <AiOutlineHome className='mr-2 text-lg'/>
                        All Applicants
                    </Button>
                    <Button variant={'ghost'} className='w-full justify-start rounded-none text-primary hover:text-primary'>
                        <AiOutlineHome className='mr-2 text-lg'/>
                        Job Listings
                    </Button>
                    <Button variant={'ghost'} className='w-full justify-start rounded-none text-primary hover:text-primary'>
                        <AiOutlineHome className='mr-2 text-lg'/>
                        My Schedules
                    </Button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Sidebar;