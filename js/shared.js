/**
 * ARRIVE YOGA & RETREATS - SHARED CORE JAVASCRIPT ENGINE
 * Studio-Recorded Zen Audio Player (Rainforest, Ocean, Stream, Fire),
 * 3D Tilt Parallax, Device Switcher, Pricing Engine & Soul Quiz
 */

// 1. STUDIO-RECORDED ZEN AUDIO PLAYER (Costa Rica Nature Soundscapes)
window.ZenAudio = (function () {
    let currentAudio = null;
    let isPlaying = false;
    let currentTrack = 'forest_canopy';

    const tracks = {
        forest_canopy: { name: 'Rainforest Birds & Canopy', file: 'assets/audio/forest_canopy.mp3', fallback: 'https://www.gstatic.com/voice_delight/sounds/long/forest.mp3' },
        ocean_waves: { name: 'Playa Hermosa Ocean Waves', file: 'assets/audio/ocean_waves.mp3', fallback: 'https://www.gstatic.com/voice_delight/sounds/long/ocean.mp3' },
        babbling_brook: { name: 'Freshwater Brook & Stream', file: 'assets/audio/babbling_brook.mp3', fallback: 'https://www.gstatic.com/voice_delight/sounds/long/brook.mp3' },
        river_stream: { name: 'Rainmaker River Waterfall', file: 'assets/audio/river_stream.mp3', fallback: 'https://www.gstatic.com/voice_delight/sounds/long/river.mp3' },
        sacred_fire: { name: 'Sacred Beach Bonfire', file: 'assets/audio/sacred_fire.mp3', fallback: 'https://www.gstatic.com/voice_delight/sounds/long/fireplace.mp3' }
    };

    function initAudio() {
        if (!currentAudio) {
            currentAudio = new Audio();
            currentAudio.loop = true;
            currentAudio.volume = 0.55;

            // Load local file with fallback
            const track = tracks[currentTrack];
            currentAudio.src = track.file;
            currentAudio.onerror = function() {
                console.log('Using CDN fallback audio...');
                currentAudio.src = track.fallback;
            };
        }
    }

    function play() {
        initAudio();
        const playPromise = currentAudio.play();
        if (playPromise !== undefined) {
            playPromise.then(() => {
                isPlaying = true;
                updateUI();
            }).catch(e => {
                console.log('Audio autoplay prevented or error:', e);
                // Try CDN fallback directly if needed
                currentAudio.src = tracks[currentTrack].fallback;
                currentAudio.play().then(() => {
                    isPlaying = true;
                    updateUI();
                }).catch(err => console.log('Playback error:', err));
            });
        }
    }

    function pause() {
        if (currentAudio) {
            currentAudio.pause();
        }
        isPlaying = false;
        updateUI();
    }

    function toggle() {
        if (isPlaying) {
            pause();
        } else {
            play();
        }
    }

    function setTrack(trackKey) {
        if (tracks[trackKey]) {
            currentTrack = trackKey;
            const wasPlaying = isPlaying;
            if (currentAudio) {
                currentAudio.pause();
                currentAudio.src = tracks[trackKey].file;
                if (wasPlaying) {
                    currentAudio.play().catch(() => {});
                }
            }
            updateUI();
        }
    }

    function setVolume(vol) {
        if (currentAudio) {
            currentAudio.volume = Math.max(0, Math.min(1, vol));
        }
    }

    function updateUI() {
        const btn = document.getElementById('dock-audio-btn');
        const hubLabel = document.getElementById('hub-audio-label');
        const appLabel = document.getElementById('app-sound-label');
        const deckSound = document.getElementById('deck-sound');

        const trackName = tracks[currentTrack] ? tracks[currentTrack].name : 'Costa Rica Audio';

        if (btn) {
            if (isPlaying) {
                btn.classList.add('playing');
                const label = document.getElementById('audio-label');
                if (label) label.textContent = 'Playing: ' + trackName;
            } else {
                btn.classList.remove('playing');
                const label = document.getElementById('audio-label');
                if (label) label.textContent = 'Play Zen Audio';
            }
        }

        if (hubLabel) {
            hubLabel.textContent = isPlaying ? 'Playing ' + trackName : 'Play Zen Audio';
        }
        if (appLabel) {
            appLabel.textContent = isPlaying ? 'Playing Audio' : 'Audio Synth';
        }
        if (deckSound) {
            deckSound.textContent = isPlaying ? 'Sound Playing' : 'Costa Rica Audio';
        }
    }

    return {
        play,
        pause,
        toggle,
        setTrack,
        setVolume,
        isPlaying: () => isPlaying,
        getTrack: () => currentTrack,
        tracks: () => tracks
    };
})();

