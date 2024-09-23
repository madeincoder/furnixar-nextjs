import './globals.css';
import type { Metadata } from 'next';
import React from 'react';

import Header from '@/components/Layouts/Header';
import Footer from '@/components/Layouts/Footer';
// import Script from 'next/script';

export const metadata: Metadata = {
  title: 'Hotkicks Ecommerce Template',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="dark:bg-title">
        <Header />
        {children}
        <Footer />
        {/* <Script src="/js/scripts.js" strategy="afterInteractive" /> */}

      </body>
    </html>
  );
}

