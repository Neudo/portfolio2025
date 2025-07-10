# Google Analytics Setup

This project uses Google Analytics 4 (GA4) to track user interactions and site performance.

## Setup Instructions

### 1. Get Your GA4 Measurement ID
1. Go to [Google Analytics](https://analytics.google.com/)
2. Create a new property for your website
3. Get your Measurement ID (starts with `G-`)

### 2. Configure Environment Variables
1. Copy `.env.example` to `.env.local`:
   ```bash
   cp .env.example .env.local
   ```
2. Add your Measurement ID to `.env.local`:
   ```
   VITE_GA_MEASUREMENT_ID=G-XXXXXXXXXX
   ```

### 3. What's Being Tracked

#### Automatic Tracking
- **Page Views**: Every route visit is automatically tracked
- **Initial Setup**: GA4 is initialized in `main.tsx` with debug mode for development

#### User Interactions
- **Theme Changes**: When users switch between day/night themes
- **Modal Opens**: When information modals are opened
- **3D Navigation**: When users click navigation buttons to jump to different sections
- **Scroll Progress**: Track which sections users visit in the 3D experience

#### Custom Events
The `useAnalytics` hook provides these tracking functions:
- `trackEvent()` - General event tracking
- `trackPageView()` - Manual page view tracking
- `trackUserInteraction()` - UI element interactions
- `trackThemeChange()` - Theme switching
- `trackModalOpen()` - Modal interactions
- `trackScrollProgress()` - 3D scene navigation

### 4. Usage in Components

```tsx
import { useAnalytics } from '@/hooks/useAnalytics';

function MyComponent() {
  const { trackEvent, trackUserInteraction } = useAnalytics();
  
  const handleClick = () => {
    // Track custom events
    trackEvent('button_click', 'UI', 'custom-button');
    
    // Or use specific tracking functions
    trackUserInteraction('custom-button', 'click');
  };

  return <button onClick={handleClick}>Click me</button>;
}
```

### 5. Development vs Production

- **Development**: Debug mode is enabled to help with testing
- **Production**: Only production events are sent to GA4
- **Privacy**: Only anonymized usage data is collected

### 6. Data You'll See in GA4

- Page views and session duration
- Theme preference usage (day vs night)
- Which portfolio sections are most visited
- Modal engagement rates
- 3D navigation patterns
- Device and browser information

## Privacy Notes

This implementation:
- Only tracks anonymized usage patterns
- Does not collect personal information
- Respects user privacy settings
- Uses Google's standard GA4 privacy practices