// 2. UNIVERSAL FLOATING STYLE SWITCHER DOCK
function initStyleSwitcherDock(currentKey) {
    if (document.getElementById('style-switcher-dock')) return;

    const dock = document.createElement('div');
    dock.id = 'style-switcher-dock';
    dock.innerHTML = `
        <a href="index.html" class="dock-btn ${currentKey === 'hub' ? 'active' : ''}" title="Client Review Hub & Live Switcher">
            <span>🏛️</span>
            <span class="label">Experience Hub</span>
        </a>
        <div class="dock-divider"></div>
        <a href="style1-luxe-biophilic.html" class="dock-btn ${currentKey === 'style1' ? 'active' : ''}" title="Style 1: Warm Biophilic Sanctuary">
            <span>🌿</span>
            <span class="label">1. Biophilic</span>
        </a>
        <a href="style2-modern-zen.html" class="dock-btn ${currentKey === 'style2' ? 'active' : ''}" title="Style 2: Modern Zen Minimalist">
            <span>⚪</span>
            <span class="label">2. Zen</span>
        </a>
        <a href="style3-sunset-somatic.html" class="dock-btn ${currentKey === 'style3' ? 'active' : ''}" title="Style 3: Somatic Sunset Bohemian">
            <span>🔥</span>
            <span class="label">3. Sunset</span>
        </a>
        <a href="style-app-dashboard.html" class="dock-btn ${currentKey === 'dashboard' ? 'active' : ''}" title="Sanctuary OS Dashboard">
            <span>🎛️</span>
            <span class="label">App OS</span>
        </a>
        <a href="style-app-spatial-map.html" class="dock-btn ${currentKey === 'spatial' ? 'active' : ''}" title="Costa Rica Spatial Map Explorer">
            <span>🗺️</span>
            <span class="label">Spatial Map</span>
        </a>
        <div class="dock-divider"></div>
        <a href="investors.html" class="dock-btn ${currentKey === 'investors' ? 'active' : ''}" title="Investor Deck & Growth Dashboard">
            <span>📈</span>
            <span class="label">Investors</span>
        </a>
        <button id="dock-audio-btn" class="audio-toggle-btn" onclick="window.ZenAudio.toggle()" title="Toggle Studio Quality Costa Rica Audio">
            <div class="sound-bars">
                <span class="sound-bar"></span>
                <span class="sound-bar"></span>
                <span class="sound-bar"></span>
            </div>
            <span id="audio-label">Play Zen Audio</span>
        </button>
    `;
    document.body.appendChild(dock);

    // Add cursor glow if desktop
    if (window.innerWidth > 768 && !document.getElementById('cursor-glow')) {
        const glow = document.createElement('div');
        glow.id = 'cursor-glow';
        glow.className = 'cursor-glow';
        document.body.appendChild(glow);

        window.addEventListener('mousemove', (e) => {
            glow.style.left = `${e.clientX}px`;
            glow.style.top = `${e.clientY}px`;
        });
    }
}

// 3. 3D CARD TILT & PARALLAX TRACKER
document.addEventListener('DOMContentLoaded', () => {
    const tiltCards = document.querySelectorAll('.tilt-card');
    tiltCards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            const rotateX = ((y - centerY) / centerY) * -8;
            const rotateY = ((x - centerX) / centerX) * 8;
            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
        });

        card.addEventListener('mouseleave', () => {
            card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
        });
    });

    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const parallaxEls = document.querySelectorAll('[data-parallax-speed]');
        parallaxEls.forEach(el => {
            const speed = parseFloat(el.getAttribute('data-parallax-speed') || '0.2');
            el.style.transform = `translateY(${scrolled * speed}px)`;
        });
    });
});

