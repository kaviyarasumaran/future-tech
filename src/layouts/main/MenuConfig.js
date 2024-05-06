import { Icon } from '@iconify/react';
import homeFill from '@iconify/icons-eva/home-fill';
import fileFill from '@iconify/icons-eva/file-fill';
import roundGrain from '@iconify/icons-ic/round-grain';
import bookOpenFill from '@iconify/icons-eva/book-open-fill';
// routes
import {  PATH_DOCS, PATH_PAGE } from '../../routes/paths';

// ----------------------------------------------------------------------

const ICON_SIZE = {
  width: 22,
  height: 22
};

const menuConfig = [
  {
    title: 'Home',
    icon: <Icon icon={homeFill} {...ICON_SIZE} />,
    path: '/'
  },
  {
    title: 'About us',
    icon: <Icon icon={roundGrain} {...ICON_SIZE} />,
    path: PATH_PAGE.about
  },
  {
    title: 'Services',
    path: '/pages',
    icon: <Icon icon={fileFill} {...ICON_SIZE} />,
    children: [
      {
        subheader: 'Other',
        items: [
          { title: 'Consulting', path: PATH_PAGE.consulting },
          { title: 'Tution', path: PATH_PAGE.tution },
          { title: 'Guidance', path: PATH_PAGE.guidance },
          { title: 'Scholarship', path: PATH_PAGE.scholarship },
         
          
        ]
      },
     
      
      {
        subheader: 'Contact',
        items: [{ title: 'Dashboard', path: PATH_PAGE.contact }]
      }
    ]
  },
  {
    title: 'Our Team',
    icon: <Icon icon={bookOpenFill} {...ICON_SIZE} />,
    path: PATH_DOCS
  }
];

export default menuConfig;
