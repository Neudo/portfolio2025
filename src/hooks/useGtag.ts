// Extend the Window interface to include gtag
declare global {
  interface Window {
    gtag: (
      command: 'config' | 'event' | 'js' | 'set',
      targetId: string | Date,
      config?: any
    ) => void;
    dataLayer: any[];
  }
}

export const useGtag = () => {
  const trackEvent = (action: string, category: string, label?: string, value?: number) => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', action, {
        event_category: category,
        event_label: label,
        value: value,
      });
    }
  };

  const trackPageView = (page: string, title?: string) => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'page_view', {
        page_path: page,
        page_title: title,
      });
    }
  };

  const trackUserInteraction = (element: string, action: string) => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', action, {
        event_category: 'User Interaction',
        event_label: element,
      });
    }
  };

  const trackThemeChange = (theme: string) => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'theme_change', {
        event_category: 'UI',
        event_label: theme,
        custom_parameter_theme: theme,
      });
    }
  };

  const trackModalOpen = (modalTitle: string) => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'modal_open', {
        event_category: 'UI',
        event_label: modalTitle,
        custom_parameter_modal: modalTitle,
      });
    }
  };

  const trackScrollProgress = (progress: number) => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'scroll_progress', {
        event_category: '3D Experience',
        event_label: `${Math.round(progress * 100)}%`,
        value: Math.round(progress * 100),
        custom_parameter_progress: progress,
      });
    }
  };

  const trackNavigation = (section: string, progress: number) => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'navigate_to_section', {
        event_category: '3D Navigation',
        event_label: section,
        value: Math.round(progress * 100),
        custom_parameter_section: section,
        custom_parameter_progress: progress,
      });
    }
  };

  return {
    trackEvent,
    trackPageView,
    trackUserInteraction,
    trackThemeChange,
    trackModalOpen,
    trackScrollProgress,
    trackNavigation,
  };
};