// 4. RETREAT PRICING & STRIPE CHECKOUT ENGINE
window.RetreatPricing = {
    basePrices: { standard: 2200, vip: 3100 },
    selectedPackage: 'standard',
    depositOnly: true,
    excursions: {
        rainmaker: { name: 'Rainmaker Bridges & Waterfalls', price: 85, selected: false },
        temazcal: { name: 'Sacred Temazcal Sweat Lodge', price: 95, selected: false },
        horseback: { name: 'Jungle & Beach Horseback Riding', price: 80, selected: false },
        zipline: { name: 'Canopy Ziplining Adventure', price: 75, selected: false },
        tortuga: { name: 'Tortuga Island Catamaran Cruise', price: 160, selected: false },
        coaching: { name: '1:1 Coaching with Carly Anne', price: 100, selected: false }
    },
    spaTreatments: {
        bliss: { name: 'Full Body Gentle Bliss Massage (90m)', price: 110, selected: false },
        deep: { name: 'Deep Tissue Recovery Therapy (90m)', price: 125, selected: false },
        hotstone: { name: 'Volcanic Hot Stone Ritual', price: 135, selected: false },
        bamboo: { name: 'Warm Bamboo Fusion Therapy', price: 130, selected: false },
        facial: { name: 'Radiance Botanical Facial', price: 95, selected: false },
        royal: { name: 'The Royal Amanti Revival (150m)', price: 195, selected: false }
    },

    selectPackage(pkg) {
        this.selectedPackage = pkg;
        this.updateUI();
    },

    toggleExcursion(key) {
        if (this.excursions[key]) {
            this.excursions[key].selected = !this.excursions[key].selected;
            this.updateUI();
        }
    },

    toggleSpa(key) {
        if (this.spaTreatments[key]) {
            this.spaTreatments[key].selected = !this.spaTreatments[key].selected;
            this.updateUI();
        }
    },

    setDepositMode(isDeposit) {
        this.depositOnly = isDeposit;
        this.updateUI();
    },

    calculate() {
        const pkgBase = this.basePrices[this.selectedPackage] || 2200;
        let excTotal = 0;
        Object.values(this.excursions).forEach(item => {
            if (item.selected) excTotal += item.price;
        });

        let spaTotal = 0;
        Object.values(this.spaTreatments).forEach(item => {
            if (item.selected) spaTotal += item.price;
        });

        const fullGrandTotal = pkgBase + excTotal + spaTotal;
        const dueToday = this.depositOnly ? 500 : fullGrandTotal;
        const dueLater = fullGrandTotal - dueToday;
        const charityAmount = this.selectedPackage === 'vip' ? 50 : 25;

        return { pkgBase, excTotal, spaTotal, fullGrandTotal, dueToday, dueLater, charityAmount };
    },

    updateUI() {
        const totals = this.calculate();

        const pkgBaseEl = document.getElementById('calc-pkg-base');
        const excTotalEl = document.getElementById('calc-exc-total');
        const spaTotalEl = document.getElementById('calc-spa-total');
        const grandTotalEl = document.getElementById('calc-grand-total');
        const dueTodayEl = document.getElementById('calc-due-today');
        const charityEl = document.getElementById('calc-charity-impact');

        if (pkgBaseEl) pkgBaseEl.textContent = `$${totals.pkgBase.toLocaleString()}`;
        if (excTotalEl) excTotalEl.textContent = `$${totals.excTotal.toLocaleString()}`;
        if (spaTotalEl) spaTotalEl.textContent = `$${totals.spaTotal.toLocaleString()}`;
        if (grandTotalEl) grandTotalEl.textContent = `$${totals.fullGrandTotal.toLocaleString()}`;
        if (dueTodayEl) dueTodayEl.textContent = `$${totals.dueToday.toLocaleString()}`;
        if (charityEl) charityEl.textContent = `+$${totals.charityAmount} Included`;

        const stdCard = document.getElementById('pkg-card-standard');
        const vipCard = document.getElementById('pkg-card-vip');
        if (stdCard && vipCard) {
            if (this.selectedPackage === 'standard') {
                stdCard.classList.add('ring-2', 'ring-amber-400');
                vipCard.classList.remove('ring-2', 'ring-amber-400');
            } else {
                vipCard.classList.add('ring-2', 'ring-amber-400');
                stdCard.classList.remove('ring-2', 'ring-amber-400');
            }
        }
    },

    openCheckoutModal() {
        const totals = this.calculate();
        let modal = document.getElementById('stripe-checkout-modal');
        if (!modal) {
            modal = document.createElement('div');
            modal.id = 'stripe-checkout-modal';
            modal.className = 'fixed inset-0 z-[999999] flex items-center justify-center p-4 bg-black/85 backdrop-blur-md';
            document.body.appendChild(modal);
        }

        modal.innerHTML = `
            <div class="relative w-full max-w-lg bg-slate-900 text-white rounded-3xl p-8 border border-white/20 shadow-2xl overflow-hidden">
                <div class="absolute -top-12 -right-12 w-40 h-40 bg-amber-500/20 rounded-full blur-3xl pointer-events-none"></div>
                <div class="flex items-center justify-between pb-4 border-b border-slate-700">
                    <div>
                        <div class="text-xs uppercase tracking-widest text-amber-400 font-bold">Secure Reservation</div>
                        <h3 class="text-2xl font-serif font-bold text-white">The Art of Arrival Retreat</h3>
                    </div>
                    <button onclick="document.getElementById('stripe-checkout-modal').remove()" class="text-slate-400 hover:text-white p-2 text-xl font-bold">✕</button>
                </div>

                <div class="my-6 space-y-3 text-sm">
                    <div class="flex justify-between py-1 border-b border-slate-800">
                        <span class="text-slate-400">Package Tier:</span>
                        <span class="font-semibold capitalize text-amber-300">${this.selectedPackage} Experience ($${totals.pkgBase})</span>
                    </div>
                    <div class="flex justify-between py-1 border-b border-slate-800">
                        <span class="text-slate-400">Eco-Excursions Total:</span>
                        <span class="font-semibold">$${totals.excTotal}</span>
                    </div>
                    <div class="flex justify-between py-1 border-b border-slate-800">
                        <span class="text-slate-400">Holistic Spa Total:</span>
                        <span class="font-semibold">$${totals.spaTotal}</span>
                    </div>
                    <div class="flex justify-between py-1 border-b border-slate-800 text-emerald-400">
                        <span>Yogis Give Back Contribution:</span>
                        <span class="font-bold">+$${totals.charityAmount} (Included)</span>
                    </div>
                    <div class="flex justify-between py-2 text-lg font-bold text-white bg-slate-800/80 px-4 rounded-xl">
                        <span>Amount Due Today:</span>
                        <span class="text-amber-400">$${totals.dueToday.toLocaleString()}</span>
                    </div>
                </div>

                <form onsubmit="event.preventDefault(); window.RetreatPricing.submitOrder();" class="space-y-4">
                    <div>
                        <label class="block text-xs uppercase tracking-wider text-slate-400 mb-1">Full Guest Name</label>
                        <input type="text" required placeholder="Carly Anne" class="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-amber-400">
                    </div>
                    <div>
                        <label class="block text-xs uppercase tracking-wider text-slate-400 mb-1">Email Address</label>
                        <input type="email" required placeholder="soul@arriveretreats.com" class="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-amber-400">
                    </div>
                    <div>
                        <label class="block text-xs uppercase tracking-wider text-slate-400 mb-1">Card Details (Stripe Demo Mode)</label>
                        <div class="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 text-sm text-white flex items-center justify-between">
                            <span>•••• •••• •••• 4242</span>
                            <span class="text-xs text-amber-400 font-bold">🔒 Encrypted</span>
                        </div>
                    </div>
                    <button type="submit" class="w-full py-4 rounded-xl font-bold uppercase tracking-wider text-slate-950 bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500 hover:brightness-110 shadow-lg shadow-amber-500/20 transition-all">
                        Confirm Sanctuary Reservation ($${totals.dueToday})
                    </button>
                </form>
            </div>
        `;
    },

    submitOrder() {
        const modal = document.getElementById('stripe-checkout-modal');
        if (modal) {
            modal.innerHTML = `
                <div class="w-full max-w-md bg-slate-900 text-white rounded-3xl p-8 border border-amber-400/40 text-center shadow-2xl">
                    <div class="text-6xl mb-4">✨🌴🧘‍♀️</div>
                    <h3 class="text-2xl font-serif font-bold text-amber-300 mb-2">Welcome to Costa Rica!</h3>
                    <p class="text-slate-300 text-sm mb-6 leading-relaxed">Your reservation deposit has been confirmed. Welcome pack, room villa keys, and somatic preparation guide are being sent to your email.</p>
                    <div class="bg-amber-400/10 border border-amber-400/30 rounded-2xl p-4 text-left text-xs space-y-2 mb-6">
                        <div><strong>Retreat:</strong> The Art of Arrival • August 2026</div>
                        <div><strong>Sanctuary:</strong> Amanti Resort & Spa, Playa Hermosa</div>
                        <div><strong>Charity Donation:</strong> $50 matched to Rainforest Conservation</div>
                    </div>
                    <button onclick="document.getElementById('stripe-checkout-modal').remove()" class="w-full py-3 rounded-xl font-bold bg-amber-400 text-slate-950 hover:bg-amber-300 transition-all">
                        Return to Retreat Journey
                    </button>
                </div>
            `;
        }
    }
};

