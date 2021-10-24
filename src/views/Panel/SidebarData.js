import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';

export const SidebarData = [
  
  {
    title: 'Doctor',
    path: '/doctor',
    icon: <IoIcons.IoIosPaper />,
    cName: 'nav-text'
  },
  {
    title: 'Clients',
    path: '/clients',
    icon: <FaIcons.FaCartPlus />,
    cName: 'nav-text'
  },
];