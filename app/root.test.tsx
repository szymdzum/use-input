import { render, screen } from '@testing-library/react';
import { createRoutesStub } from 'react-router';
import { describe, expect, it } from 'vitest';
import Home from './routes/home';

describe('Layout Component', () => {
  it('renders without throwing and uses loader data', () => {
    const testMessage = 'hello from server/app.ts';
    const Stub = createRoutesStub([
      {
        path: '/',
        Component: (props) => (
          <Home
            {...props}
            loaderData={{ message: testMessage }}
            params={{}}
            matches={[
              {
                id: 'root',
                params: {},
                pathname: '/',
                data: undefined,
                handle: undefined,
              },
              {
                id: 'routes/home',
                params: {},
                pathname: '/',
                data: { message: testMessage },
                handle: undefined,
              },
            ]}
          />
        ),
      },
    ]);

    expect(() => render(<Stub initialEntries={['/']} />)).not.toThrow();

    const messageElement = screen.getByText(testMessage);
    expect(messageElement).toBeTruthy();
    expect(messageElement.textContent).toBe(testMessage);
  });
});
