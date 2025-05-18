'use client';

import Image from 'next/image';
import logo from '@/assets/logo.png';
import Link from 'next/link';
import { Button, Dropdown, MenuProps } from 'antd';
import { useRouter } from 'next/navigation';
import { isLoggedIn, loggedOut } from '@/service/auth.service';
import { authKey } from '@/constants/storageKey';
import avatar from '@/assets/avatar.jpg';
import { useAppSelector } from '@/redux/hooks';
import { userLoggedOut } from '@/redux/slice/userSlice';
import useAuthCheck from '@/redux/hooks/useAuthCheck';

export default function HomepageHeader() {
  useAuthCheck();
  const router = useRouter();
  const isLogin = isLoggedIn();
  const user = useAppSelector((state) => state.auth.user);

  const logout = () => {
    loggedOut(authKey);
    userLoggedOut();
    router.push('/login');
  };

  const items: MenuProps["items"] = [
    {
      key: "0",
      label: (
        <Button onClick={logout} type="text" danger>
          Logout
        </Button>
      ),
    },
  ];

  return (
    <nav className="navbar navbar-expand-lg" style={{ backgroundColor: '#ffffff', borderBottom: '1px solid #eaeaea' }}>
      <div className="container">
        <Link href="/" className="navbar-brand">
          <Image src={logo} width={90} alt="logo" />
        </Link>
        <button
          className="navbar-toggler text-dark border-dark"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0 gap-3">
            {[
              { label: 'Home', href: '/' },
              { label: 'Blog', href: '/blog' },
              { label: 'Contact', href: '/contact' },
              { label: 'About', href: '/about' },
            ].map((item) => (
              <li className="nav-item" key={item.href}>
                <Link className="nav-link fw-medium nav-hover" href={item.href}>
                  {item.label}
                </Link>
              </li>
            ))}

            <li className="nav-item">
              <div className="d-flex align-items-center gap-2">
                {isLogin ? (
                  <Dropdown menu={{ items }}>
                    <Link
                      href={
                        user?.role === 'admin' || user?.role === 'super_admin'
                          ? '/admin/dashboard'
                          : '/customer/dashboard'
                      }
                      style={{ textDecoration: 'none' }}
                    >
                      <button className="btn btn-outline-primary btn-sm d-flex align-items-center gap-2 rounded-pill px-3">
                        <span className="fw-semibold">Dashboard</span>
                        <Image
                          src={user?.profileImg || avatar}
                          width={25}
                          height={25}
                          alt="user"
                          className="rounded-circle border border-2 border-primary"
                        />
                      </button>
                    </Link>
                  </Dropdown>
                ) : (
                  <>
                    <Link href="/login">
                      <Button type="primary" className="rounded-pill px-4">
                        Login
                      </Button>
                    </Link>
                    <Link href="/signup">
                      <Button className="rounded-pill px-4" style={{ backgroundColor: '#f0f2f5', border: 'none' }}>
                        Sign Up
                      </Button>
                    </Link>
                  </>
                )}
              </div>
            </li>
          </ul>
        </div>
      </div>

      <style jsx>{`
        .nav-link {
          color: #333;
          transition: all 0.3s ease;
          padding: 8px 12px;
          border-radius: 6px;
        }

        .nav-hover:hover {
          background-color: #f0f2f5;
          color: #000;
          box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
        }

        .btn-primary:hover {
          opacity: 0.9;
        }
      `}</style>
    </nav>
  );
}
