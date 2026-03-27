// js/about.js

document.addEventListener('DOMContentLoaded', function () {

    // ─── 1. MOBILE MENU TOGGLE ───────────────────────────────────────────────
    const hamburger = document.querySelector('.hamburger');
    const navMenu   = document.querySelector('.nav-menu');

    if (hamburger && navMenu) {
        hamburger.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            hamburger.classList.toggle('open');
        });

        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
                hamburger.classList.remove('open');
            });
        });
    }


    // ─── 2. GUIDE TABS ───────────────────────────────────────────────────────
    const tabButtons  = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');

    tabButtons.forEach(button => {
        button.addEventListener('click', function () {
            const targetId = this.dataset.tab;

            tabButtons.forEach(btn  => btn.classList.remove('active'));
            tabContents.forEach(tab => tab.classList.remove('active'));

            this.classList.add('active');

            const target = document.getElementById(targetId);
            if (target) {
                target.classList.add('active');
                target.style.animation = 'none';
                // Force reflow so the animation re-runs every tab switch
                void target.offsetWidth;
                target.style.animation = 'fadeInTab 0.4s ease-out';
            }
        });
    });


    // ─── 3. SCROLL-REVEAL ANIMATIONS ────────────────────────────────────────
    const revealEls = document.querySelectorAll(
        '.step-card, .value-card, .guide-item, .faq-item, .mission-content'
    );

    const revealObserver = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('revealed');
                revealObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.15 });

    revealEls.forEach((el, i) => {
        el.style.opacity      = '0';
        el.style.transform    = 'translateY(30px)';
        el.style.transition   = `opacity 0.5s ease ${i * 0.07}s, transform 0.5s ease ${i * 0.07}s`;
        revealObserver.observe(el);
    });

    // CSS class that triggers the reveal
    const style = document.createElement('style');
    style.textContent = `
        .revealed {
            opacity: 1 !important;
            transform: translateY(0) !important;
        }
        @keyframes fadeInTab {
            from { opacity: 0; transform: translateY(12px); }
            to   { opacity: 1; transform: translateY(0);    }
        }
    `;
    document.head.appendChild(style);


    // ─── 4. STEP CARD COUNTER ANIMATION ─────────────────────────────────────
    const stepNumbers = document.querySelectorAll('.step-number');

    const counterObserver = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const el  = entry.target;
                const end = parseInt(el.textContent, 10);
                animateCounter(el, end);
                counterObserver.unobserve(el);
            }
        });
    }, { threshold: 0.5 });

    stepNumbers.forEach(el => counterObserver.observe(el));

    function animateCounter(el, end) {
        let current   = 0;
        const duration = 600;                         // ms
        const stepTime = Math.max(20, duration / end);
        const timer = setInterval(() => {
            current++;
            el.textContent = current;
            if (current >= end) clearInterval(timer);
        }, stepTime);
    }


    // ─── 5. FAQ ACCORDION ────────────────────────────────────────────────────
    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(item => {
        const heading = item.querySelector('h4');
        const answer  = item.querySelector('p');

        if (!heading || !answer) return;

        // Initial state
        answer.style.maxHeight  = '0';
        answer.style.overflow   = 'hidden';
        answer.style.transition = 'max-height 0.4s ease, padding 0.4s ease';
        answer.style.padding    = '0';
        heading.style.cursor    = 'pointer';
        heading.style.userSelect = 'none';

        // Visual indicator
        heading.style.display      = 'flex';
        heading.style.justifyContent = 'space-between';
        heading.style.alignItems   = 'center';

        const indicator = document.createElement('span');
        indicator.textContent    = '+';
        indicator.style.cssText  = 'font-size:1.4rem; color:#667eea; transition:transform 0.3s;';
        heading.appendChild(indicator);

        let open = false;

        heading.addEventListener('click', () => {
            open = !open;
            answer.style.maxHeight = open ? answer.scrollHeight + 20 + 'px' : '0';
            answer.style.padding   = open ? '10px 0 0' : '0';
            indicator.style.transform = open ? 'rotate(45deg)' : 'rotate(0deg)';
        });
    });


    // ─── 6. GUIDE ITEM HIGHLIGHT ON HOVER ────────────────────────────────────
    document.querySelectorAll('.guide-item').forEach(item => {
        item.addEventListener('mouseenter', () => {
            item.style.background    = 'linear-gradient(135deg,#667eea08,#764ba208)';
            item.style.borderRadius  = '10px';
            item.style.paddingLeft   = '15px';
            item.style.borderLeft    = '4px solid #667eea';
            item.style.transition    = 'all 0.3s ease';
        });
        item.addEventListener('mouseleave', () => {
            item.style.background    = '';
            item.style.paddingLeft   = '';
            item.style.borderLeft    = '';
        });
    });


    // ─── 7. VALUE CARD RIPPLE EFFECT ────────────────────────────────────────
    document.querySelectorAll('.value-card').forEach(card => {
        card.style.position = 'relative';
        card.style.overflow = 'hidden';

        card.addEventListener('click', function (e) {
            const rect   = card.getBoundingClientRect();
            const ripple = document.createElement('span');

            ripple.style.cssText = `
                position: absolute;
                border-radius: 50%;
                width: 10px; height: 10px;
                background: rgba(255,255,255,0.5);
                top:  ${e.clientY - rect.top  - 5}px;
                left: ${e.clientX - rect.left - 5}px;
                animation: rippleGrow 0.6s ease-out forwards;
                pointer-events: none;
            `;
            card.appendChild(ripple);
            setTimeout(() => ripple.remove(), 700);
        });
    });

    const rippleStyle = document.createElement('style');
    rippleStyle.textContent = `
        @keyframes rippleGrow {
            to { transform: scale(30); opacity: 0; }
        }
    `;
    document.head.appendChild(rippleStyle);


    // ─── 8. SMOOTH PROGRESS BAR (reading indicator) ─────────────────────────
    const progressBar = document.createElement('div');
    progressBar.style.cssText = `
        position: fixed;
        top: 0; left: 0;
        height: 3px;
        width: 0%;
        background: linear-gradient(90deg,#667eea,#764ba2);
        z-index: 9999;
        transition: width 0.1s linear;
    `;
    document.body.appendChild(progressBar);

    window.addEventListener('scroll', () => {
        const scrollTop = window.scrollY;
        const docHeight = document.body.scrollHeight - window.innerHeight;
        progressBar.style.width = (scrollTop / docHeight * 100) + '%';
    });


    // ─── 9. MISSION ICON PARALLAX ────────────────────────────────────────────
    const missionIcon = document.querySelector('.mission-icon');
    if (missionIcon) {
        window.addEventListener('scroll', () => {
            const offset = window.scrollY * 0.08;
            missionIcon.style.transform = `translateY(${offset}px)`;
        });
    }


    // ─── 10. ACTIVE NAV LINK HIGHLIGHT ──────────────────────────────────────
    document.querySelectorAll('.nav-link').forEach(link => {
        if (link.href === window.location.href) {
            link.classList.add('active');
        }
    });


    // ─── 11. BACK-TO-TOP BUTTON ─────────────────────────────────────────────
    const topBtn = document.createElement('button');
    topBtn.textContent = '↑';
    topBtn.style.cssText = `
        position: fixed;
        bottom: 30px; right: 30px;
        width: 44px; height: 44px;
        border-radius: 50%;
        background: linear-gradient(135deg,#667eea,#764ba2);
        color: white;
        border: none;
        font-size: 1.3rem;
        cursor: pointer;
        opacity: 0;
        pointer-events: none;
        transition: opacity 0.3s, transform 0.3s;
        z-index: 9999;
        box-shadow: 0 4px 14px rgba(102,126,234,0.4);
    `;
    document.body.appendChild(topBtn);

    window.addEventListener('scroll', () => {
        const visible = window.scrollY > 400;
        topBtn.style.opacity       = visible ? '1' : '0';
        topBtn.style.pointerEvents = visible ? 'auto' : 'none';
    });

    topBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    topBtn.addEventListener('mouseenter', () => topBtn.style.transform = 'scale(1.15)');
    topBtn.addEventListener('mouseleave', () => topBtn.style.transform = 'scale(1)');

}); // end DOMContentLoaded
