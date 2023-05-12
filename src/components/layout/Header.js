import Image from 'next/image';

import header from '@/styles/header.module.scss';

import logo from '/public/assets/logo/logo-light.svg';
import menuIcon from '/public/assets/icons/icon-vertical-ellipsis.svg';

import PrimaryBigBtn from '../buttons/PrimaryBigBtn';

function Header() {
  return (
    <header className={header.flexRowContainer}>
      <div className={header.logoWrapper}>
        <Image src={logo} alt='Kanban logo' />
      </div>
      <div className={header.controlPanel}>
        <h3 className={header.borderName}>Border Name</h3>
        <PrimaryBigBtn text='+ Add New Task' classStr={`${header.addBtn}`} />
        <Image src={menuIcon} alt='' />
      </div>
    </header>
  );
}

export default Header;