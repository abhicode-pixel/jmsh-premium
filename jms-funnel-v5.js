// JMS HOSPITAL PREMIUM FUNNEL - VERSION 5.0 (PREMIUM DESIGN)
// 100% TEXT-ONLY | NO IMAGES | HIGH-END ANIMATIONS

(function () {
    // Create container
    var container = document.createElement('div');
    container.id = 'jms-premium-system';
    container.innerHTML = `
    <!-- NOTIFICATION -->
    <div id="jms-p-notif" class="jms-p-notif jms-p-off">
        <div class="jms-p-live">LIVE</div>
        <p>150+ Consultations scheduled this week.</p>
    </div>
    
    <!-- PREMIUM POPUP MODAL -->
    <div id="jms-p-overlay" class="jms-p-overlay jms-p-off">
        <div class="jms-p-modal">
            <button class="jms-p-close" onclick="jmsPClose()">&times;</button>
            <div class="jms-p-head">
                <div class="jms-p-logo">JMSH</div>
                <h2>Expert Healthcare Awaits</h2>
                <p>Book your priority consultation with our specialized team in Shalimar Bagh.</p>
            </div>
            <form id="jms-p-form" onsubmit="jmsPSubmit(event)">
                <input type="hidden" name="access_key" value="ab6ee57d-c270-4376-afb7-8c6dfc568e89">
                <input type="hidden" name="subject" value="Premium Booking - JMSH V5">
                <div class="jms-p-grid">
                    <div class="jms-p-field">
                        <label>FULL NAME</label>
                        <input type="text" name="name" required placeholder="John Doe">
                    </div>
                    <div class="jms-p-field">
                        <label>MOBILE NUMBER</label>
                        <input type="tel" name="phone" required minlength="10" placeholder="9876543210">
                    </div>
                </div>
                <div class="jms-p-grid">
                    <div class="jms-p-field">
                        <label>DEPARTMENT</label>
                        <select name="specialty" required>
                            <option value="" disabled selected>Select Department...</option>
                            <option value="Gynaecology">Gynaecology & Obstetrics</option>
                            <option value="Gastroenterology">Gastroenterology</option>
                            <option value="Pediatrics">Pediatrics & Neonatal Care</option>
                            <option value="Internal Medicine">Internal Medicine</option>
                            <option value="Physiotherapy">Physiotherapy</option>
                            <option value="Surgery">Laparoscopic Surgery</option>
                        </select>
                    </div>
                    <div class="jms-p-field">
                        <label>PREFERENCE</label>
                        <select name="time" required>
                            <option value="ASAP">As Soon As Possible</option>
                            <option value="HomeVisit">Home Visit Request</option>
                            <option value="Morning">Morning Slot</option>
                            <option value="Evening">Evening Slot</option>
                        </select>
                    </div>
                </div>
                <button type="submit" class="jms-p-submit">Confirm Priority Booking</button>
                <div id="jms-p-msg"></div>
            </form>
        </div>
    </div>
    
    <!-- MASTER CHAT WIDGET -->
    <div id="jms-p-chat" class="jms-p-chat jms-p-min">
        <div class="jms-p-chat-header" onclick="jmsPToggleChat()">
            <div class="jms-p-agent">
                <div class="jms-p-avatar">
                   <div class="jms-p-avatar-text">JMSH</div>
                   <span class="jms-p-online"></span>
                </div>
                <div class="jms-p-info">
                    <strong>JMS Care Assistant</strong>
                    <span>Replying instantly • Online</span>
                </div>
            </div>
            <button class="jms-p-close-chat" onclick="event.stopPropagation(); jmsPCloseChat()">&times;</button>
        </div>
        <div id="jms-p-messages" class="jms-p-messages"></div>
        <div class="jms-p-chat-footer">
            <input type="text" id="jms-p-input" placeholder="Type your inquiry..." disabled>
            <button id="jms-p-send" onclick="jmsPSend()" disabled>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" />
                </svg>
            </button>
        </div>
    </div>
    
    <!-- SMART EXIT INTENT -->
    <div id="jms-p-exit" class="jms-p-overlay jms-p-off">
        <div class="jms-p-quiz">
            <button class="jms-p-close" onclick="document.getElementById('jms-p-exit').classList.add('jms-p-off'); document.body.classList.remove('jms-p-no-scroll')">&times;</button>
            <div id="jms-p-step1">
                <div class="jms-p-icon">🏥</div>
                <h3>Which specialist do you need?</h3>
                <p>We'll connect you with the right expert immediately.</p>
                <div class="jms-p-choices">
                    <button onclick="jmsPNext(2,'Gynae')">🤰 Gynaecology</button>
                    <button onclick="jmsPNext(2,'Child')">👶 Pediatrician</button>
                    <button onclick="jmsPNext(2,'Gastro')">🩺 Digestive Health</button>
                    <button onclick="jmsPNext(2,'General')">✨ General Physician</button>
                </div>
            </div>
            <div id="jms-p-step2" style="display:none;">
                <div class="jms-p-icon">✅</div>
                <h3>Almost Done!</h3>
                <p>Enter details for a fast callback.</p>
                <form onsubmit="jmsPExitSubmit(event)">
                    <div class="jms-p-field" style="margin-bottom:12px;">
                        <label>NAME</label>
                        <input type="text" id="jms-p-exit-name" required placeholder="Enter Name">
                    </div>
                    <div class="jms-p-field" style="margin-bottom:15px;">
                        <label>PHONE</label>
                        <input type="tel" id="jms-p-exit-phone" required placeholder="Enter Mobile">
                    </div>
                    <button type="submit" class="jms-p-submit">Get Fast Response</button>
                    <div id="jms-p-exit-msg"></div>
                </form>
            </div>
        </div>
    </div>
    `;

    document.body.appendChild(container);

    var style = document.createElement('style');
    style.textContent = `
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&display=swap');
        
        #jms-premium-system {
            --primary: #7DC9B5;
            --primary-dark: #5eb59e;
            --primary-light: #9DDCC8;
            --dark: #2d3748;
            --gray: #718096;
            --bg: #f8fafc;
            --border: #e2e8f0;
            --glass: rgba(255, 255, 255, 0.9);
            font-family: 'Poppins', sans-serif !important;
        }
        
        #jms-premium-system * { box-sizing: border-box !important; margin: 0; padding: 0; }
        
        .jms-p-off { display: none !important; opacity: 0; pointer-events: none; }
        body.jms-p-no-scroll { overflow: hidden !important; position: fixed !important; width: 100% !important; }
        
        /* PREMIUM ANIMATIONS */
        @keyframes jmsPSlideIn { from { transform: translateX(100%); opacity: 0; } to { transform: translateX(0); opacity: 1; } }
        @keyframes jmsPFadeIn { from { opacity: 0; } to { opacity: 1; } }
        @keyframes jmsPPopIn { from { transform: scale(0.8) translateY(50px); opacity: 0; } to { transform: scale(1) translateY(0); opacity: 1; } }
        @keyframes jmsPFadeUp { from { transform: translateY(20px); opacity: 0; } to { transform: translateY(0); opacity: 1; } }
        @keyframes jmsPPulse { 0% { box-shadow: 0 0 0 0 rgba(16, 185, 129, 0.4); } 70% { box-shadow: 0 0 0 10px rgba(16, 185, 129, 0); } 100% { box-shadow: 0 0 0 0 rgba(16, 185, 129, 0); } }
        
        /* NOTIFICATION */
        .jms-p-notif {
            position: fixed !important; bottom: 30px !important; right: 30px !important;
            background: #fff !important; padding: 15px 25px !important; border-radius: 60px !important;
            box-shadow: 0 10px 30px rgba(0,0,0,0.1) !important; display: flex !important;
            align-items: center !important; gap: 15px !important; z-index: 999999 !important;
            border-left: 5px solid var(--primary) !important; animation: jmsPSlideIn 0.6s cubic-bezier(0.23, 1, 0.32, 1) !important;
        }
        .jms-p-live { background: var(--primary); color: #fff; font-size: 9px; font-weight: 800; padding: 3px 8px; border-radius: 50px; text-transform: uppercase; }
        .jms-p-notif p { font-size: 13px; color: var(--dark); font-weight: 500; }
        
        /* OVERLAY GLASSMORPHISM */
        .jms-p-overlay {
            position: fixed !important; inset: 0 !important;
            background: rgba(10, 30, 25, 0.4) !important; backdrop-filter: blur(12px) !important;
            z-index: 1000000 !important; display: flex !important;
            align-items: center !important; justify-content: center !important;
            animation: jmsPFadeIn 0.4s !important; overflow-y: auto !important;
        }
        
        /* PREMIUM MODAL */
        .jms-p-modal {
            background: #fff !important; width: 95% !important; max-width: 550px !important;
            border-radius: 30px !important; padding: 50px !important; position: relative !important;
            box-shadow: 0 40px 100px rgba(0,0,0,0.3) !important;
            animation: jmsPPopIn 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275) !important;
            margin: 20px !important; border: 1px solid rgba(255,255,255,0.2) !important;
        }
        
        .jms-p-close {
            position: absolute !important; top: 20px !important; right: 20px !important;
            width: 40px !important; height: 40px !important; border-radius: 50% !important;
            background: #f1f5f9 !important; border: none !important; cursor: pointer !important;
            color: var(--gray) !important; font-size: 24px !important; z-index: 10 !important;
            display: flex !important; align-items: center !important; justify-content: center !important;
            transition: 0.3s !important;
        }
        .jms-p-close:hover { background: var(--primary) !important; color: #fff !important; transform: rotate(90deg) !important; }
        
        .jms-p-head { text-align: center; margin-bottom: 35px; }
        .jms-p-logo {
            font-size: 56px !important; font-weight: 900 !important; letter-spacing: 5px !important;
            background: linear-gradient(135deg, var(--primary), var(--primary-dark)) !important;
            -webkit-background-clip: text !important; -webkit-text-fill-color: transparent !important;
            margin-bottom: 5px !important; text-transform: uppercase !important;
        }
        .jms-p-head h2 { font-size: 28px; color: var(--dark); font-weight: 700; margin-bottom: 8px; }
        .jms-p-head p { font-size: 15px; color: var(--gray); line-height: 1.6; }
        
        /* GRID & FIELDS */
        .jms-p-grid { display: grid !important; grid-template-columns: 1fr 1fr !important; gap: 20px !important; margin-bottom: 20px !important; }
        .jms-p-field { display: flex !important; flex-direction: column !important; text-align: left !important; }
        .jms-p-field label { font-size: 11px !important; font-weight: 700 !important; color: var(--dark) !important; text-transform: uppercase !important; margin-bottom: 10px !important; letter-spacing: 1px !important; }
        .jms-p-field input, .jms-p-field select {
            height: 54px !important; padding: 0 20px !important; border: 2px solid var(--border) !important;
            border-radius: 15px !important; font-size: 15px !important; background: var(--bg) !important;
            outline: none !important; transition: all 0.3s !important; font-family: inherit !important;
        }
        .jms-p-field input:focus, .jms-p-field select:focus { border-color: var(--primary) !important; background: #fff !important; box-shadow: 0 0 0 5px rgba(125, 201, 181, 0.1) !important; }
        
        /* PREMIUM BUTTON */
        .jms-p-submit {
            width: 100% !important; background: linear-gradient(135deg, var(--primary), var(--primary-dark)) !important;
            color: #fff !important; border: none !important; padding: 18px !important;
            border-radius: 50px !important; font-size: 17px !important; font-weight: 700 !important;
            cursor: pointer !important; transition: 0.4s !important;
            box-shadow: 0 10px 30px rgba(125, 201, 181, 0.5) !important; margin-top: 10px !important;
        }
        .jms-p-submit:hover { transform: translateY(-5px) scale(1.02) !important; box-shadow: 0 15px 40px rgba(125, 201, 181, 0.6) !important; }
        
        /* PREMIUM CHAT */
        .jms-p-chat {
            position: fixed !important; bottom: 25px !important; left: 25px !important;
            width: 380px !important; background: var(--glass) !important; border-radius: 25px !important;
            z-index: 1000001 !important; box-shadow: 0 20px 50px rgba(0,0,0,0.15) !important;
            overflow: hidden !important; display: flex !important; flex-direction: column !important;
            transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1) !important; border: 1px solid rgba(125, 201, 181, 0.2) !important;
            backdrop-filter: blur(10px) !important;
        }
        .jms-p-chat.jms-p-min { width: 70px !important; height: 70px !important; border-radius: 50% !important; border: none !important; }
        .jms-p-chat.jms-p-min .jms-p-chat-header { padding: 0 !important; width: 100% !important; height: 100% !important; justify-content: center !important; }
        .jms-p-chat.jms-p-min .jms-p-info, .jms-p-chat.jms-p-min .jms-p-messages, .jms-p-chat.jms-p-min .jms-p-chat-footer, .jms-p-chat.jms-p-min .jms-p-close-chat { display: none !important; }
        
        .jms-p-chat-header {
            background: linear-gradient(135deg, var(--primary), var(--primary-dark)) !important;
            padding: 20px !important; color: #fff !important; display: flex !important;
            justify-content: space-between !important; align-items: center !important; cursor: pointer !important;
        }
        .jms-p-agent { display: flex !important; align-items: center !important; gap: 12px !important; }
        .jms-p-avatar {
            width: 44px !important; height: 44px !important; background: #fff !important;
            border-radius: 50% !important; position: relative !important;
            display: flex !important; align-items: center !important; justify-content: center !important;
        }
        .jms-p-avatar-text { color: var(--primary) !important; font-weight: 900 !important; font-size: 13px !important; }
        .jms-p-chat.jms-p-min .jms-p-avatar { width: 48px !important; height: 48px !important; }
        .jms-p-chat.jms-p-min .jms-p-avatar-text { font-size: 15px !important; }
        
        .jms-p-online {
            position: absolute !important; bottom: 2px !important; right: 2px !important;
            width: 11px !important; height: 11px !important; background: #10b981 !important;
            border: 2px solid #fff !important; border-radius: 50% !important; animation: jmsPPulse 2s infinite !important;
        }
        .jms-p-info strong { display: block; font-size: 15px; font-weight: 600; }
        .jms-p-info span { font-size: 11px; opacity: 0.9; }
        
        .jms-p-close-chat { background: none; border: none; color: #fff; font-size: 28px; cursor: pointer; opacity: 0.8; transition: 0.3s; }
        .jms-p-close-chat:hover { opacity: 1; transform: scale(1.1); }
        
        .jms-p-messages { height: 320px !important; padding: 25px !important; overflow-y: auto !important; background: #fdfdfd !important; display: flex !important; flex-direction: column !important; gap: 15px !important; }
        .jms-p-msg { padding: 12px 18px !important; border-radius: 20px !important; font-size: 14px !important; line-height: 1.5 !important; animation: jmsPFadeUp 0.4s !important; box-shadow: 0 2px 5px rgba(0,0,0,0.02) !important; }
        .jms-p-bot { background: #fff !important; border: 1px solid #eee !important; align-self: flex-start !important; color: var(--dark) !important; }
        .jms-p-user { background: var(--primary) !important; color: #fff !important; align-self: flex-end !important; }
        
        .jms-p-opt {
            width: 100% !important; border: 2px solid var(--primary) !important; background: #fff !important;
            color: var(--primary) !important; padding: 12px !important; border-radius: 12px !important;
            margin-top: 10px !important; cursor: pointer !important; text-align: left !important;
            font-size: 13px !important; font-weight: 700 !important; transition: 0.3s !important;
        }
        .jms-p-opt:hover { background: var(--primary) !important; color: #fff !important; transform: translateX(7px) !important; }
        
        .jms-p-chat-footer { padding: 15px !important; display: flex !important; gap: 10px !important; border-top: 1px solid #eee !important; background: #fff !important; }
        .jms-p-chat-footer input { flex: 1 !important; border: 2px solid var(--border) !important; padding: 12px 20px !important; border-radius: 30px !important; background: var(--bg) !important; outline: none; font-size: 14px; transition: 0.3s; }
        .jms-p-chat-footer input:focus { border-color: var(--primary); background: #fff; }
        .jms-p-chat-footer button { background: var(--primary); color: #fff; width: 45px; height: 45px; border-radius: 50%; border: none; cursor: pointer; display: flex; align-items: center; justify-content: center; transition: 0.3s; box-shadow: 0 5px 15px rgba(125, 201, 181, 0.4); }
        .jms-p-chat-footer button:hover { transform: scale(1.1); background: var(--primary-dark); }
        
        /* QUIZ */
        .jms-p-quiz { animation: jmsPPopIn 0.5s !important; }
        .jms-p-icon { font-size: 45px; margin-bottom: 15px; }
        .jms-p-choices { display: flex; flex-direction: column; gap: 12px; }
        .jms-p-choices button {
            width: 100% !important; padding: 15px !important; background: var(--bg) !important;
            border: 2px solid var(--border) !important; border-radius: 15px !important;
            font-weight: 600 !important; cursor: pointer !important; transition: 0.3s !important; color: var(--dark) !important;
        }
        .jms-p-choices button:hover { border-color: var(--primary) !important; color: var(--primary) !important; transform: translateY(-3px) !important; background: #fff !important; }
        
        @media (max-width: 480px) {
            .jms-p-chat:not(.jms-p-min) { width: calc(100% - 40px) !important; left: 20px !important; }
            .jms-p-modal { padding: 30px !important; }
            .jms-p-grid { grid-template-columns: 1fr !important; }
            .jms-p-notif { display: none !important; }
        }
    `;
    document.head.appendChild(style);

    // Funnel State
    var pState = { phase: 0, step: 0, data: {} };
    var pCookie = 'jms_premium_v5';
    function setPC(n, v) { var d = new Date(); d.setTime(d.getTime() + (24 * 60 * 60 * 1000)); document.cookie = n + "=" + v + ";expires=" + d.toUTCString() + ";path=/"; }
    function getPC(n) { var m = document.cookie.match(new RegExp('(^| )' + n + '=([^;]+)')); return m ? m[2] : null; }

    document.addEventListener("DOMContentLoaded", function () {
        // Notification logic
        setTimeout(function () {
            var n = document.getElementById('jms-p-notif');
            if (n) {
                n.classList.remove('jms-p-off');
                setTimeout(function () { n.style.opacity = '0'; setTimeout(() => n.classList.add('jms-p-off'), 500); }, 6000);
            }
        }, 2500);

        // Scroll Logic
        if (!getPC(pCookie)) {
            window.addEventListener('scroll', function pScrollHandler() {
                if (pState.phase > 0) return;
                var h = document.documentElement;
                var p = (h.scrollTop || document.body.scrollTop) / (h.scrollHeight - h.clientHeight) * 100;
                if (p > 25) {
                    pState.phase = 1;
                    document.getElementById('jms-p-overlay').classList.remove('jms-p-off');
                    document.body.classList.add('jms-p-no-scroll');
                    setPC(pCookie, 'visited');
                    window.removeEventListener('scroll', pScrollHandler);
                }
            });
        }
    });

    window.jmsPClose = function () {
        document.getElementById('jms-p-overlay').classList.add('jms-p-off');
        document.body.classList.remove('jms-p-no-scroll');
        if (pState.phase === 1) { pState.phase = 2; setTimeout(jmsPToggleChat, 3000); }
    };

    window.jmsPSubmit = function (e) {
        e.preventDefault();
        var b = e.target.querySelector('button');
        var m = document.getElementById('jms-p-msg');
        var old = b.innerText;
        b.innerText = 'Processing...'; b.disabled = true;
        fetch('https://api.web3forms.com/submit', { method: 'POST', body: new FormData(e.target) })
            .then(function (r) { return r.json(); })
            .then(function (res) {
                if (res.success) {
                    m.innerHTML = '<p style="color:#10b981; margin-top:15px; font-weight:600">✅ Booking Confirmed! We will call you soon.</p>';
                    setTimeout(jmsPClose, 2500);
                } else { b.innerText = old; b.disabled = false; m.innerText = 'Error, try again.'; }
            });
    };

    window.jmsPToggleChat = function () {
        var c = document.getElementById('jms-p-chat');
        c.classList.toggle('jms-p-min');
        if (!c.classList.contains('jms-p-min') && pState.step === 0) {
            setTimeout(function () {
                pBotMsg("Welcome to JMS Hospital! 🏥");
                setTimeout(function () {
                    pBotMsg(`How can we provide care for you today?
                    <button class="jms-p-opt" onclick="pStart('Gynaecology')">🤰 Gynaecology Consultation</button>
                    <button class="jms-p-opt" onclick="pStart('ChildCare')">👶 Child / Pediatric Care</button>
                    <button class="jms-p-opt" onclick="pStart('Surgery')">🏥 Surgery & Procedures</button>
                    <button class="jms-p-opt" onclick="pStart('Other')">✨ Other Specialization</button>`);
                }, 700);
            }, 400);
        }
    };

    window.jmsPCloseChat = function () { document.getElementById('jms-p-chat').classList.add('jms-p-min'); };
    function pBotMsg(h) { var d = document.createElement('div'); d.className = 'jms-p-msg jms-p-bot'; d.innerHTML = h; document.getElementById('jms-p-messages').appendChild(d); var c = document.getElementById('jms-p-messages'); c.scrollTop = c.scrollHeight; }
    function pUsrMsg(t) { var d = document.createElement('div'); d.className = 'jms-p-msg jms-p-user'; d.innerText = t; document.getElementById('jms-p-messages').appendChild(d); var c = document.getElementById('jms-p-messages'); c.scrollTop = c.scrollHeight; }

    window.pStart = function (i) {
        pUsrMsg(i); pState.data.intent = i; pState.step = 1;
        setTimeout(function () {
            pBotMsg("I'll help you with that. Could you please tell me your Full Name?");
            document.getElementById('jms-p-input').disabled = false;
            document.getElementById('jms-p-send').disabled = false;
            document.getElementById('jms-p-input').focus();
        }, 800);
    };

    window.jmsPSend = function () {
        var i = document.getElementById('jms-p-input'), v = i.value.trim();
        if (!v) return; pUsrMsg(v); i.value = '';
        if (pState.step === 1) {
            pState.data.name = v; pState.step = 2;
            setTimeout(function () { pBotMsg("Thank you, " + v.split(' ')[0] + ". And your Phone Number?"); }, 800);
        } else if (pState.step === 2) {
            if (v.length < 10) { pBotMsg("Please enter a valid mobile number."); return; }
            pState.data.phone = v; pBotMsg("Connecting to our specialist team...");
            var fd = new FormData();
            fd.append('access_key', 'ab6ee57d-c270-4376-afb7-8c6dfc568e89');
            fd.append('name', pState.data.name); fd.append('phone', pState.data.phone);
            fd.append('subject', 'Premium Chat Lead - JMSH');
            fd.append('intent', pState.data.intent);
            fetch('https://api.web3forms.com/submit', { method: 'POST', body: fd })
                .then(function () {
                    pBotMsg("✅ Request received! Our advisor will call you within 15 minutes.");
                    setTimeout(jmsPCloseChat, 4000);
                });
        }
    };

    var pExitTriggered = false;
    document.addEventListener('mouseleave', function (e) {
        if (e.clientY < 0 && !pExitTriggered && pState.phase > 0) {
            pExitTriggered = true;
            document.getElementById('jms-p-exit').classList.remove('jms-p-off');
            document.body.classList.add('jms-p-no-scroll');
        }
    });

    window.jmsPNext = function (s, v) {
        pState.data.choice = v;
        document.getElementById('jms-p-step1').style.display = 'none';
        document.getElementById('jms-p-step2').style.display = 'block';
    };

    window.jmsPExitSubmit = function (e) {
        e.preventDefault();
        var b = e.target.querySelector('button');
        var m = document.getElementById('jms-p-exit-msg');
        b.innerText = 'Sending Request...'; b.disabled = true;
        fetch('https://api.web3forms.com/submit', { method: 'POST', body: new FormData(e.target) })
            .then(function () {
                m.innerHTML = '<p style="color:#10b981; font-weight:600; margin-top:15px">✅ Thank you! We will reach out shortly.</p>';
                setTimeout(function () { document.getElementById('jms-p-exit').classList.add('jms-p-off'); document.body.classList.remove('jms-p-no-scroll'); }, 2500);
            });
    };
})();
