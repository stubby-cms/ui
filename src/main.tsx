import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router';
import App from './App.tsx';
import './index.scss';
import { ComponentsLayout } from './layouts/ComponentsLayout.tsx';
import { CalloutSamples } from './pages/CalloutSamples.tsx';
import { TabSamples } from './pages/TabSamples.tsx';
import { AccordionSamples } from './pages/AccordionSamples.tsx';
import { StepSamples } from './pages/StepSamples.tsx';
import { ArticleSamples } from './pages/ArticleSamples.tsx';

const components: { [key: string]: React.ReactElement } = {
  accordion: <AccordionSamples />,
  tabs: <TabSamples />,
  callouts: <CalloutSamples />,
  steps: <StepSamples />,
  article: <ArticleSamples />,
};

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <Routes>
      <Route
        path="/"
        element={<App />}
      />

      <Route
        path="components"
        element={<ComponentsLayout />}
      >
        {Object.keys(components).map((key) => {
          return (
            <Route
              key={key}
              path={key}
              element={components[key]}
            />
          );
        })}
      </Route>
    </Routes>
  </BrowserRouter>,
);
