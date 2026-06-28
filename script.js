// Wait until the DOM is completely ready
document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Mobile Menu Open/Close Panel Toggle
    const menuToggle = document.getElementById('mobile-menu');
    const navLinks = document.querySelector('.nav-links');

    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });
    }

    // 2. Active Link Highlighting on Window Scroll
    const sections = document.querySelectorAll('section');
    const navItems = document.querySelectorAll('.nav-links a');

    if (sections.length > 0 && navItems.length > 0) {
        window.addEventListener('scroll', () => {
            let activeId = '';
            
            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                if (window.pageYOffset >= (sectionTop - 160)) {
                    activeId = section.getAttribute('id');
                }
            });

            navItems.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${activeId}`) {
                    link.classList.add('active');
                }
            });
        });
    }


            // Extract input values safely using native selectors
            const nameEl = document.getElementById('senderName');
            const emailEl = document.getElementById('senderEmail');
            const messageEl = document.getElementById('senderMessage');

            if (nameEl && emailEl && messageEl) {
                const userName = nameEl.value;
                const userEmail = emailEl.value;
                const userMessage = messageEl.value;

                statusBox.style.color = '#38bdf8';
                statusBox.textContent = "Processing dispatch request...";

                try {
                    const mailSubject = encodeURIComponent(`Strategen NetLabs Contact: ${userName}`);
                    const mailBody = encodeURIComponent(`Client Name: ${userName}\nEmail Link: ${userEmail}\n\nMessage Payload:\n${userMessage}`);
                    
                    // Route message directly via local system email dispatcher API
                    window.location.href = `mailto:your-email@://example.com{mailSubject}&body=${mailBody}`;

                    statusBox.style.color = '#4ade80';
                    statusBox.textContent = "Success! Forwarding message to mail handler application.";
                    contactForm.reset();
                } catch (err) {
                    statusBox.style.color = '#ef4444';
                    statusBox.textContent = "Error executing message transmission pipeline.";
                }
            }
        });
    }
});
