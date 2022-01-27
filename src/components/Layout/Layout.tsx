import React, { useState } from 'react';
import { useHotkeys } from '@mantine/hooks';
import {
  MantineProvider,
  ColorSchemeProvider,
  ColorScheme,
  GlobalStyles,
  NormalizeCSS,
  AppShell, Navbar, Header,
} from '@mantine/core';

interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  const [colorScheme, setColorScheme] = useState<ColorScheme>('light');
  const toggleColorScheme = (value?: ColorScheme) =>
    setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'));

  useHotkeys([['mod+J', () => toggleColorScheme()]]);

  return (
    <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
      {/* Add your theme here */}
      <MantineProvider theme={{ colorScheme }}>
        <GlobalStyles />
        <NormalizeCSS />
          <AppShell
            padding="md"
            navbar={<Navbar width={{ base: 300 }} height={500} padding="xs">{}</Navbar>}
            header={<Header height={60} padding="xs">{/* Header content */}</Header>}
            styles={(theme) => ({
              main: { backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0] },
            })}
          >
            {children}
          </AppShell>
      </MantineProvider>
    </ColorSchemeProvider>
  );
}
