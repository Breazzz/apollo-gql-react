import React from 'react';
import ReactDOM from 'react-dom/client';
import { ChakraProvider } from '@chakra-ui/react';

import { ApolloProvider } from "@apollo/client";
import client from "./apollo/client";

import App from './App';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <ChakraProvider>
      <ApolloProvider client={client} >
        <App />
      </ApolloProvider>
    </ChakraProvider>
);
