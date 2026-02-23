import { RouterProvider, createRouter, createRoute, createRootRoute } from '@tanstack/react-router';
import Home from './pages/Home';
import Shop from './pages/Shop';
import LivingRoom from './pages/LivingRoom';
import Bedroom from './pages/Bedroom';
import Office from './pages/Office';
import About from './pages/About';
import Contact from './pages/Contact';
import Layout from './components/Layout';

const rootRoute = createRootRoute({
  component: Layout,
});

const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  component: Home,
});

const shopRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/shop',
  component: Shop,
});

const livingRoomRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/shop/living-room',
  component: LivingRoom,
});

const bedroomRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/shop/bedroom',
  component: Bedroom,
});

const officeRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/shop/office',
  component: Office,
});

const aboutRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/about',
  component: About,
});

const contactRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/contact',
  component: Contact,
});

const routeTree = rootRoute.addChildren([
  indexRoute,
  shopRoute,
  livingRoomRoute,
  bedroomRoute,
  officeRoute,
  aboutRoute,
  contactRoute,
]);

const router = createRouter({ routeTree });

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}

function App() {
  return <RouterProvider router={router} />;
}

export default App;
