import React from 'react';
import { Layout } from '../components/Layout/Layout';
import { ColorSchemeToggle } from '../components/ColorSchemeToggle/ColorSchemeToggle';
import { useState } from 'react';
import {
  Container,
  Autocomplete,
  Chips,
  Chip,
  Space,
  Drawer,
  Button,
  Group,
} from '@mantine/core';
import { DatePicker } from '@mantine/dates';

export default function HomePage() {
  const [value, setValue] = useState('');
  const [opened, setOpened] = useState(false);
  const data =
    value.trim().length > 0 && !value.includes('@')
      ? ['gmail.com', 'outlook.com', 'yahoo.com'].map((provider) => `${value}@${provider}`)
      : [];

  return (
    <Layout>
      <Container padding="xs">
        <ColorSchemeToggle />
        <Space h="lg" />
        <Autocomplete
          value={value}
          onChange={setValue}
          label="Email Autocomplete"
          placeholder="Start typing to see options"
          data={data}
        />
        <Space h="lg" />
        <Chips>
          <Chip value="react">React</Chip>
          <Chip value="ng">Angular</Chip>
          <Chip value="svelte">Svelte</Chip>
          <Chip value="vue">Vue</Chip>
        </Chips>
        <Space h="lg" />
        <Drawer
          opened={opened}
          onClose={() => setOpened(false)}
          title="Register"
          padding="xl"
          size="xl"
        >
          <h2>Drawer Content here</h2>
        </Drawer>
        <Button onClick={() => setOpened(true)}>Open Drawer</Button>
        <Space h="lg" />
        <DatePicker placeholder="Pick date" label="Event date" required />
      </Container>
    </Layout>
  );
}
