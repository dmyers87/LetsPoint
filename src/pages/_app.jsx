import React from 'react';
import App, { Container } from 'next/app';
import { AuthProvider } from 'containers/Auth';
import '../styles/index.css';

export default class extends App {
  render() {
    const { Component, pageProps, router } = this.props;
    return (
      <Container>
        <AuthProvider>
          <Component {...pageProps} router={router} />
        </AuthProvider>
      </Container>
    );
  }
}
