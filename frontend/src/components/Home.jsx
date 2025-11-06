import React, { useState } from "react";
import { Sparkles, Target, TrendingUp, CheckCircle, ArrowRight, FileText, Zap, Shield, Users, ChevronDown } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function Home() {
    const [email, setEmail] = useState("");
    const navigate = useNavigate();
    const features = [
        {
            icon: <Target className="w-8 h-8" />,
            title: "Smart Matching",
            description: "AI-powered analysis matches your resume against job descriptions with precision"
        },
        {
            icon: <Zap className="w-8 h-8" />,
            title: "Instant Results",
            description: "Get detailed feedback in seconds, not hours. Know exactly what to improve"
        },
        {
            icon: <TrendingUp className="w-8 h-8" />,
            title: "Score Optimization",
            description: "Track your match score and improve it with actionable suggestions"
        },
        {
            icon: <Shield className="w-8 h-8" />,
            title: "ATS-Friendly",
            description: "Ensure your resume passes Applicant Tracking Systems with confidence"
        }
    ];

    const steps = [
        { number: "01", title: "Upload Resume", desc: "Drop your PDF resume into our analyzer" },
        { number: "02", title: "Add Job Details", desc: "Paste the job description you're targeting" },
        { number: "03", title: "Get Insights", desc: "Receive a detailed analysis with improvement tips" },
        { number: "04", title: "Optimize & Apply", desc: "Refine your resume and land that interview" }
    ];

    const stats = [
        { value: "95%", label: "Match Rate Improvement" },
        { value: "10k+", label: "Resumes Analyzed" },
        { value: "<30s", label: "Average Analysis Time" },
        { value: "4.9★", label: "User Rating" }
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
            {/* Hero Section */}
            <div className="relative overflow-hidden">
                {/* Animated background elements */}
                <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute w-96 h-96 bg-purple-500 rounded-full filter blur-3xl opacity-20 -top-48 -left-48 animate-pulse"></div>
                    <div className="absolute w-96 h-96 bg-blue-500 rounded-full filter blur-3xl opacity-20 top-1/3 -right-48 animate-pulse" style={{animationDelay: '1s'}}></div>
                    <div className="absolute w-96 h-96 bg-pink-500 rounded-full filter blur-3xl opacity-20 bottom-0 left-1/3 animate-pulse" style={{animationDelay: '2s'}}></div>
                </div>

                <nav className="relative z-10 px-6 py-6 max-w-7xl mx-auto flex justify-between items-center">
                    <div className="flex items-center space-x-2">
                        <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                            <Sparkles className="w-6 h-6 text-white" />
                        </div>
                        <span className="text-2xl font-bold text-white">ResumeAI</span>
                    </div>
                    <div className="flex items-center space-x-2"><button onClick = {()=> navigate('/sigup')} className="px-6 py-2 bg-white text-purple-900 rounded-full font-semibold hover:bg-gray-100 transition">
                        Sign In
                    </button>
                    <button onClick = {()=> navigate('/login')} className="px-6 py-2 bg-white text-purple-900 rounded-full font-semibold hover:bg-gray-100 transition">
                        Login
                    </button></div>
                    
                </nav>

                <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 text-center">
                    <div className="inline-flex items-center space-x-2 bg-purple-500/20 backdrop-blur-sm border border-purple-400/30 rounded-full px-4 py-2 mb-8">
                        <Sparkles className="w-4 h-4 text-purple-300" />
                        <span className="text-purple-200 text-sm font-medium">AI-Powered Resume Analysis</span>
                    </div>

                    <h1 className="text-6xl md:text-7xl font-bold text-white mb-6 leading-tight">
                        Land Your Dream Job<br />
                        <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
                            With Perfect Resume
                        </span>
                    </h1>

                    <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
                        Stop guessing what recruiters want. Our AI analyzes your resume against any job description and tells you exactly how to improve your chances.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
                        <button onClick={()=>navigate('/dashboard')} className="group px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full font-semibold text-lg hover:shadow-2xl hover:shadow-purple-500/50 transition transform hover:scale-105 flex items-center space-x-2">
                            <span>Analyze Your Resume</span>
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition" />
                        </button>
                        <button className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white rounded-full font-semibold text-lg border border-white/20 hover:bg-white/20 transition">
                            Watch Demo
                        </button>
                    </div>

                    {/* Stats */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
                        {stats.map((stat, i) => (
                            <div key={i} className="text-center">
                                <div className="text-4xl font-bold text-white mb-2">{stat.value}</div>
                                <div className="text-gray-400 text-sm">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="relative z-10 text-center pb-12">
                    <ChevronDown className="w-8 h-8 text-white/50 mx-auto animate-bounce" />
                </div>
            </div>

            {/* Features Section */}
            <div className="relative bg-white py-24 px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                            Why Choose ResumeAI?
                        </h2>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                            Powered by advanced AI to give you the competitive edge you need
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {features.map((feature, i) => (
                            <div key={i} className="group p-6 bg-gradient-to-br from-gray-50 to-white rounded-2xl border border-gray-200 hover:border-purple-300 hover:shadow-xl transition transform hover:-translate-y-1">
                                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center text-white mb-4 group-hover:scale-110 transition">
                                    {feature.icon}
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                                <p className="text-gray-600">{feature.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* How It Works */}
            <div className="relative bg-gradient-to-br from-purple-900 to-slate-900 py-24 px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                            How It Works
                        </h2>
                        <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                            Four simple steps to a better resume
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {steps.map((step, i) => (
                            <div key={i} className="relative">
                                <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 hover:bg-white/20 transition">
                                    <div className="text-6xl font-bold text-purple-400/30 mb-4">{step.number}</div>
                                    <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
                                    <p className="text-gray-300">{step.desc}</p>
                                </div>
                                {i < steps.length - 1 && (
                                    <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                                        <ArrowRight className="w-6 h-6 text-purple-400" />
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Social Proof */}
            <div className="relative bg-white py-24 px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                            Trusted by Job Seekers
                        </h2>
                        <p className="text-xl text-gray-600">
                            Join thousands who've landed their dream jobs
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            { name: "Sarah Chen", role: "Software Engineer", company: "Google", text: "Increased my interview rate by 300%. The AI suggestions were spot-on!" },
                            { name: "Michael Ross", role: "Product Manager", company: "Microsoft", text: "Finally understood what recruiters were looking for. Got 3 offers in 2 weeks!" },
                            { name: "Emily Rodriguez", role: "Data Scientist", company: "Amazon", text: "The keyword analysis helped me pass ATS filters I was stuck on before." }
                        ].map((testimonial, i) => (
                            <div key={i} className="bg-gradient-to-br from-purple-50 to-white p-8 rounded-2xl border border-purple-100 hover:shadow-xl transition">
                                <div className="flex items-center mb-4">
                                    {[...Array(5)].map((_, j) => (
                                        <span key={j} className="text-yellow-400 text-xl">★</span>
                                    ))}
                                </div>
                                <p className="text-gray-700 mb-6 italic">"{testimonial.text}"</p>
                                <div className="flex items-center space-x-3">
                                    <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white font-bold">
                                        {testimonial.name[0]}
                                    </div>
                                    <div>
                                        <div className="font-bold text-gray-900">{testimonial.name}</div>
                                        <div className="text-sm text-gray-600">{testimonial.role} at {testimonial.company}</div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* CTA Section */}
            <div className="relative bg-gradient-to-br from-purple-900 via-pink-900 to-purple-900 py-24 px-6">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                        Ready to Transform Your Resume?
                    </h2>
                    <p className="text-xl text-gray-200 mb-12">
                        Start optimizing today and see results in minutes
                    </p>
                    
                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
                        <input 
                            type="email"
                            placeholder="Enter your email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="px-6 py-4 rounded-full w-full sm:w-96 focus:outline-none focus:ring-2 focus:ring-purple-400"
                        />
                        <button className="px-8 py-4 bg-white text-purple-900 rounded-full font-semibold hover:bg-gray-100 transition transform hover:scale-105 whitespace-nowrap">
                            Get Started Free
                        </button>
                    </div>
                    
                    <div className="flex items-center justify-center space-x-6 text-gray-300 text-sm">
                        <div className="flex items-center space-x-2">
                            <CheckCircle className="w-5 h-5" />
                            <span>No credit card required</span>
                        </div>
                        <div className="flex items-center space-x-2">
                            <CheckCircle className="w-5 h-5" />
                            <span>3 free analyses</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Footer */}
            <footer className="bg-slate-900 py-12 px-6 border-t border-white/10">
                <div className="max-w-7xl mx-auto">
                    <div className="grid md:grid-cols-4 gap-8 mb-8">
                        <div>
                            <div className="flex items-center space-x-2 mb-4">
                                <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                                    <Sparkles className="w-5 h-5 text-white" />
                                </div>
                                <span className="text-xl font-bold text-white">ResumeAI</span>
                            </div>
                            <p className="text-gray-400 text-sm">
                                AI-powered resume optimization for job seekers worldwide.
                            </p>
                        </div>
                        <div>
                            <h4 className="text-white font-semibold mb-4">Product</h4>
                            <ul className="space-y-2 text-gray-400 text-sm">
                                <li className="hover:text-white cursor-pointer transition">Features</li>
                                <li className="hover:text-white cursor-pointer transition">Pricing</li>
                                <li className="hover:text-white cursor-pointer transition">API</li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="text-white font-semibold mb-4">Company</h4>
                            <ul className="space-y-2 text-gray-400 text-sm">
                                <li className="hover:text-white cursor-pointer transition">About</li>
                                <li className="hover:text-white cursor-pointer transition">Blog</li>
                                <li className="hover:text-white cursor-pointer transition">Careers</li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="text-white font-semibold mb-4">Legal</h4>
                            <ul className="space-y-2 text-gray-400 text-sm">
                                <li className="hover:text-white cursor-pointer transition">Privacy</li>
                                <li className="hover:text-white cursor-pointer transition">Terms</li>
                                <li className="hover:text-white cursor-pointer transition">Security</li>
                            </ul>
                        </div>
                    </div>
                    <div className="border-t border-white/10 pt-8 text-center text-gray-400 text-sm">
                        © 2025 ResumeAI. All rights reserved.
                    </div>
                </div>
            </footer>
        </div>
    );
}