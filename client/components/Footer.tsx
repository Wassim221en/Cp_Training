import React from "react";
import { Code2, Github, Linkedin, ExternalLink, Mail, PersonStanding } from "lucide-react";
import { Link } from "react-router-dom";

const SITE_NAME = "Aleppo CPC Training";
const DEV_NAME = "Wassim Alshami";
const GITHUB_URL = "https://github.com/Wassim221en/";
const LINKEDIN_URL = "https://www.linkedin.com/in/wassim-alshami-wassim221e/";
const CONTACT_EMAIL = "wassim221e@gmail.com";
const PORTFOLIO_URL = "wassim221en.github.io/Portfolio/"

export default function Footer() {
    const year = new Date().getFullYear();

    return (
        <footer className="mt-16 bg-gradient-to-tr from-card/80 to-card/95 border-t border-border/50 text-foreground">
            <div className="container mx-auto px-4 sm:px-6 py-12">
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 items-start">
                    {/* Site Brand */}
                    <div className="space-y-4">
                        <div className="flex items-center gap-3">
                            <div className="w-16 h-16 rounded-2xl to-primary/80 flex items-center justify-center shadow-none outline-none focus:outline-none">
                                <img
                                    src="https://cdn.builder.io/api/v1/image/assets%2F27abe1ecae0b4d49bbeb5b5b25259311%2F4ae0138321b540a787cab39e7f14b572?format=webp&width=800"
                                    alt="Aleppo CPC Icon"
                                    className="w-[160px] h-[160px] object-contain block"
                                />
                            </div>
                            <div>
                                <div className="text-lg font-bold">{SITE_NAME}</div>
                                <div className="text-sm text-muted-foreground">Competitive Programming Training</div>
                            </div>
                        </div>

                        <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">
                            Curated learning paths and sessions to help you master algorithms,
                            data-structures and competitive programming skills.
                        </p>
                    </div>

                    {/* Developer */}
                    <div className="md:col-span-1 lg:col-span-1">
                        <h4 className="text-sm font-semibold text-foreground mb-3">Developer</h4>
                        <div className="flex flex-col gap-3">
                            <div className="text-sm text-foreground font-medium">{DEV_NAME}</div>

                            <a
                                href={`mailto:${CONTACT_EMAIL}`}
                                className="inline-flex items-center gap-3 px-4 py-3 bg-card/60 rounded-lg border border-border/50 text-sm text-muted-foreground hover:bg-card hover:text-foreground transition w-full"
                            >
                                <Mail className="w-5 h-5 text-muted-foreground" />
                                <span>{CONTACT_EMAIL}</span>
                            </a>

                            <div className="flex items-center gap-3">
                                <a
                                    href={LINKEDIN_URL}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 px-3 py-2 bg-blue-50 rounded-lg border border-blue-100 text-sm text-blue-700 hover:bg-blue-100 transition"
                                    aria-label="LinkedIn"
                                >
                                    <Linkedin className="w-4 h-4" />
                                    <span>LinkedIn</span>
                                </a>

                                <a
                                    href={GITHUB_URL}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 px-3 py-2 bg-card/60 rounded-lg border border-border/50 text-sm text-muted-foreground hover:bg-card hover:text-foreground transition"
                                    aria-label="GitHub"
                                >
                                    <Github className="w-4 h-4" />
                                    <span>GitHub</span>
                                </a>
                                <a
                                    href={PORTFOLIO_URL}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 px-3 py-2 bg-card/60 rounded-lg border border-border/50 text-sm text-muted-foreground hover:bg-card hover:text-foreground transition"
                                    aria-label="Portfolio"
                                >
                                    <PersonStanding className="w-4 h-4" />
                                    <span>Portfolio</span>
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-sm font-semibold text-foreground mb-3">Quick Links</h4>
                        <ul className="space-y-2 text-sm">
                            <li>
                                <Link to="/" className="text-muted-foreground hover:text-foreground transition-colors">Beginner</Link>
                            </li>
                            <li>
                                <Link to="/intermediate" className="text-muted-foreground hover:text-foreground transition-colors">Intermediate</Link>
                            </li>
                            <li>
                                <Link to="/advanced" className="text-muted-foreground hover:text-foreground transition-colors">Advanced</Link>
                            </li>
                        </ul>
                    </div>

                    {/* Policies & Info */}
                    <div>
                        <h4 className="text-sm font-semibold text-foreground mb-3">Information</h4>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                            <li>All content provided for educational purposes.</li>
                            <li>© {year} {DEV_NAME}. All rights reserved.</li>
                            <li>
                                <Link to="/privacy" className="hover:text-foreground text-muted-foreground">Privacy Policy</Link>
                                <span className="mx-2">•</span>
                                <Link to="/terms" className="hover:text-foreground text-muted-foreground">Terms</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="border-t border-border/50">
                <div className="container mx-auto px-4 sm:px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-muted-foreground">
                    <span>                                         </span>
                    <span>Made with ❤️ by {DEV_NAME} • <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer" className="underline">LinkedIn</a></span>
                </div>
            </div>
        </footer>
    );
}
