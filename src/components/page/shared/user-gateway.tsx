"use client";
import { useSession } from 'next-auth/react';
import React from 'react';
import { ProfileDropdown } from '../profile';
import { CustomButton } from '@/components/ui';
import { SignInForm } from '../signin';


export const UserGateway = ({togglesignin,signin,mobile=false}:{togglesignin:(v:any)=> void, signin:boolean,mobile?:boolean}) => {
    const { data: session } = useSession();

  return (
   <>
         {session?.user ? (
              <ProfileDropdown />
            ) : (
              <>
                <CustomButton
                  whenClicked={() => togglesignin((prev:boolean) => !prev)}
                  title="Sign In"
                />
                {signin ? <SignInForm close={mobile ? togglesignin : undefined} /> : null}
              </>
            )}
   </>
  )
}

