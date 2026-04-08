// -----------------------------------------
// CONTENT MODULES
// -----------------------------------------

const contentModules = {
    home: `
        <section class="container hero fade-in">
            <div class="hero-badge">
                <i data-lucide="shield-check"></i>
                Certified Penetration Tester
            </div>
            <h1>I Help Organizations Secure Their Applications & Train the Next Generation of Ethical Hackers</h1>
            <p class="lead">Specialized in advanced vulnerability assessments, bug bounty programs, and cutting-edge cybersecurity training.</p>
            <div class="cta-group">
                <a href="#contact" class="btn-primary" data-link>Hire Me</a>
                <a href="#training" class="btn-secondary" data-link>
                    <i data-lucide="graduation-cap"></i> Enroll
                </a>
                <a href="https://github.com/amarnath033" target="_blank" class="btn-secondary">
                    <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" style="margin-right:5px;"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg> GitHub
                </a>
                <a href="https://www.linkedin.com/in/amarnath-chukkapalli-822a85227" target="_blank" class="btn-secondary">
                    <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" style="margin-right:5px;"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg> LinkedIn
                </a>
            </div>
        </section>

        <section class="container fade-in">
            <div class="section-header">
                <h2>Why Trust Me?</h2>
                <p>Bringing years of ethical hacking experience directly to your digital perimeters.</p>
            </div>
            <div class="stats-grid">
                <div class="stat-item glass-card">
                    <h3>1500+</h3>
                    <p>Vulnerabilities Disclosed</p>
                </div>
                <div class="stat-item glass-card">
                    <h3>50+</h3>
                    <p>Enterprise Clients Secured</p>
                </div>
                <div class="stat-item glass-card">
                    <h3>150+</h3>
                    <p>Students Trained Worldwide</p>
                </div>
            </div>
            
            <div class="logos-strip mt-5">
                <!-- Placeholders for tools and technologies -->
                <div title="Burp Suite" style="color:var(--text-secondary)"><i data-lucide="shield" size="40"></i><br><small>Burp Suite</small></div>
                <div title="Metasploit" style="color:var(--text-secondary)"><i data-lucide="cpu" size="40"></i><br><small>Metasploit</small></div>
                <div title="Nmap" style="color:var(--text-secondary)"><i data-lucide="radar" size="40"></i><br><small>Nmap</small></div>
                <div title="Wireshark" style="color:var(--text-secondary)"><i data-lucide="activity" size="40"></i><br><small>Wireshark</small></div>
            </div>
        </section>

        <section class="container fade-in">
            <div class="section-header">
                <h2>Key Services</h2>
                <p>Comprehensive security solutions designed to proactively identify and neutralize threats.</p>
            </div>
            <div class="grid">
                <div class="glass-card">
                    <div class="card-icon">
                        <svg viewBox="0 0 24 24" width="32" height="32" stroke="currentColor" stroke-width="1.5" fill="none" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line><circle cx="15" cy="11" r="3"></circle><line x1="17.12" y1="13.12" x2="20" y2="16"></line></svg>
                    </div>
                    <h3>Web App Pentesting</h3>
                    <p>In-depth security analysis of your web applications to uncover OWASP Top 10 vulnerabilities and complex business logic flaws.</p>
                </div>
                <div class="glass-card">
                    <div class="card-icon">
                        <svg viewBox="0 0 24 24" width="32" height="32" stroke="currentColor" stroke-width="1.5" fill="none" stroke-linecap="round" stroke-linejoin="round"><rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect><path d="M12 18h.01"></path><path d="M8 8l4-2 4 2v4c0 2-2 4-4 4s-4-2-4-4V8z"></path></svg>
                    </div>
                    <h3>Mobile App Security</h3>
                    <p>Comprehensive dynamic and static analysis for iOS and Android platforms ensuring data is strictly protected.</p>
                </div>
                <div class="glass-card">
                    <div class="card-icon">
                        <svg viewBox="0 0 24 24" width="32" height="32" stroke="currentColor" stroke-width="1.5" fill="none" stroke-linecap="round" stroke-linejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path><path d="M3 12c0 1.66 4 3 9 3s9-1.34 9-3"></path></svg>
                    </div>
                    <h3>API Security Testing</h3>
                    <p>Rigorous testing of REST & GraphQL APIs to prevent unauthorized access and data exfiltration.</p>
                </div>
            </div>
        </section>

        <section class="container fade-in">
            <div class="section-header">
                <h2>Previous Employer & <span class="highlight">Colleague Reviews</span></h2>
                <p>What previous employers and team members say about my work.</p>
            </div>
            <div class="grid">
                <div class="glass-card">
                    <p>"An absolute professional. His deep expertise in offensive security and the vulnerabilities he found during our engagements were highly impactful."</p>
                    <div class="mt-3" style="color:var(--accent-cyan)">
                        <strong>- Manikanta Simgamsetti</strong><br>
                        <small style="color:var(--text-secondary)">Senior White Hat, Entersoft Security</small>
                    </div>
                </div>
                <div class="glass-card">
                    <p>"Working with Amarnath has been a great experience. His structured methodology and practical insights significantly helped uplift our overall security posture."</p>
                    <div class="mt-3" style="color:var(--accent-cyan)">
                        <strong>- Rishab Ashish Sharma</strong><br>
                        <small style="color:var(--text-secondary)">VAPT Lead and Red Teamer, Proarch</small>
                    </div>
                </div>
            </div>
        </section>
    `,
    
    about: `
        <section class="container fade-in" style="padding-top: 8rem;">
            <div class="section-header">
                <h2>About <span class="highlight">Me</span></h2>
                <p>Dedicated to defensive security through offensive operations.</p>
            </div>
            <div class="glass-card mb-4" style="max-width: 900px; margin: 0 auto;">
                <h3 class="highlight">Professional Introduction</h3>
                <p>Hello! I am Amarnath Chukkapalli, an independent Ethical Hacker, Bug Bounty Hunter, and Penetration Testing Trainer based in India. With years of hands-on experience penetrating enterprise networks, web applications, and mobile environments, I specialize in uncovering critical vulnerabilities before malicious threat actors can exploit them.</p>
                
                <p>My philosophy is built entirely around <strong>ethics, responsibility, and strict confidentiality</strong>. Every assessment I conduct is authorized, heavily scoped, and aimed at providing concrete, actionable remediation steps for developers and stakeholders.</p>

                <h3 class="highlight mt-4">Professional Experience</h3>
                
                <div style="border-left: 2px solid var(--accent-cyan); padding-left: 1.5rem; margin-bottom: 2rem; margin-top: 1.5rem; position: relative;">
                    <div style="position: absolute; left: -6px; top: 5px; width: 10px; height: 10px; border-radius: 50%; background: var(--accent-cyan); box-shadow: 0 0 10px var(--accent-cyan);"></div>
                    <h4 style="margin-bottom: 0.2rem; display: flex; align-items: center;">VAPT Engineer</h4>
                    <strong style="color: #fff;">Proarch</strong> <span style="color: var(--text-secondary); font-size: 0.9rem;">| Oct 2025 – Present</span>
                    <ul class="mt-2" style="color: var(--text-secondary); font-size: 0.95rem; list-style-type: disc; margin-left: 1rem;">
                        <li style="margin-bottom: 0.5rem;">Leading comprehensive Vulnerability Assessments and Penetration Testing (VAPT) across complex enterprise network perimeters.</li>
                        <li style="margin-bottom: 0.5rem;">Conducting advanced Red Team simulations to identify potential attack vectors and security posture gaps within business logic.</li>
                        <li style="margin-bottom: 0;">Collaborating directly with corporate clients to execute threat modeling, recommend risk remediation, and oversee strategic security implementations.</li>
                    </ul>
                </div>

                <div style="border-left: 2px solid rgba(0, 255, 204, 0.3); padding-left: 1.5rem; margin-bottom: 1.5rem; position: relative;">
                    <div style="position: absolute; left: -6px; top: 5px; width: 10px; height: 10px; border-radius: 50%; background: rgba(0, 255, 204, 0.3);"></div>
                    <h4 style="margin-bottom: 0.2rem; color: #ccc;">Penetration Tester</h4>
                    <strong style="color: #ccc;">Entersoft Security</strong> <span style="color: var(--text-secondary); font-size: 0.9rem;">| Sep 2022 – Sep 2025 (3 Years)</span>
                    <ul class="mt-2" style="color: var(--text-secondary); font-size: 0.95rem; list-style-type: disc; margin-left: 1rem;">
                        <li style="margin-bottom: 0.5rem;">Specialized in extensive Web Application, Mobile Application (iOS/Android), and REST/GraphQL API security testing.</li>
                        <li style="margin-bottom: 0.5rem;">Successfully executed end-to-end security audits adhering strictly to OWASP Top 10 limits alongside custom business logic abuse cases.</li>
                        <li style="margin-bottom: 0;">Communicated findings to developers via actionable reports, resulting in significantly accelerated patch deployment times.</li>
                    </ul>
                </div>
                
                <h3 class="highlight mt-4">Certifications & Expertise</h3>
                <ul>
                    <li><i data-lucide="check-circle"></i> <strong>CEH</strong> (Certified Ethical Hacker)</li>
                </ul>

                <h3 class="highlight mt-4">Bug Bounty Background</h3>
                <p>I have aggressively participated in global bug bounty programs spanning diverse industries—from financial institutions to healthcare SaaS. This real-world exposure allows me to think outside traditional compliance checklists and find complex, chained vulnerabilities.</p>

                <h3 class="highlight mt-4">Teaching & Mentorship</h3>
                <p>Beyond breaking things, I am deeply passionate about building the next generation of security professionals. Through my live courses and mentorship, I've had the privilege of guiding students and IT professionals towards successful careers in offensive security.</p>
            </div>
        </section>
    `,

    services: `
        <section class="container fade-in" style="padding-top: 8rem;">
            <div class="section-header">
                <h2>VAPT & <span class="highlight">Consulting Services</span></h2>
                <p>Enterprise-grade security testing tailored to your infrastructure.</p>
            </div>
            
            <div class="grid">
                <!-- Service 1 -->
                <div class="glass-card">
                    <div class="card-icon">
                        <svg viewBox="0 0 24 24" width="32" height="32" stroke="currentColor" stroke-width="1.5" fill="none" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line><circle cx="15" cy="11" r="3"></circle><line x1="17.12" y1="13.12" x2="20" y2="16"></line></svg>
                    </div>
                    <h3>Web App Pentesting</h3>
                    <p>Deep-dive manual testing combined with automated checks.</p>
                    <ul>
                        <li><i data-lucide="check"></i> OWASP Top 10 Coverage</li>
                        <li><i data-lucide="check"></i> Business Logic Abuse</li>
                        <li><i data-lucide="check"></i> Auth Bypass & Privilege Escalation</li>
                    </ul>
                    <p class="mt-3"><small><strong>Deliverables:</strong> Executive Summary, Technical Report, Proof of Concepts (PoCs), Remediation Steps.</small></p>
                </div>
                
                <!-- Service 2 -->
                <div class="glass-card">
                    <div class="card-icon">
                        <svg viewBox="0 0 24 24" width="32" height="32" stroke="currentColor" stroke-width="1.5" fill="none" stroke-linecap="round" stroke-linejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path><path d="M3 12c0 1.66 4 3 9 3s9-1.34 9-3"></path></svg>
                    </div>
                    <h3>API Security Testing</h3>
                    <p>Securing the backbone of your modern applications (REST/GraphQL).</p>
                    <ul>
                        <li><i data-lucide="check"></i> BOLA / IDOR Testing</li>
                        <li><i data-lucide="check"></i> Mass Assignment Checks</li>
                        <li><i data-lucide="check"></i> Rate Limiting & Abuse</li>
                    </ul>
                    <p class="mt-3"><small><strong>Deliverables:</strong> Comprehensive API Security Report, Postman Collections for PoC.</small></p>
                </div>

                <!-- Service 3 -->
                <div class="glass-card">
                    <div class="card-icon">
                        <svg viewBox="0 0 24 24" width="32" height="32" stroke="currentColor" stroke-width="1.5" fill="none" stroke-linecap="round" stroke-linejoin="round"><rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect><path d="M12 18h.01"></path><path d="M8 8l4-2 4 2v4c0 2-2 4-4 4s-4-2-4-4V8z"></path></svg>
                    </div>
                    <h3>Mobile App Security</h3>
                    <p>Securing iOS and Android environments against local and remote attacks.</p>
                    <ul>
                        <li><i data-lucide="check"></i> Static Code Analysis (SAST)</li>
                        <li><i data-lucide="check"></i> Dynamic Instrumentation</li>
                        <li><i data-lucide="check"></i> Insecure Storage & SSL Pinning</li>
                    </ul>
                </div>

                <!-- Service 4 -->
                <div class="glass-card">
                    <div class="card-icon">
                        <svg viewBox="0 0 24 24" width="32" height="32" stroke="currentColor" stroke-width="1.5" fill="none" stroke-linecap="round" stroke-linejoin="round"><rect x="16" y="16" width="6" height="6" rx="1"></rect><rect x="2" y="16" width="6" height="6" rx="1"></rect><rect x="9" y="2" width="6" height="6" rx="1"></rect><path d="M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3"></path><path d="M12 12V8"></path></svg>
                    </div>
                    <h3>Network & Infrastructure</h3>
                    <p>Identifying misconfigurations in your internal and external perimeters.</p>
                    <ul>
                        <li><i data-lucide="check"></i> Active Directory Assessments</li>
                        <li><i data-lucide="check"></i> Firewall & Router Audits</li>
                        <li><i data-lucide="check"></i> Cloud Misconfigurations (AWS/Azure)</li>
                    </ul>
                </div>

                <!-- Service 5 -->
                <div class="glass-card">
                    <div class="card-icon">
                        <svg viewBox="0 0 24 24" width="32" height="32" stroke="currentColor" stroke-width="1.5" fill="none" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="6"></circle><circle cx="12" cy="12" r="2"></circle><line x1="12" y1="2" x2="12" y2="4"></line><line x1="12" y1="20" x2="12" y2="22"></line><line x1="2" y1="12" x2="4" y2="12"></line><line x1="20" y1="12" x2="22" y2="12"></line></svg>
                    </div>
                    <h3>Red Team Assessments</h3>
                    <p>Simulating real-world Advanced Persistent Threats (APTs).</p>
                    <ul>
                        <li><i data-lucide="check"></i> Social Engineering / Phishing</li>
                        <li><i data-lucide="check"></i> AV/EDR Evasion</li>
                        <li><i data-lucide="check"></i> Covert Exfiltration</li>
                    </ul>
                </div>

                <!-- Service 6 -->
                <div class="glass-card">
                    <div class="card-icon">
                        <svg viewBox="0 0 24 24" width="32" height="32" stroke="currentColor" stroke-width="1.5" fill="none" stroke-linecap="round" stroke-linejoin="round"><rect x="8" y="6" width="8" height="14" rx="4"></rect><path d="M12 2v4"></path><path d="M6 10h2"></path><path d="M6 14h2"></path><path d="M18 10h-2"></path><path d="M18 14h-2"></path><path d="M20 18l-3.3-3.3"></path><path d="M4 18l3.3-3.3"></path></svg>
                    </div>
                    <h3>Bug Bounty Program Support</h3>
                    <p>Assisting organizations in managing and validating crowdsourced vulnerabilities.</p>
                    <ul>
                        <li><i data-lucide="check"></i> Triage & Validation</li>
                        <li><i data-lucide="check"></i> Duplication Handling</li>
                        <li><i data-lucide="check"></i> Scope Advisory</li>
                    </ul>
                </div>
            </div>
        </section>
    `,

    training: `
        <section class="container fade-in" style="padding-top: 8rem;">
            <div class="section-header">
                <h2>Cybersecurity <span class="highlight">Training</span></h2>
                <p>Master the art of ethical hacking from an active industry practitioner.</p>
            </div>
            
            <div class="grid">
                <!-- Course 1 -->
                <div class="glass-card">
                    <div class="card-icon"><i data-lucide="rocket"></i></div>
                    <h3>Ethical Hacking (Beginner)</h3>
                    <p>The perfect starting point for IT professionals and college students.</p>
                    <ul>
                        <li><i data-lucide="book"></i> Networking & Linux Basics</li>
                        <li><i data-lucide="book"></i> Intro to Penetration Testing</li>
                        <li><i data-lucide="book"></i> Basic Web Exploitation</li>
                    </ul>
                    <div class="mt-4 pt-3" style="border-top:1px solid var(--border-color);">
                        <p><strong>Mode:</strong> Recorded + Live Q&A</p>
                        <p><strong>Duration:</strong> 4 Weeks</p>
                        <p><strong>Price:</strong> Contact for Pricing (INR)</p>
                    </div>
                </div>

                <!-- Course 2 -->
                <div class="glass-card">
                    <div class="card-icon"><i data-lucide="layout"></i></div>
                    <h3>Advanced Web App Pentesting</h3>
                    <p>Elevate your skills to hunt complex business logic vulnerabilities.</p>
                    <ul>
                        <li><i data-lucide="book"></i> Advanced XSS & SSRF</li>
                        <li><i data-lucide="book"></i> Deserialization Attacks</li>
                        <li><i data-lucide="book"></i> CI/CD Pipeline Attacks</li>
                    </ul>
                    <div class="mt-4 pt-3" style="border-top:1px solid var(--border-color);">
                        <p><strong>Mode:</strong> Live Online</p>
                        <p><strong>Duration:</strong> 6 Weeks</p>
                        <p><strong>Price:</strong> Contact for Pricing (INR)</p>
                    </div>
                </div>

                <!-- Course 3 -->
                <div class="glass-card">
                    <div class="card-icon"><i data-lucide="bug-play"></i></div>
                    <h3>Bug Bounty Hunting</h3>
                    <p>Learn the exact methodologies used to uncover paid bounties.</p>
                    <ul>
                        <li><i data-lucide="book"></i> Reckon & Attack Surface Mngt</li>
                        <li><i data-lucide="book"></i> Automation & Scripting</li>
                        <li><i data-lucide="book"></i> Writing Winning Reports</li>
                    </ul>
                    <div class="mt-4 pt-3" style="border-top:1px solid var(--border-color);">
                        <p><strong>Mode:</strong> Live Mentorship</p>
                        <p><strong>Duration:</strong> 8 Weeks</p>
                        <p><strong>Price:</strong> Contact for Pricing (INR)</p>
                    </div>
                </div>
            </div>
        </section>
    `,

    pricing: `
        <section class="container fade-in" style="padding-top: 8rem;">
            <div class="section-header">
                <h2>Transparent <span class="highlight">Pricing</span></h2>
                <p>Professional services tailored to businesses of all sizes.</p>
            </div>

            <div class="grid" style="max-width: 1000px; margin: 0 auto;">
                <!-- Starter VAPT -->
                <div class="glass-card" style="text-align:center;">
                    <h3>Starter VAPT</h3>
                    <h2 class="highlight" style="margin: 1.5rem 0;">Request Quote</h2>
                    <p>Perfect for startups and small web applications.</p>
                    <ul style="text-align:left; margin-top:2rem;">
                        <li><i data-lucide="check"></i> Up to 5 Dynamic Pages</li>
                        <li><i data-lucide="check"></i> OWASP Top 10 Mapping</li>
                        <li><i data-lucide="check"></i> 1 Re-test Iteration</li>
                        <li><i data-lucide="check"></i> Standard PDF Report</li>
                    </ul>
                    <a href="#contact" class="btn-secondary mt-3" data-link style="width:100%; justify-content:center;">Get Details</a>
                </div>

                <!-- Standard VAPT -->
                <div class="glass-card" style="text-align:center; border-color:var(--accent-cyan); transform: scale(1.05);">
                    <div style="background:var(--accent-cyan); color:#000; padding:0.2rem; font-size:0.8rem; font-weight:bold; width:100%; position:absolute; top:0; left:0;">MOST POPULAR</div>
                    <h3 class="mt-4">Standard VAPT</h3>
                    <h2 class="highlight" style="margin: 1.5rem 0;">Request Quote</h2>
                    <p>Comprehensive testing for medium complex apps/APIs.</p>
                    <ul style="text-align:left; margin-top:2rem;">
                        <li><i data-lucide="check"></i> Advanced Logic Testing</li>
                        <li><i data-lucide="check"></i> Basic API Coverage</li>
                        <li><i data-lucide="check"></i> 2 Re-test Iterations</li>
                        <li><i data-lucide="check"></i> Developer Remediation Call</li>
                    </ul>
                    <a href="#contact" class="btn-primary mt-3" data-link style="width:100%; justify-content:center;">Get Details</a>
                </div>

                <!-- Custom Enterprise -->
                <div class="glass-card" style="text-align:center;">
                    <h3>Enterprise Assessment</h3>
                    <h2 class="highlight" style="margin: 1.5rem 0;">Custom</h2>
                    <p>Red Teaming and large-scale infrastructure audits.</p>
                    <ul style="text-align:left; margin-top:2rem;">
                        <li><i data-lucide="check"></i> Unlimited Scope Customization</li>
                        <li><i data-lucide="check"></i> Internal / External Networks</li>
                        <li><i data-lucide="check"></i> Cloud Misconfigurations</li>
                        <li><i data-lucide="check"></i> Dedicated Continuous Support</li>
                    </ul>
                    <a href="#contact" class="btn-secondary mt-3" data-link style="width:100%; justify-content:center;">Contact Sales</a>
                </div>
            </div>
            
            <div class="mt-5" style="text-align:center; max-width:600px; margin: 4rem auto 0; color:var(--text-secondary);">
                <i data-lucide="info" style="color:var(--accent-cyan); margin-bottom:1rem;"></i>
                <p><strong>Note on Training Courses:</strong> Prices for live batches and recorded sessions vary based on cohort size. Please reach out via the contact form indicating your course of interest for exact INR pricing and current discounts.</p>
            </div>
        </section>
    `,

    contact: `
        <section class="container fade-in" style="padding-top: 8rem;">
            <div class="section-header">
                <h2>Con<span class="highlight">tact</span> Me</h2>
                <p>Let's discuss how we can secure your critical assets.</p>
            </div>

            <div class="grid" style="grid-template-columns: 1fr 2fr; gap: 4rem;">
                <!-- Contact Info -->
                <div>
                    <div class="glass-card mb-4" style="padding: 1.5rem;">
                        <h4 class="highlight mb-3">Direct Contact</h4>
                        <div style="display:flex; gap:1rem; align-items:center; margin-bottom:1rem;">
                            <i data-lucide="mail"></i>
                            <a href="mailto:amarnathchukkapalli.c@gmail.com" style="color:var(--text-primary);">amarnathchukkapalli.c@gmail.com</a>
                        </div>
                        <div style="display:flex; gap:1rem; align-items:center;">
                            <i data-lucide="message-circle"></i>
                            <a href="https://wa.me/918499936257" target="_blank" style="color:var(--text-primary);">+91 8499936257 (WhatsApp)</a>
                        </div>
                    </div>
                    
                    <div class="glass-card" style="padding: 1.5rem;">
                        <h4 class="highlight mb-3">Important Notice</h4>
                        <p style="font-size: 0.9rem;">I do strictly <strong>NOT</strong> participate in unethical, unauthorized hacking requests, or social media account recovery. All engagements require explicit written authorization.</p>
                    </div>
                </div>

                <!-- Form -->
                <div>
                    <form class="contact-form" action="https://formsubmit.co/amarnathchukkapalli.c@gmail.com" method="POST">
                        <input type="hidden" name="_subject" value="New Submission on Cybersecurity Portfolio!">
                        <input type="hidden" name="_captcha" value="false">
                        <div class="grid" style="grid-template-columns: 1fr 1fr; margin-top:0; gap:1rem;">
                            <div class="form-group">
                                <label>Name</label>
                                <input type="text" name="Name" class="form-control" placeholder="Your Name" required>
                            </div>
                            <div class="form-group">
                                <label>Email</label>
                                <input type="email" name="Email" class="form-control" placeholder="you@company.com" required>
                            </div>
                        </div>
                        
                        <div class="form-group">
                            <label>Phone (Optional)</label>
                            <input type="tel" name="Phone" class="form-control" placeholder="Your Phone Number">
                        </div>

                        <div class="form-group">
                            <label>Service / Course of Interest</label>
                            <select name="Interest" class="form-control" required style="appearance: none; background-color: rgba(0,0,0,0.5);">
                                <option value="" disabled selected>Select an option...</option>
                                <option value="Web App VAPT">Web App VAPT</option>
                                <option value="API Security Testing">API Security Testing</option>
                                <option value="Mobile App Pentest">Mobile App Pentest</option>
                                <option value="Training Courses">Training Courses</option>
                                <option value="General Inquiry">General Inquiry</option>
                            </select>
                        </div>

                        <div class="form-group">
                            <label>Message</label>
                            <textarea name="Message" class="form-control" placeholder="Tell me briefly about your scope or requirements..." required></textarea>
                        </div>

                        <button type="submit" class="btn-primary" style="width:100%; border:none; cursor:pointer; padding:1rem;">Send Secure Message</button>
                    </form>
                </div>
            </div>
        </section>
    `,

    legal: `
        <section class="container fade-in" style="padding-top: 8rem;">
            <div class="section-header">
                <h2>Legal & <span class="highlight">Trust</span></h2>
                <p>Transparency, Ethics, and Responsibility.</p>
            </div>

            <div class="glass-card mb-4">
                <h3 class="highlight">Ethics Statement</h3>
                <p>As a certified Ethical Hacker, I am strictly bound by a code of ethics. All security assessments, vulnerability research, and penetration tests are performed ONLY with explicit, written authorization from the system owners. I do not engage in black-hat activities, unauthorized exploitation, or any form of illegal digital intrusion.</p>
            </div>

            <div class="glass-card mb-4">
                <h3 class="highlight">Responsible Disclosure Policy</h3>
                <p>If I stumble upon a vulnerability during standard internet usage (such as misconfigured open buckets or exposed API keys on public projects), I adhere strictly to responsible disclosure. I will make a best-effort attempt to privately contact the affected organization to swiftly patch the issue without seeking extortion or unauthorized bug bounties.</p>
            </div>

            <div class="glass-card mb-4">
                <h3 class="highlight">Disclaimer</h3>
                <p>All training provided on this platform is strictly for educational purposes. The techniques taught are intended exclusively to help students and professionals secure their own systems or those they are authorized to test. The instructor assumes no liability for any malicious actions carried out using the information learned in these courses.</p>
            </div>

            <div class="glass-card">
                <h3 class="highlight">Privacy Policy & Terms (Placeholder)</h3>
                <p>Any data submitted through the contact forms on this site is treated with utmost confidentiality. No client data, application names, or vulnerabilities are ever publicly disclosed without explicit consent. Full organizational terms and conditions and formal NDAs will be provided alongside testing proposals.</p>
            </div>
        </section>
    `,

    blogs: `
        <section class="container fade-in" style="padding-top: 8rem;">
            <div class="section-header">
                <h2>My <span class="highlight">Blogs</span></h2>
                <p>Technical write-ups, vulnerability disclosures, and pentesting tutorials on Medium.</p>
            </div>
            
            <div class="grid">
                <!-- Blog 1 -->
                <div class="glass-card" style="padding: 0; overflow: hidden; display: flex; flex-direction: column;">
                    <div style="height: 180px; background: url('https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=800&q=80') center/cover;"></div>
                    <div style="padding: 1.5rem; flex: 1; display: flex; flex-direction: column;">
                        <p style="color:var(--text-secondary); font-size:0.85rem; margin-bottom:0.5rem; display:flex; align-items:center; gap:5px;">
                            <svg viewBox="0 0 24 24" width="14" height="14" stroke="var(--accent-cyan)" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg> Medium
                        </p>
                        <h3 style="margin-bottom: 1rem; font-size: 1.1rem; line-height: 1.4;"><a href="https://medium.com/@amarnathchukkapalli.c" target="_blank" style="color:#fff;">Understanding CSP Header: Crucial Role in XSS Mitigation and How Attackers Try to Bypass Them</a></h3>
                        <div style="margin-top:auto; padding-top: 1rem;">
                            <a href="https://medium.com/@amarnathchukkapalli.c" target="_blank" class="btn-secondary" style="font-size: 0.8rem; padding: 0.5rem 1rem;">Read Article</a>
                        </div>
                    </div>
                </div>

                <!-- Blog 2 -->
                <div class="glass-card" style="padding: 0; overflow: hidden; display: flex; flex-direction: column;">
                    <div style="height: 180px; background: url('https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=800&q=80') center/cover;"></div>
                    <div style="padding: 1.5rem; flex: 1; display: flex; flex-direction: column;">
                        <p style="color:var(--text-secondary); font-size:0.85rem; margin-bottom:0.5rem; display:flex; align-items:center; gap:5px;">
                            <svg viewBox="0 0 24 24" width="14" height="14" stroke="var(--accent-cyan)" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg> Medium
                        </p>
                        <h3 style="margin-bottom: 1rem; font-size: 1.1rem; line-height: 1.4;"><a href="https://medium.com/@amarnathchukkapalli.c" target="_blank" style="color:#fff;">Bypassing SQL Injection Filters Using Space Padding</a></h3>
                        <div style="margin-top:auto; padding-top: 1rem;">
                            <a href="https://medium.com/@amarnathchukkapalli.c" target="_blank" class="btn-secondary" style="font-size: 0.8rem; padding: 0.5rem 1rem;">Read Article</a>
                        </div>
                    </div>
                </div>

                <!-- Blog 3 -->
                <div class="glass-card" style="padding: 0; overflow: hidden; display: flex; flex-direction: column;">
                    <div style="height: 180px; background: url('https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=800&q=80') center/cover;"></div>
                    <div style="padding: 1.5rem; flex: 1; display: flex; flex-direction: column;">
                        <p style="color:var(--text-secondary); font-size:0.85rem; margin-bottom:0.5rem; display:flex; align-items:center; gap:5px;">
                            <svg viewBox="0 0 24 24" width="14" height="14" stroke="var(--accent-cyan)" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg> Medium
                        </p>
                        <h3 style="margin-bottom: 1rem; font-size: 1.1rem; line-height: 1.4;"><a href="https://medium.com/@amarnathchukkapalli.c" target="_blank" style="color:#fff;">When a Symptom Becomes a Payload: LFI via PDF in a Healthcare App</a></h3>
                        <div style="margin-top:auto; padding-top: 1rem;">
                            <a href="https://medium.com/@amarnathchukkapalli.c" target="_blank" class="btn-secondary" style="font-size: 0.8rem; padding: 0.5rem 1rem;">Read Article</a>
                        </div>
                    </div>
                </div>

                <!-- Blog 4 -->
                <div class="glass-card" style="padding: 0; overflow: hidden; display: flex; flex-direction: column;">
                    <div style="height: 180px; background: url('https://images.unsplash.com/photo-1607252656733-fd7407bc2bd0?auto=format&fit=crop&w=800&q=80') center/cover;"></div>
                    <div style="padding: 1.5rem; flex: 1; display: flex; flex-direction: column;">
                        <p style="color:var(--text-secondary); font-size:0.85rem; margin-bottom:0.5rem; display:flex; align-items:center; gap:5px;">
                            <svg viewBox="0 0 24 24" width="14" height="14" stroke="var(--accent-cyan)" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg> Medium
                        </p>
                        <h3 style="margin-bottom: 1rem; font-size: 1.1rem; line-height: 1.4;"><a href="https://medium.com/@amarnathchukkapalli.c" target="_blank" style="color:#fff;">Android SSL Pinning</a></h3>
                        <div style="margin-top:auto; padding-top: 1rem;">
                            <a href="https://medium.com/@amarnathchukkapalli.c" target="_blank" class="btn-secondary" style="font-size: 0.8rem; padding: 0.5rem 1rem;">Read Article</a>
                        </div>
                    </div>
                </div>

                <!-- Blog 5 -->
                <div class="glass-card" style="padding: 0; overflow: hidden; display: flex; flex-direction: column;">
                    <div style="height: 180px; background: url('https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?auto=format&fit=crop&w=800&q=80') center/cover;"></div>
                    <div style="padding: 1.5rem; flex: 1; display: flex; flex-direction: column;">
                        <p style="color:var(--text-secondary); font-size:0.85rem; margin-bottom:0.5rem; display:flex; align-items:center; gap:5px;">
                            <svg viewBox="0 0 24 24" width="14" height="14" stroke="var(--accent-cyan)" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg> Medium
                        </p>
                        <h3 style="margin-bottom: 1rem; font-size: 1.1rem; line-height: 1.4;"><a href="https://medium.com/@amarnathchukkapalli.c" target="_blank" style="color:#fff;">Root Detection in Android</a></h3>
                        <div style="margin-top:auto; padding-top: 1rem;">
                            <a href="https://medium.com/@amarnathchukkapalli.c" target="_blank" class="btn-secondary" style="font-size: 0.8rem; padding: 0.5rem 1rem;">Read Article</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    `
};

