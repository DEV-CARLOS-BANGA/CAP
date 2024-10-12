import React from 'react';
import { StatusBar } from 'expo-status-bar';
import Routes from './src/routes/routes';
import TestPrisma from './src/screens/test_prisma';

export default function App() {
  return (
    <>
      <Routes />
      <StatusBar style="dark" backgroundColor='#ffffff' translucent={false} />
    </>
  );
}
