'use client';

import * as React from 'react';
import type { Metadata } from "next";
import { CssVarsProvider } from '@mui/joy/styles';
import CssBaseline from '@mui/joy/CssBaseline';
import Box from '@mui/joy/Box';
import Sidebar from '../../components/Sidebar';
import Header from '../../components/Header';


export default function JoyUIDashboard({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      <head>
        <title>Admin Panel - Masjid API</title>
        <meta name="description" content="Admin panel for Masjid API" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>
        <CssVarsProvider disableTransitionOnChange>
          <CssBaseline />
          <Box sx={{ display: 'flex', minHeight: '100dvh' }}>
            <Header />
            <Sidebar />
            <Box
              component="main"
              className="MainContent"
              sx={{
                px: { xs: 2, md: 6 },
                pt: {
                  xs: 'calc(12px + var(--Header-height))',
                  sm: 'calc(12px + var(--Header-height))',
                  md: 3,
                },
                pb: { xs: 2, sm: 2, md: 3 },
                flex: 1,
                display: 'flex',
                flexDirection: 'column',
                minWidth: 0,
                height: '100dvh',
                gap: 1,
              }}
            >
            {children}
            </Box>
          </Box>
        </CssVarsProvider>
      </body>
    </html>
  );
}
