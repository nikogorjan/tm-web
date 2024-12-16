'use client'; // This directive marks the component as a Client Component

import { Provider } from 'react-redux';
import { store } from '../app/store/store';

export default function ClientProvider({ children }) {
  return <Provider store={store}>{children}</Provider>;
}