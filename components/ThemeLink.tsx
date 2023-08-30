'use client'

import Link, { LinkProps } from 'next/link';
import { HTMLProps, FC } from 'react';

const toggleTheme = (e: any) => {
  e.preventDefault();
  const element = document.body;
  document.getElementById("theme-toggle-dark-icon")?.classList.toggle("hidden");
  document.getElementById("theme-toggle-light-icon")?.classList.toggle("hidden");
  const result = element.classList.toggle("dark");
  localStorage.setItem('theme', result ? 'dark' : 'light');
}

const ThemeLink: FC<LinkProps & HTMLProps<HTMLAnchorElement>> = ({
  children, href, className
}) => (
  <Link
    href={href}
    className={className}
    onClick={toggleTheme}
  >
    {children}
  </Link>
);

export default ThemeLink;