// components/Header/Logo.tsx
'use client';
import { memo, FC } from 'react';
import Image from 'next/image';

const Logo: FC = () => (
  <div className="header-logo">
    <Image src="/assets/img/logo.png" width={50} height={50} alt="Logo" />
    INVENTORY
  </div>
);

export default memo(Logo);
