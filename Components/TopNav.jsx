'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
const TopNav = () => {
  const currentPath = usePathname()
  return (
    <div className="navbar bg-base-100 sticky top-0 shadow-lg">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <Link
                prefetch={true}
                className={currentPath === '/' ? 'active-link' : 'pending-link'}
                href="/"
              >
                {' '}
                Home
              </Link>
            </li>
            <li>
              <Link
                prefetch={true}
                className={
                  currentPath === '/about' ? 'active-link' : 'pending-link'
                }
                href={{
                  pathname: '/about',
                  query: { name: 'kamal', email: 'alshohid1997@gmail.com' },
                }}
              >
                {' '}
                About{' '}
              </Link>
            </li>
            <li>
              <Link
                prefetch={true}
                className={
                  currentPath === '/profile' ? 'active-link' : 'pending-link'
                }
                href="/profile"
              >
                {' '}
                Profile{' '}
              </Link>
            </li>
          </ul>
        </div>
        <a className="btn btn-ghost normal-case text-xl">Shohid Zone</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link
              prefetch={true}
              className={currentPath === '/' ? 'active-link' : 'pending-link'}
              href="/"
            >
              {' '}
              Home
            </Link>
          </li>
          <li>
            <Link
              prefetch={true}
              className={
                currentPath === '/about' ? 'active-link' : 'pending-link'
              }
               href={{
                  pathname: '/about',
                  query: { name: 'kamal', email: 'alshohid1997@gmail.com' },
                }}
            >
              {' '}
              About{' '}
            </Link>
          </li>
          <li>
            <Link
              prefetch={true}
              className={
                currentPath === '/profile' ? 'active-link' : 'pending-link'
              }
              href="/profile"
            >
              {' '}
              Profile{' '}
            </Link>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <a className="btn">Sign In</a>
      </div>
    </div>
  )
}

export default TopNav
