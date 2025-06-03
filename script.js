
// Navigation Toggle
const navToggle = document.getElementById('nav-toggle');
const navMenu = document.getElementById('nav-menu');

if (navToggle && navMenu) {
    navToggle.addEventListener('click', function() {
        navMenu.classList.toggle('active');
        navToggle.classList.toggle('active');
    });
}

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(function(link) {
    link.addEventListener('click', function() {
        if (navMenu) navMenu.classList.remove('active');
        if (navToggle) navToggle.classList.remove('active');
    });
});

// Smooth scrolling for navigation links - Enhanced for better browser compatibility
document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const target = document.querySelector(targetId);
        
        if (target) {
            // Use modern scroll method with fallback
            if (target.scrollIntoView) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            } else {
                // Fallback for older browsers
                const targetPosition = target.offsetTop - 80;
                window.scrollTo(0, targetPosition);
            }
        }
    });
});

// Scroll indicator in hero section
const scrollIndicator = document.querySelector('.scroll-indicator');
if (scrollIndicator) {
    scrollIndicator.addEventListener('click', function() {
        const aboutSection = document.querySelector('#about');
        if (aboutSection) {
            if (aboutSection.scrollIntoView) {
                aboutSection.scrollIntoView({
                    behavior: 'smooth'
                });
            } else {
                // Fallback for older browsers
                const targetPosition = aboutSection.offsetTop - 80;
                window.scrollTo(0, targetPosition);
            }
        }
    });
}

// Header background change on scroll - Throttled for better performance
let ticking = false;

function updateHeader() {
    const header = document.querySelector('.header');
    if (header) {
        if (window.pageYOffset > 100) {
            header.style.background = 'rgba(255, 255, 255, 0.98)';
        } else {
            header.style.background = 'rgba(255, 255, 255, 0.95)';
        }
    }
    ticking = false;
}

function requestTick() {
    if (!ticking) {
        requestAnimationFrame(updateHeader);
        ticking = true;
    }
}

window.addEventListener('scroll', requestTick);

// Animate skill bars when they come into view
const observerOptions = {
    threshold: 0.3,
    rootMargin: '0px 0px -50px 0px'
};

// Use Intersection Observer with fallback
if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
            if (entry.isIntersecting) {
                // Animate skill bars
                if (entry.target.classList.contains('skills')) {
                    const skillBars = entry.target.querySelectorAll('.skill-progress');
                    skillBars.forEach(function(bar) {
                        const width = bar.getAttribute('data-width');
                        setTimeout(function() {
                            bar.style.width = width + '%';
                        }, 200);
                    });
                }
                
                // Add fade-in animation
                entry.target.classList.add('fade-in', 'visible');
            }
        });
    }, observerOptions);

    // Observe all sections for animations
    document.querySelectorAll('section').forEach(function(section) {
        section.classList.add('fade-in');
        observer.observe(section);
    });
} else {
    // Fallback for browsers without Intersection Observer
    document.querySelectorAll('section').forEach(function(section) {
        section.classList.add('fade-in', 'visible');
    });
    
    // Animate skill bars immediately for older browsers
    setTimeout(function() {
        const skillBars = document.querySelectorAll('.skill-progress');
        skillBars.forEach(function(bar) {
            const width = bar.getAttribute('data-width');
            bar.style.width = width + '%';
        });
    }, 1000);
}

// Enhanced contact form handling with better error handling
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        try {
            const formData = new FormData(this);
            const name = formData.get('name') || '';
            const email = formData.get('email') || '';
            const subject = formData.get('subject') || 'Portfolio Contact';
            const message = formData.get('message') || '';
            
            // Validate required fields
            if (!name.trim() || !email.trim() || !message.trim()) {
                showNotification('Please fill in all required fields.', 'error');
                return;
            }
            
            // Basic email validation
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                showNotification('Please enter a valid email address.', 'error');
                return;
            }
            
            // Create mailto link with proper encoding
            const mailtoSubject = encodeURIComponent(subject);
            const mailtoBody = encodeURIComponent(
                'Hi Helmuth,\n\n' +
                'Name: ' + name + '\n' +
                'Email: ' + email + '\n\n' +
                'Message:\n' + message + '\n\n' +
                'Best regards,\n' + name
            );
            const mailtoLink = 'mailto:helmuths.tampubolon@gmail.com?subject=' + mailtoSubject + '&body=' + mailtoBody;
            
            // Open email client
            window.location.href = mailtoLink;
            
            // Show success message
            showNotification('Opening email client. Message will be pre-filled for you!', 'success');
            
            // Reset form
            this.reset();
            
        } catch (error) {
            console.error('Form submission error:', error);
            showNotification('An error occurred. Please try again.', 'error');
        }
    });
}

