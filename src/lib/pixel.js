export const trackEvent = (event, params = {}) => {
  if (window.fbq) {
    window.fbq("track", event, params);
    console.log("Pixel Event Fired:", event, params);
  }
};