// -----------------------------------------
// ROUTER & APP LOGIC
// -----------------------------------------

const appRoot = document.getElementById('app-root');
const navLinks = document.querySelectorAll('.nav-link');
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const navLinksContainer = document.getElementById('nav-links');

function handleRouting() {
    const hash = window.location.hash.replace('#', '') || 'home';
    
    // Ensure fade out
    appRoot.classList.remove('fade-in');
    
    setTimeout(() => {
        // Load content
        appRoot.innerHTML = contentModules[hash] || contentModules['home'];
        
        // Re-initialize Lucide icons for new content
        lucide.createIcons();
        
        // Trigger fade in
        appRoot.classList.add('fade-in');
        
        // Update active nav links
        updateNavLinks(hash);
        
        // Manage mobile menu
        if (window.innerWidth <= 768) {
            navLinksContainer.classList.remove('active');
        }

        // Scroll to top
        window.scrollTo(0, 0);

        // Attach event listeners to newly injected links
        attachLinkListeners();
    }, 100);
}

function updateNavLinks(currentHash) {
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === '#' + currentHash) {
            link.classList.add('active');
        }
    });
}

function attachLinkListeners() {
    const internalLinks = document.querySelectorAll('[data-link]');
    internalLinks.forEach(link => {
        // Remove old listener to prevent duplicates
        link.removeEventListener('click', linkClickHandler);
        link.addEventListener('click', linkClickHandler);
    });
}

function linkClickHandler(e) {
    // Let native hash routing handle it, but we smoothly override behavior if needed
}

// Mobile Menu Toggle
mobileMenuBtn.addEventListener('click', () => {
    navLinksContainer.classList.toggle('active');
});

// Set Dynamic Year
document.getElementById('current-year').textContent = new Date().getFullYear();

// Initialize App
window.addEventListener('hashchange', handleRouting);

document.addEventListener('DOMContentLoaded', () => {
    handleRouting();
});
