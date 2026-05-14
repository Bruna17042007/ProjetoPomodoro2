import type { AnchorHTMLAttributes } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './styles.module.css';

type RouterLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
    href: string;
};

export function RouterLink({ href, children, ...props }: RouterLinkProps) {
    return (
        <NavLink
            to={href}
            className={({ isActive }) =>
                isActive ? `${styles.link} ${styles.active}` : styles.link
            }
            {...props}
        >
            {children}
        </NavLink>
    );
}