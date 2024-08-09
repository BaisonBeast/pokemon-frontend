import { RouterProvider } from '@tanstack/react-router';
import React from 'react';
import { router } from './router/router';

function App() {
  return (
    <React.Suspense fallback={<div>Loading...</div>}>
      <RouterProvider router={router} />
    </React.Suspense>
  );
}

export default App;
