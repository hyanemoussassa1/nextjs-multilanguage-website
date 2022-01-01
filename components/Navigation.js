import Link from "next/link";
import Evergreen from '../src/assets/svg/Evergreen_logo_nid.svg'
import styles from "../styles/Navigation.module.css";
import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { BellIcon, MenuIcon, XIcon } from '@heroicons/react/outline'
import React, { useState } from 'react';
import { useMediaQuery } from 'react-responsive'

const Navigation = ({ locale, locales, defaultLocale }) => {
  const resolveHome = {
    en: "Contact us",
    es: "Contacta con nosotros",
  };
  const resolveAbout = {
    en: "About us",
    es: "Acerca",
  };

  const [isOpened, setIsOpened] = useState(false);


  const isBiggerTabletOrMobile = useMediaQuery({ query: '(min-width: 1024px)' })

  function toggle() {
    // if (isBiggerTabletOrMobile){
    //   setIsOpened(isOpened => true);
    // }else {
      setIsOpened(wasOpened => !wasOpened);
    //}
  };
  
  const defaultRoot = locale === defaultLocale ? "/" : `/${locale}/`;
  
  return (
    <header className="w-full bg-white">
      <nav className="" role="navigation">
        <div className="container mx-auto p-4 flex flex-wrap items-center md:flex-no-wrap">
          <div className="mr-4 md:mr-8">
            <Link href="/">
              <a>
                <Evergreen 
                  width="120" 
                  height="120"/>
              </a>
            </Link>
          </div>
          <div className="text-black hidden lg:grid">
            <p className="text-lg">Welcome to</p>
            <p>Evergreen Nature Association</p>
          </div>
          <div className="ml-auto md:hidden">
            <button
              className="flex items-center px-3 py-2 border rounded"
              type="button"
              onClick={toggle}
            >
              <svg
                className="h-3 w-3"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Menu</title>
                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
              </svg>
            </button>
          </div>
          <div className="w-full md:w-auto md:flex-grow md:flex md:items-center">
              <ul className={`flex md:inline-flex flex-col mt-4 -mx-4 pt-4 border-t md:flex-row md:items-center md:mx-0 md:mt-0 md:pt-0 md:mr-4 md:ml-auto lg:mr-8 md:border-0
                   ${isOpened ? "inline-block" : "hidden"}`}>
                <li>
                  <Link href={`${defaultRoot}about`}>
                    <a className="block px-4 py-1 md:p-2 lg:px-8">
                      {resolveAbout[locale]}
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href={`${defaultRoot}blog`}>
                    <a className="block px-4 py-1 md:p-2 lg:px-8">Projects</a>
                  </Link>
                </li>
                {/* <li>
                  <Link href={`${defaultRoot}`}>
                    <a className="block px-4 py-1 md:p-2 lg:px-8">
                      {resolveHome[locale]}
                    </a>
                  </Link>
                </li> */}
                <li>
                  <Link href={`${defaultRoot}blog`}>
                    <a className="block px-4 py-1 md:p-2 lg:px-8">
                    <span className={styles["icon-display-inline"]}>More</span>
                    <span className={styles["ssrcss-1jhq4ui-IconWrapper"]}>
                      <svg viewBox="0 0 32 32" width="1em" height="1em" className={styles["ssrcss-xi5oyi-StyledIcon e6m7o991"]} focusable="false" aria-hidden="true"><path d="M26.7 12.6L16 23.2 5.3 12.6V8.8h21.4v3.8z"></path>
                      </svg>
                    </span>
                    </a>
                  </Link>
                </li>
              </ul>
            <ul className="flex flex-col mt-4 -mx-4 pt-4 border-t md:flex-row md:items-center md:mx-0 md:mt-0 md:pt-0 md:border-0">
              {locales.map((loc) => {
                return (
                  <li key={loc}>
                    <Link
                      href={`/${loc === defaultLocale ? "" : loc}`}
                      locale={false}
                    >
                      <a
                        className={`block px-4 py-1 md:p-2 rounded-lg lg:px-4 ${
                          locale === loc ? "bg-black text-white" : ""
                        }`}
                      >
                        {loc}
                      </a>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navigation;
