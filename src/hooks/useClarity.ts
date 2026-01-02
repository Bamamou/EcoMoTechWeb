import { useEffect } from 'react'
import Clarity from '@microsoft/clarity'

/**
 * Custom hook for Microsoft Clarity integration
 * Provides functions to track user interactions and events
 */
export const useClarity = () => {
  useEffect(() => {
    // Clarity is initialized in main.tsx, this hook provides access to its methods
    return () => {
      // Cleanup if needed
    }
  }, [])

  return {
    /**
     * Track a custom event in Clarity
     * @param eventName - Name of the event (will be slugified)
     */
    trackEvent: (eventName: string) => {
      if (Clarity && typeof Clarity.event === 'function') {
        // Clarity's event method takes just the event name
        Clarity.event(eventName)
      }
    },

    /**
     * Set a custom tag for user identification or segmentation
     * @param tagName - Name of the tag
     * @param tagValue - Value of the tag
     */
    setTag: (tagName: string, tagValue: string) => {
      if (Clarity && typeof Clarity.setTag === 'function') {
        Clarity.setTag(tagName, tagValue)
      }
    },

    /**
     * Identify a user in Clarity sessions
     * @param userId - Unique identifier for the user
     * @param customSessionId - Optional custom session ID
     * @param customPageId - Optional custom page ID
     * @param friendlyName - Optional friendly name
     */
    identifyUser: (userId: string, customSessionId?: string, customPageId?: string, friendlyName?: string) => {
      if (Clarity && typeof Clarity.identify === 'function') {
        Clarity.identify(userId, customSessionId, customPageId, friendlyName)
      }
    },

    /**
     * Set user consent for data collection
     * @param consent - true to allow collection, false to disable
     */
    setConsent: (consent: boolean) => {
      if (Clarity && typeof Clarity.consent === 'function') {
        Clarity.consent(consent)
      }
    },

    /**
     * Set consent V2 with specific permissions
     * @param consentOptions - Object with ad_Storage and analytics_Storage permissions
     */
    setConsentV2: (consentOptions?: { ad_Storage?: 'granted' | 'denied', analytics_Storage?: 'granted' | 'denied' }) => {
      if (Clarity && typeof Clarity.consentV2 === 'function') {
        Clarity.consentV2(consentOptions)
      }
    },

    /**
     * Log page navigation
     * @param pageName - Name or path of the page
     */
    logPageView: (pageName: string) => {
      if (Clarity && typeof Clarity.event === 'function') {
        const cleanPageName = `page_view_${pageName.replace(/\//g, '_')}`.toLowerCase()
        Clarity.event(cleanPageName)
      }
    },
  }
}
