const themeToggle = document.getElementById('theme-toggle');

function setTheme(theme) {
    if (theme === 'light') {
        document.body.classList.add('light-theme', 'light');
        themeToggle.textContent = '☀️';
    } else {
        document.body.classList.remove('light-theme', 'light');
        themeToggle.textContent = '🌙';
    }
    localStorage.setItem('preferredTheme', theme);
}

themeToggle.addEventListener('click', () => {
    const currentTheme = document.body.classList.contains('light-theme') ? 'dark' : 'light';
    setTheme(currentTheme);
});

setTheme(localStorage.getItem('preferredTheme') || 'dark');

const tabs = document.querySelectorAll('.tab');
const tabContents = document.querySelectorAll('.tab-content');

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        tabs.forEach(t => t.classList.remove('active'));
        tabContents.forEach(c => c.classList.remove('active'));

        tab.classList.add('active');
        document.getElementById(tab.dataset.tab).classList.add('active');
    });
});

const fadeSections = document.querySelectorAll('.fade');

const fadeObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.4
});

fadeSections.forEach(section => fadeObserver.observe(section));

function copyEmail() {
    const email = document.getElementById('email').textContent;
    navigator.clipboard.writeText(email)
        .then(() => alert('Email copied to clipboard!'))
        .catch(() => alert('Failed to copy email.'));
}

particlesJS('particles-js', {
    particles: {
        number: { value: 60, density: { enable: true, value_area: 800 } },
        color: { value: '#5e00aa' }, 
        shape: { type: 'circle' },
        opacity: {
            value: 0.7, 
            anim: { enable: false }
        },
        size: {
            value: 3,
            random: true
        },
        line_linked: {
            enable: true,
            distance: 120,
            color: '#5e00aa', 
            opacity: 0.6,      
            width: 1
        },
        move: {
            enable: true,
            speed: 1,
            direction: 'none',
            random: true
        }
    },
    interactivity: {
        detect_on: 'canvas',
        events: {
            onhover: { enable: true, mode: 'grab' }
        },
        modes: {
            grab: { distance: 140, line_linked: { opacity: 0.9 } } 
        }
    },
    retina_detect: true
});

document.querySelectorAll('.macbook-keyboard .key').forEach(key => {
  key.addEventListener('mousedown', () => key.classList.add('pressed'));
  key.addEventListener('mouseup', () => key.classList.remove('pressed'));
  key.addEventListener('mouseleave', () => key.classList.remove('pressed'));
});

document.addEventListener('DOMContentLoaded', function() {
  const launcher = document.getElementById('mac-app-launcher');
  const tabs = document.getElementById('mac-tabs-container');
  if (launcher && tabs) {
    launcher.addEventListener('click', function() {
      launcher.style.display = 'none';
      tabs.style.display = 'block';
    });
  }
});
