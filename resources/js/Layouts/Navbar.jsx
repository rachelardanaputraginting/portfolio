import React from 'react';
import NavLink from '@/Components/NavLink';
import DropdownMenu from '@/Components/DropdownMenu';
import ResponsiveNavigation from '@/Layouts/ResponsiveNavigation';
import { Link, usePage } from '@inertiajs/react';
import Container from '@/Components/Container';
import ApplicationLogo from '@/Components/ApplicationLogo';

export default function Navigation() {
    const { auth } = usePage().props;
    return (
        <>
            <ResponsiveNavigation />
            <Container>
                <nav className="hidden bg-fourth py-4 shadow-lg lg:block rounded-md">
                    <div className="mx-auto max-w-screen-2xl">
                        <div className="flex items-center justify-between">
                            <Link
                                href={route('home')}
                                className="text-lg font-semibold capitalize text-white"
                            >
                                <ApplicationLogo />
                            </Link>

                            <div className="flex flex-1 items-center justify-end">
                                <div className="flex items-center">
                                    {auth.user ?
                                        <div className="flex items-center">
                                            <DropdownMenu label={auth.user.name}>
                                                <DropdownMenu.Links
                                                    href={route('dashboard')}
                                                >
                                                    Dashboard
                                                </DropdownMenu.Links>
                                                <DropdownMenu.Links href={`/${auth.user.username}`}>
                                                    My profile
                                                </DropdownMenu.Links>
                                                <DropdownMenu.Links href={'#'}>
                                                    Settings
                                                </DropdownMenu.Links>
                                                <DropdownMenu.Divider />
                                                {auth.user.hasRole ?
                                                    <>
                                                        <DropdownMenu.Links href={route('articles.table')}>
                                                            My articles
                                                        </DropdownMenu.Links>
                                                        <DropdownMenu.Links href={route('articles.create')}>
                                                            New article
                                                        </DropdownMenu.Links>
                                                    </>
                                                    : null}

                                                <DropdownMenu.Divider />
                                                <DropdownMenu.Links
                                                    href={route('logout')}
                                                    method="POST"
                                                    as="button"
                                                >
                                                    Logout
                                                </DropdownMenu.Links>
                                            </DropdownMenu>
                                        </div>
                                        :
                                        <NavLink href={route('home')}>
                                            Rachel Ardana Putra Ginting
                                        </NavLink>
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
            </Container>
        </>
    );
}