// Enhanced notification system with better browser compatibility
function showNotification(message, type) {
    type = type || 'info';
    
    try {
        // Remove existing notification
        const existingNotification = document.querySelector('.notification');
        if (existingNotification && existingNotification.parentElement) {
            existingNotification.remove();
        }
        
        // Create notification element
        const notification = document.createElement('div');
        notification.className = 'notification notification-' + type;
        
        // Set content
        const iconClass = type === 'success' ? 'check-circle' : 
                         type === 'error' ? 'exclamation-circle' : 'info-circle';
        
        notification.innerHTML = 
            '<div class="notification-content">' +
                '<i class="fas fa-' + iconClass + '"></i>' +
                '<span>' + message + '</span>' +
                '<button class="notification-close" onclick="this.parentElement.parentElement.remove()">' +
                    '<i class="fas fa-times"></i>' +
                '</button>' +
            '</div>';
        
        // Add styles for better browser compatibility
        const bgColor = type === 'success' ? '#10b981' : 
                       type === 'error' ? '#ef4444' : '#3b82f6';
        
        notification.style.cssText = 
            'position: fixed;' +
            'top: 100px;' +
            'right: 20px;' +
            'z-index: 10000;' +
            'background: ' + bgColor + ';' +
            'color: white;' +
            'padding: 1rem;' +
            'border-radius: 0.5rem;' +
            'box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);' +
            'transform: translateX(400px);' +
            'transition: transform 0.3s ease;' +
            'max-width: 350px;';
        
        const content = notification.querySelector('.notification-content');
        if (content) {
            content.style.cssText = 
                'display: flex;' +
                'align-items: center;' +
                'gap: 0.75rem;';
        }
        
        const closeBtn = notification.querySelector('.notification-close');
        if (closeBtn) {
            closeBtn.style.cssText = 
                'background: none;' +
                'border: none;' +
                'color: white;' +
                'cursor: pointer;' +
                'padding: 0.25rem;' +
                'border-radius: 0.25rem;' +
                'transition: background 0.2s ease;' +
                'margin-left: auto;';
            
            closeBtn.addEventListener('mouseenter', function() {
                this.style.background = 'rgba(255, 255, 255, 0.1)';
            });
            
            closeBtn.addEventListener('mouseleave', function() {
                this.style.background = 'none';
            });
        }
        
        // Add to page
        document.body.appendChild(notification);
        
        // Animate in
        setTimeout(function() {
            notification.style.transform = 'translateX(0)';
        }, 100);
        
        // Auto remove after 5 seconds
        setTimeout(function() {
            if (notification.parentElement) {
                notification.style.transform = 'translateX(400px)';
                setTimeout(function() {
                    if (notification.parentElement) {
                        notification.remove();
                    }
                }, 300);
            }
        }, 5000);
        
    } catch (error) {
        console.error('Notification error:', error);
        // Fallback to alert for older browsers
        alert(message);
    }
}

// Parallax effect for hero section (subtle) - with performance optimization
let parallaxTicking = false;

function updateParallax() {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    
    if (hero && scrolled < hero.offsetHeight) {
        // Use transform3d for better performance
        hero.style.transform = 'translate3d(0, ' + (scrolled * 0.3) + 'px, 0)';
    }
    parallaxTicking = false;
}

function requestParallaxTick() {
    if (!parallaxTicking) {
        requestAnimationFrame(updateParallax);
        parallaxTicking = true;
    }
}

window.addEventListener('scroll', requestParallaxTick);

// Add loading animation to page
window.addEventListener('load', function() {
    // Remove any loading screens if present
    const loader = document.querySelector('.loader');
    if (loader) {
        loader.style.opacity = '0';
        setTimeout(function() {
            if (loader.parentElement) {
                loader.remove();
            }
        }, 500);
    }
    
    // Initialize animations
    setTimeout(function() {
        document.body.classList.add('loaded');
    }, 100);
});

// Dynamic typing effect for hero section (optional enhancement)
function typeEffect(element, text, speed) {
    speed = speed || 100;
    let i = 0;
    
    if (element) {
        element.innerHTML = '';
        
        function type() {
            if (i < text.length) {
                element.innerHTML += text.charAt(i);
                i++;
                setTimeout(type, speed);
            }
        }
        
        type();
    }
}

// Enhanced scroll animations
function isElementInViewport(el) {
    if (!el) return false;
    
    const rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Add staggered animations for timeline items
function animateTimeline() {
    const timelineItems = document.querySelectorAll('.timeline-item');
    timelineItems.forEach(function(item, index) {
        item.style.animationDelay = (index * 0.2) + 's';
    });
}

// Initialize enhanced animations with error handling
document.addEventListener('DOMContentLoaded', function() {
    try {
        animateTimeline();
        
        // Add hover effects to cards
        const cards = document.querySelectorAll('.timeline-content, .skill-category, .highlight-item');
        cards.forEach(function(card) {
            card.addEventListener('mouseenter', function() {
                this.style.transform = 'translateY(-5px) scale(1.02)';
            });
            
            card.addEventListener('mouseleave', function() {
                this.style.transform = 'translateY(0) scale(1)';
            });
        });
        
    } catch (error) {
        console.error('Animation initialization error:', error);
    }
});

// Performance optimization: Throttle scroll events
function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(function() {
                inThrottle = false;
            }, limit);
        }
    };
}

// Error handling for all event listeners
function addSafeEventListener(element, event, handler) {
    if (element && typeof handler === 'function') {
        try {
            element.addEventListener(event, handler);
        } catch (error) {
            console.error('Event listener error:', error);
        }
    }
}

// Initialize all functionality safely
(function() {
    try {
        // Apply throttling to scroll events for better performance
        const throttledScrollHandler = throttle(function() {
            // Header background change
            const header = document.querySelector('.header');
            if (header) {
                if (window.pageYOffset > 100) {
                    header.style.background = 'rgba(255, 255, 255, 0.98)';
                } else {
                    header.style.background = 'rgba(255, 255, 255, 0.95)';
                }
            }
        }, 10);
        
        addSafeEventListener(window, 'scroll', throttledScrollHandler);
        
    } catch (error) {
        console.error('Initialization error:', error);
    }
})();

// Browser compatibility checks
function checkBrowserSupport() {
    const features = {
        intersectionObserver: 'IntersectionObserver' in window,
        requestAnimationFrame: 'requestAnimationFrame' in window,
        scrollIntoView: Element.prototype.scrollIntoView,
        classList: 'classList' in document.createElement('div')
    };
    
    // Log unsupported features for debugging
    Object.keys(features).forEach(function(feature) {
        if (!features[feature]) {
            console.warn('Feature not supported:', feature);
        }
    });
    
    return features;
}

// Initialize browser compatibility check
checkBrowserSupport();
