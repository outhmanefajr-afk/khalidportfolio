document.addEventListener("DOMContentLoaded", function () {
  const emailLink = document.getElementById('gmailLink');

  emailLink.addEventListener('click', function (event) {
    event.preventDefault();

    const email = 'khaldfajri@gmail.com';
    const userAgent = navigator.userAgent || navigator.vendor || window.opera;

    if (/android|iphone|ipad|ipod/i.test(userAgent)) {
      // Try to open Gmail app
      window.location.href = `googlegmail:///co?to=${email}`;

      // Fallback to Gmail web after 1.5s
      setTimeout(() => {
        window.location.href = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}`;
      }, 1500);
    } else {
      // Open Gmail web compose in new tab on desktop
      window.open(`https://mail.google.com/mail/?view=cm&fs=1&to=${email}`, '_blank');
    }
  });
});
