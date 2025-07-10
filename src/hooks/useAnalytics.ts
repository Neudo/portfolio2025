import ReactGA from 'react-ga4';

export const useAnalytics = () => {
  const trackEvent = (action: string, category: string, label?: string, value?: number) => {
    ReactGA.event({
      action,
      category,
      label,
      value,
    });
  };

  const trackPageView = (page: string, title?: string) => {
    ReactGA.send({ 
      hitType: 'pageview', 
      page,
      title 
    });
  };

  const trackUserInteraction = (element: string, action: string) => {
    ReactGA.event({
      action,
      category: 'User Interaction',
      label: element,
    });
  };

  const trackThemeChange = (theme: string) => {
    ReactGA.event({
      action: 'Theme Changed',
      category: 'UI',
      label: theme,
    });
  };

  const trackModalOpen = (modalTitle: string) => {
    ReactGA.event({
      action: 'Modal Opened',
      category: 'UI',
      label: modalTitle,
    });
  };

  const trackScrollProgress = (progress: number) => {
    ReactGA.event({
      action: 'Scroll Progress',
      category: '3D Experience',
      label: `${Math.round(progress * 100)}%`,
      value: Math.round(progress * 100),
    });
  };

  return {
    trackEvent,
    trackPageView,
    trackUserInteraction,
    trackThemeChange,
    trackModalOpen,
    trackScrollProgress,
  };
};
