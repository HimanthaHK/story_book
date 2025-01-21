"use client"

import React, { useState } from 'react'

import {  Navbar,   
    NavbarBrand,   
    NavbarContent,   
    NavbarItem,   
    NavbarMenuToggle,  
    NavbarMenu,  
    NavbarMenuItem
} from "@heroui/navbar";
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@heroui/button';
import { UserButton, useUser } from '@clerk/nextjs';


function Header() {

    const {user,isSignedIn}=useUser();

    const MenuList=[

        {
          name:'Home',
          path:'/'
        },
        {
            name:'Create Story',
            path:'/create-story'
        },
        {
            name:'Explore Stories',
            path:'/explore'
        },
        {
            name:'Contact Us',
            path:'/contact-us'
        }
    ]

    const [isMenuOpen,setIsMenuOpen]=useState(false);



  return (
    <Navbar maxWidth='full' onMenuOpenChange={setIsMenuOpen} >
        <NavbarContent>
            <NavbarMenuToggle
            aria-label={isMenuOpen?"Close menu":"Open menu"}
            className='sm:hidden'
            />            
            <NavbarBrand>
                <Image src={'/logo.svg'} alt='logo' width={40} height={40}/>
                <h2 className='font-bold text-2xl text-purple-700 ml-3'>Kids Story</h2>
            </NavbarBrand>
        </NavbarContent>
        <NavbarContent justify='center' className='hidden sm:flex'>

            {MenuList.map((item,index)=>
            (
                <NavbarItem key={index} className='text-xl text-gray-700 font-medium hover:font-bold mx-2'>
                    <Link href={item.path}>
                     {item.name}

                    </Link>
                </NavbarItem>
            ))}

        </NavbarContent>
        <NavbarContent justify='end'>
            <Link href={'/dashboard'}>
            <Button color='secondary'>
                {
                    isSignedIn?
                    'Dashboard':
                    'Get Started'
                }
                </Button>
                </Link>
                <UserButton/>
        </NavbarContent>
        <NavbarContent>
            <NavbarMenu>
                {MenuList.map((item,index)=>(
                    <NavbarMenuItem key={index}> {/* Unique key added here */}
                        <Link href={item.path}>
                            {item.name}
                        </Link>
                    </NavbarMenuItem>
                ))}
            </NavbarMenu>
        </NavbarContent>
    </Navbar>
  )
}

export default Header