// 5. INTERACTIVE SOUL QUIZ ENGINE
window.SoulQuiz = {
    questions: [
        {
            title: "When life feels overwhelming, what does your body crave most?",
            options: [
                { text: "Grounding, uninterrupted sleep, silence, and deep root safety.", element: "Earth" },
                { text: "Crying or emotional release, swimming in warm ocean water, and softening.", element: "Water" },
                { text: "A fierce physical workout, breaking through plateaus, and sweating out tension.", element: "Fire" },
                { text: "Perspective, fresh air, creative inspiration, and zooming out.", element: "Air" }
            ]
        },
        {
            title: "What is your primary intention for this Costa Rica retreat?",
            options: [
                { text: "Recover from burnout and anchor sustainable daily rituals.", element: "Earth" },
                { text: "Heal an emotional chapter and reconnect with my authentic feelings.", element: "Water" },
                { text: "Ignite passion, push physical boundaries, and reclaim bold confidence.", element: "Fire" },
                { text: "Unlock my creative flow, visionary ideas, and spiritual expansion.", element: "Air" }
            ]
        },
        {
            title: "Which excursion sounds most magnetic to your soul right now?",
            options: [
                { text: "Rainmaker hanging bridges & gentle waterfall cold plunge.", element: "Earth" },
                { text: "Tortuga Island catamaran sail & coral reef snorkeling.", element: "Water" },
                { text: "Sacred Mayan Temazcal sweat dome ritual & beach horseback gallop.", element: "Fire" },
                { text: "Canopy ziplining high above the cloud forest + stargazing sound bath.", element: "Air" }
            ]
        }
    ],
    currentIndex: 0,
    scores: { Earth: 0, Water: 0, Fire: 0, Air: 0 },

    init(containerId) {
        this.container = document.getElementById(containerId);
        this.currentIndex = 0;
        this.scores = { Earth: 0, Water: 0, Fire: 0, Air: 0 };
        this.renderQuestion();
    },

    renderQuestion() {
        if (!this.container) return;
        const q = this.questions[this.currentIndex];
        if (!q) {
            this.renderResults();
            return;
        }

        this.container.innerHTML = `
            <div class="space-y-6">
                <div class="flex items-center justify-between text-xs uppercase tracking-widest text-amber-400 font-semibold">
                    <span>Question ${this.currentIndex + 1} of ${this.questions.length}</span>
                    <span>Elemental Diagnostic</span>
                </div>
                <h4 class="text-xl md:text-2xl font-serif text-white font-medium">${q.title}</h4>
                <div class="grid grid-cols-1 gap-3">
                    ${q.options.map((opt) => `
                        <button onclick="window.SoulQuiz.answer('${opt.element}')" class="text-left p-4 rounded-2xl bg-white/5 hover:bg-amber-400/10 border border-white/10 hover:border-amber-400/40 text-slate-200 hover:text-white transition-all flex items-center justify-between group">
                            <span class="text-sm md:text-base">${opt.text}</span>
                            <span class="text-amber-400 opacity-0 group-hover:opacity-100 transition-opacity">➔</span>
                        </button>
                    `).join('')}
                </div>
            </div>
        `;
    },

    answer(element) {
        this.scores[element] = (this.scores[element] || 0) + 1;
        this.currentIndex++;
        this.renderQuestion();
    },

    renderResults() {
        let maxElem = 'Earth';
        let maxScore = -1;
        for (const [elem, score] of Object.entries(this.scores)) {
            if (score > maxScore) {
                maxScore = score;
                maxElem = elem;
            }
        }

        const archetypeData = {
            Earth: {
                icon: "🌿",
                title: "Earth: The Grounded Anchor",
                desc: "Your nervous system is asking for rest, root stability, restorative sleep, and nervous system recalibration.",
                rec: "Standard or VIP Suite + Rainmaker Waterfalls & Lymphatic Spa Drainage.",
                quote: "Root down so deeply that nothing can uproot your inner peace."
            },
            Water: {
                icon: "🌊",
                title: "Water: The Fluid Alchemist",
                desc: "Your emotional body is ready for deep softening, clearing old grief or stagnation, and restoring emotional flow.",
                rec: "VIP Suite + Tortuga Island Catamaran & Gentle Bliss Full Body Massage.",
                quote: "Softness is not weakness; water carves through granite."
            },
            Fire: {
                icon: "🔥",
                title: "Fire: The Bold Transformer",
                desc: "You are ready for breakthroughs, power vinyasa, stepping into leadership, and burning away outdated identities.",
                rec: "VIP Package + Sacred Temazcal Sweat Lodge & Sunset Jungle Horseback.",
                quote: "Where in your life are you ready to ignite your authentic power?"
            },
            Air: {
                icon: "✨",
                title: "Air: The Visionary Creator",
                desc: "Your spirit is expanding into creative reinvention, visionary clarity, somatic breathwork, and high-altitude perspective.",
                rec: "VIP Package + Canopy Zipline & 1:1 Coaching with Carly Anne.",
                quote: "Space is the secret ingredient for revelation."
            }
        };

        const result = archetypeData[maxElem];

        this.container.innerHTML = `
            <div class="space-y-6 text-center animate-pulse-glow">
                <div class="text-5xl">${result.icon}</div>
                <div>
                    <div class="text-xs uppercase tracking-widest text-amber-400 font-bold mb-1">Your Soul Archetype Revealed</div>
                    <h3 class="text-2xl md:text-3xl font-serif font-bold text-white">${result.title}</h3>
                </div>
                <p class="text-slate-300 text-sm md:text-base max-w-md mx-auto leading-relaxed">${result.desc}</p>
                <div class="p-4 rounded-2xl bg-amber-400/10 border border-amber-400/30 text-xs md:text-sm text-amber-200">
                    <strong>Recommended Pathway:</strong> ${result.rec}
                </div>
                <blockquote class="italic text-slate-400 text-xs font-serif">"${result.quote}"</blockquote>
                <div class="flex gap-4 justify-center pt-2">
                    <a href="#pricing" class="px-6 py-3 rounded-full bg-amber-400 text-slate-950 font-bold text-xs uppercase tracking-widest hover:bg-amber-300 transition-all">
                        View Tailored Package Options
                    </a>
                </div>
            </div>
        `;
    }
};
