// app/page.tsx
"use client";

import { withAuthenticator } from "@aws-amplify/ui-react";
import { Amplify } from 'aws-amplify';
import config from '@/amplifyconfiguration.json';
import "@aws-amplify/ui-react/styles.css";


Amplify.configure(config);

function App() {
  return (
    <>
      <h1>Derm IQ test 👋</h1>
    </>
  );
}

export default withAuthenticator(App);