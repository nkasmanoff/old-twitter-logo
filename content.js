// Replace the content of this file with the JavaScript code below:
(() => {
    // Replace the Twitter logo with the custom SVG
    const replaceLogo = () => {
      const twitterLogo = document.querySelector('[aria-label="Twitter"]');
      if (twitterLogo) {
        const customLogoURL = browser.extension.getURL("custom_logo.svg");
        twitterLogo.innerHTML = '';
        twitterLogo.style = {};
        twitterLogo.style.backgroundImage = `url(${customLogoURL})`;

        twitterLogo.style.backgroundRepeat = "no-repeat";
        // center 
        twitterLogo.style.backgroundPosition = "center";
        // make logo 25% of the width of the parent
        twitterLogo.style.backgroundSize = "75%";

      }
      else { 
        console.log("Twitter logo not found.");
      }
    };
  
    // Observe the page for changes and replace the logo when needed
    const observer = new MutationObserver(replaceLogo);
    observer.observe(document.body, {
      childList: true,
      subtree: true,
    });
  
    // Replace the logo on initial load
    replaceLogo();
  })();
  