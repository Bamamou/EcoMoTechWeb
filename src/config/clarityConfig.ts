/**
 * Microsoft Clarity Configuration
 * 
 * Clarity is a behavioral analytics tool that helps understand user interactions
 * It records sessions, heatmaps, and provides insights into user behavior
 * 
 * Official Documentation: https://clarity.microsoft.com
 * NPM Package: https://www.npmjs.com/package/@microsoft/clarity
 */

export const clarityConfig = {
  // Project ID - Get this from Microsoft Clarity dashboard
  // https://clarity.microsoft.com
  projectId: import.meta.env.VITE_CLARITY_PROJECT_ID || 'rh9t9s5pf8',

  // Enable or disable Clarity
  enabled: import.meta.env.MODE === 'production' || true,

  // Custom event tracking
  events: {
    // Page views are automatically tracked by ClarityPageTracker component
    pageView: 'page_view',
    
    // User interaction events
    buttonClick: 'button_click',
    formSubmit: 'form_submit',
    productView: 'product_view',
    productClick: 'product_click',
    search: 'search',
    contactForm: 'contact_form_submit',
    jobApplication: 'job_application_submit',
  },

  // Tags for user segmentation
  tags: {
    userType: 'user_type',
    userId: 'user_id',
    sessionId: 'session_id',
    deviceType: 'device_type',
  },

  // Features to enable
  features: {
    // Record sessions automatically
    recordSession: true,
    
    // Capture user feedback (if enabled in Clarity dashboard)
    captureFeedback: true,
    
    // Track console errors
    trackErrors: true,
  },
};

export default clarityConfig;
