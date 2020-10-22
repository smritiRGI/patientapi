import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';

export const SidebarData = [
  {
    title: 'Home',
    path: '/',
    icon: <AiIcons.AiFillHome />,
    cName: 'nav-text'
  },
  {
    title: 'Register',
    path: '/register',
    icon: <IoIcons.IoIosPaper />,
    cName: 'nav-text'
  },
  {
    title: 'Update',
    path: '/update',
    icon: <FaIcons.FaRegEdit />,
    cName: 'nav-text'
  },
  {
    title: 'Filter',
    path: '/filter',
    icon: <IoIcons.IoMdPeople />,
    cName: 'nav-text'
  }

];
