'use client';

import { FC, PropsWithChildren, createContext } from 'react';
import { IUser } from '@/src/types/user';

interface Props extends PropsWithChildren {
  user: IUser | undefined;
}
export const UserContext = createContext<IUser | undefined>(undefined);

export const UserProvider: FC<Props> = ({ children, user }) => {
  return <UserContext value={user}>{children}</UserContext>;
};
