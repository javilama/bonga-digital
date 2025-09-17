// Opción: componente cliente
'use client';

import Link from 'next/link';


type NavLinkProps = React.ComponentProps<typeof Link> & {
testId?: string;
children: React.ReactNode;
};


export const NavLink: React.FC<NavLinkProps> = ({ href, testId, children, ...rest }) => {
return (
<Link href={href ?? '#'} {...rest} className=" font-semibold hover:text-bonga-yellow transition-colors" data-testid={testId}>
{children}
</Link>
);
};


export default NavLink;