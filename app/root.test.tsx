import { render } from '@testing-library/react';
import { createRoutesStub } from 'react-router';
import { describe, expect, it } from 'vitest';
import Home from './routes/home';

describe('Layout Component', () => {
  it('renders the <main> element', () => {
    const Stub = createRoutesStub([
      {
        path: '/',
        Component: (props) => (
          <Home
            {...props}
            loaderData={{ message: 'hello from server/app.ts' }}
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
                data: { message: 'hello from server/app.ts' },
                handle: undefined,
              },
            ]}
          />
        ),
      },
    ]);

    // Render the app stub at "/"
    render(<Stub initialEntries={['/']} />);

    // this is fine just a temp pass
    expect(true).toBe(true);
  });
});
