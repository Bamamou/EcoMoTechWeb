# Microsoft Clarity Setup Guide

## Overview
Microsoft Clarity is a behavioral analytics tool that helps you understand how users interact with your website. It provides session recordings, heatmaps, and user behavior analytics.

## Installation Status ✅
- Package: `@microsoft/clarity` - **Installed**
- Version: Latest
- No vulnerabilities

## Configuration

### 1. Get Your Project ID
1. Go to [Microsoft Clarity Dashboard](https://clarity.microsoft.com)
2. Sign in with your Microsoft account
3. Create a new project for your website
4. Copy your **Project ID**

### 2. Set Environment Variables
Add your Clarity Project ID to your `.env` file:

```env
VITE_CLARITY_PROJECT_ID=your_clarity_project_id
```

For development with default project ID, the app will use `rh9t9s5pf8`.

### 3. Integration Files
Clarity has been integrated into your project through:

- **`src/main.tsx`**: Initializes Clarity on app startup
- **`src/hooks/useClarity.ts`**: Custom React hook for Clarity operations
- **`src/config/clarityConfig.ts`**: Clarity configuration and constants
- **`src/App.tsx`**: Automatically tracks page views when routes change

## Features Implemented

### ✅ Automatic Tracking
- **Session Recording**: All user sessions are automatically recorded
- **Page Views**: Tracked automatically when user navigates to different pages
- **Mouse Events**: Heatmaps showing where users click and move their mouse
- **Scroll Behavior**: Tracks how far users scroll on pages

### ✅ Custom Event Tracking
Use the `useClarity` hook to track custom events:

```tsx
import { useClarity } from '@/hooks/useClarity'

export function MyComponent() {
  const { trackEvent, identifyUser } = useClarity()

  const handleButtonClick = () => {
    trackEvent('button_click', { buttonName: 'CTA' })
  }

  return <button onClick={handleButtonClick}>Click Me</button>
}
```

### ✅ User Identification
Tag sessions with user information:

```tsx
const { identifyUser, setTag } = useClarity()

identifyUser('user123')
setTag('plan_type', 'premium')
```

## Usage Examples

### Track Product Views
```tsx
import { useClarity } from '@/hooks/useClarity'

export function ProductCard({ productId, productName }) {
  const { trackEvent } = useClarity()

  useEffect(() => {
    trackEvent('product_view', { 
      productId, 
      productName,
      timestamp: new Date().toISOString()
    })
  }, [productId])

  return <div>{productName}</div>
}
```

### Track Form Submissions
```tsx
const { trackEvent } = useClarity()

const handleSubmit = (data) => {
  trackEvent('contact_form_submit', { 
    formType: 'contact',
    timestamp: new Date().toISOString()
  })
  // Submit form...
}
```

### Track Errors
```tsx
const { trackEvent } = useClarity()

try {
  // Some operation
} catch (error) {
  trackEvent('error', { 
    errorMessage: error.message,
    errorStack: error.stack
  })
}
```

## Dashboard Insights

Once configured, you can view in the Clarity Dashboard:

1. **Sessions**: Watch replays of user sessions
2. **Heatmaps**: See where users click, move, and scroll
3. **Recordings**: Detailed playback of user interactions
4. **Analytics**: Aggregate metrics and trends
5. **Funnels**: Track user journey through key flows

## Privacy & Compliance

### Data Collection
- Clarity captures: clicks, scrolls, form interactions, URLs, page titles
- Clarity does NOT capture: passwords, credit cards, email addresses (unless explicitly entered)

### GDPR Compliance
Clarity has built-in compliance features:
- Data masking for sensitive content
- Cookie consent integration
- Data retention policies
- Right to be forgotten support

### Recommendations
1. Update your Privacy Policy to mention Clarity
2. Obtain user consent where required by law
3. Enable data masking in Clarity settings for sensitive fields

## Verification

### Check If Clarity Is Running
1. Open your website in browser
2. Open Developer Console (F12)
3. Look for Clarity initialization messages
4. Visit your Clarity Dashboard
5. You should see your domain in the active sites

### Debug Clarity Integration
In your browser console:
```javascript
// Check if clarity object exists
window.clarity

// Manually trigger an event
window.clarity?.event('test_event', { test: true })
```

## Troubleshooting

### Clarity Not Showing Data
- Confirm Project ID is correct in `.env`
- Check that `VITE_CLARITY_PROJECT_ID` is being read
- Ensure production build (Clarity works best in production)
- Clear browser cache and local storage

### Events Not Being Tracked
- Check if `useClarity` hook is imported correctly
- Verify component is inside Router (for useLocation to work)
- Check browser console for any error messages

### Performance Impact
- Clarity is lightweight and optimized for minimal performance impact
- Session recordings are asynchronously uploaded
- Heatmap collection happens in background

## Advanced Configuration

### Custom Data Attributes
Mark elements you want Clarity to ignore:
```html
<input data-clarity-mask="true" type="password" />
```

### Session Sampling
Set sampling rate in Clarity Dashboard to reduce costs:
- 100% = Record all sessions
- 50% = Record half of sessions
- 10% = Record 10% of sessions

## Support & Resources

- **Official Documentation**: https://clarity.microsoft.com/docs
- **NPM Package**: https://www.npmjs.com/package/@microsoft/clarity
- **Dashboard**: https://clarity.microsoft.com
- **Support**: https://support.microsoft.com

## Next Steps

1. ✅ Install package
2. ✅ Integrate into app
3. ⏳ Get your Project ID from Clarity Dashboard
4. ⏳ Add `VITE_CLARITY_PROJECT_ID` to your `.env` file
5. ⏳ Deploy to production
6. ⏳ Monitor sessions and analytics in Clarity Dashboard

---

**Installation Date**: January 2, 2026
**Package Version**: Latest (@microsoft/clarity)
**Status**: Ready for Configuration
