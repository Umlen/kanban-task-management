import Image from 'next/image';

import header from '@/styles/header.module.scss';

import mobileLogo from '/public/assets/logo/logo-mobile.svg';
import plusIcon from '/public/assets/icons/icon-add-task-mobile.svg';
import menuIcon from '/public/assets/icons/icon-vertical-ellipsis.svg';
import iconChevronDown from '/public/assets/icons/icon-chevron-down.svg';
import iconChevronUp from '/public/assets/icons/icon-chevron-up.svg';

import PrimaryBigBtn from '../buttons/PrimaryBigBtn';

function HeaderMobile() {
  return (
    <header className={header.flexRowContainer}>
      <Image src={mobileLogo} alt='Kanban logo' className={header.logo} />
      <div className={header.borderNameWrapper}>
        <h3 className={header.borderName}>Border Name</h3>
        <Image src={iconChevronDown} alt='' />
      </div>
      <PrimaryBigBtn text={<Image src={plusIcon} alt='' />} classStr={`${header.addBtn}`} />
      <Image src={menuIcon} alt='' />
    </header>
  );
}

export default HeaderMobile;