import javascriptIcon from '../assets/images/javascript.png';
import htmlIcon from '../assets/images/html.png';
import cssIcon from '../assets/images/css.png';
import scssIcon from '../assets/images/scss.png';
import styledComponentsIcon from '../assets/images/styled-components.png';
import reactIcon from '../assets/images/react.png';
import reduxIcon from '../assets/images/redux.png';
import webpackIcon from '../assets/images/webpack.png';
import jestIcon from '../assets/images/jest.png';
import figmaIcon from '../assets/images/figma.png';

export type Technology = {
    icon: string;
    label: string;
};
  
  export const technologies: Technology[] = [
    {
        icon: javascriptIcon,
        label: 'JavaScript',
    },
    {
        icon: htmlIcon,
        label: 'HTML',
    },
    {
        icon: cssIcon,
        label: 'CSS',
    },
    {
        icon: scssIcon,
        label: 'SCSS',
    },
    {
        icon: styledComponentsIcon,
        label: 'styled-components',
    },
    {
        icon: reactIcon,
        label: 'React',
    },
    {
        icon: reduxIcon,
        label: 'Redux',
    },
    {
        icon: webpackIcon,
        label: 'Webpack',
    },
    {
        icon: jestIcon,
        label: 'Jest',
    },
    {
        icon: figmaIcon,
        label: 'Figma',
    },
  ];