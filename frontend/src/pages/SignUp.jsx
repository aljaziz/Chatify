import React, { useState } from "react";
import BorderAnimatedContainer from "../components/BorderAnimatedContainer";
import { User, Mail, Lock, Loader, MessageCircle } from "lucide-react";
import { useAuthStore } from "../store/useAuthStore.js";
import { Link } from "react-router";

function SignUp() {
    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        password: "",
    });
    const { signup, isSigningUp } = useAuthStore();

    const handleSubmit = (e) => {
        e.preventDefault();
        signup(formData);
    };
    return (
        <div className="w-full flex items-center justify-center p-4 bg-slate-900">
            <div className="relative w-full max-w-6xl md:h-[800px] h-[650px]">
                <BorderAnimatedContainer>
                    <div className="w-full flex flex-col md:flex-row">
                        {/* FORM CLOUMN - LEFT SIDE */}
                        <div className="md:w-1/2 p-8 flex items-center justify-center md:border-r border-slate-600/30">
                            <div className="w-full max-w-md">
                                {/* HEADING TEXT */}
                                <div className="text-center mb-8">
                                    <MessageCircle className="w-12 h-12 mx-auto text-slate-400 mb-4" />
                                    <h2 className="text-2xl font-bold text-slate-200 mb-2">
                                        Create Account
                                    </h2>
                                    <p className="text-slate-400">
                                        Sign up for a new account
                                    </p>
                                </div>

                                {/* FORM */}
                                <form
                                    onSubmit={handleSubmit}
                                    className="space-y-6"
                                >
                                    {/* FULL NAME */}
                                    <div>
                                        <label className="block text-sm font-medium text-slate-300 mb-2">
                                            Full Name
                                        </label>
                                        <div className="relative">
                                            <User className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />

                                            <input
                                                type="text"
                                                value={formData.fullName}
                                                onChange={(e) =>
                                                    setFormData({
                                                        ...formData,
                                                        fullName:
                                                            e.target.value,
                                                    })
                                                }
                                                className="w-full bg-slate-800/50 border border-slate-700 rounded-lg py-2 pl-10 pr-4 text-slate-200 placeholder-slate-400 focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                                                placeholder="John Doe"
                                            />
                                        </div>
                                    </div>

                                    {/* EMAIL INPUT */}
                                    <div>
                                        <label className="block text-sm font-medium text-slate-300 mb-2">
                                            Email
                                        </label>
                                        <div className="relative">
                                            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />

                                            <input
                                                type="email"
                                                value={formData.email}
                                                onChange={(e) =>
                                                    setFormData({
                                                        ...formData,
                                                        email: e.target.value,
                                                    })
                                                }
                                                className="w-full bg-slate-800/50 border border-slate-700 rounded-lg py-2 pl-10 pr-4 text-slate-200 placeholder-slate-400 focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                                                placeholder="johndoe@gmail.com"
                                            />
                                        </div>
                                    </div>

                                    {/* PASSWORD INPUT */}
                                    <div>
                                        <label className="block text-sm font-medium text-slate-300 mb-2">
                                            Password
                                        </label>
                                        <div className="relative">
                                            <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />

                                            <input
                                                type="password"
                                                value={formData.password}
                                                onChange={(e) =>
                                                    setFormData({
                                                        ...formData,
                                                        password:
                                                            e.target.value,
                                                    })
                                                }
                                                className="w-full bg-slate-800/50 border border-slate-700 rounded-lg py-2 pl-10 pr-4 text-slate-200 placeholder-slate-400 focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                                                placeholder="Enter your password"
                                            />
                                        </div>
                                    </div>

                                    {/* SUBMIT BUTTON */}
                                    <button
                                        className="w-full bg-cyan-500 text-white rounded-lg py-2.5 font-medium
  hover:bg-cyan-600 focus:ring-2 focus:ring-cyan-500"
                                        type="submit"
                                        disabled={isSigningUp}
                                    >
                                        {isSigningUp ? (
                                            <Loader className="w-full h-5 animate-spin text-center" />
                                        ) : (
                                            "Create Account"
                                        )}
                                    </button>
                                </form>

                                <div className="mt-6 text-center">
                                    <Link
                                        to="/login"
                                        className="px-4 py-2 inline-block bg-cyan-500/10 rounded-lg text-cyan-400
  hover:text-cyan-500 text-sm transition-colors"
                                    >
                                        Already have an account? Login
                                    </Link>
                                </div>
                            </div>
                        </div>

                        {/* FORM ILLUSTRATION - RIGHT SIDE */}
                        <div className="hidden md:w-1/2 md:flex items-center justify-center p-6 bg-gradient-to-bl from-slate-800/20 to-transparent">
                            <div>
                                <img
                                    src="/signup.png"
                                    alt="People using mobile devices"
                                    className="w-full h-auto object-contain"
                                />
                                <div className="mt-6 text-center">
                                    <h3 className="text-xl font-medium text-cyan-400">
                                        Start Your Journey Today
                                    </h3>

                                    <div className="mt-4 flex justify-center gap-4">
                                        <span className="inline-flex items-center px-3 py-1 text-xs font-medium rounded-full bg-cyan-500/20 text-cyan-300">
                                            Free
                                        </span>
                                        <span className="inline-flex items-center px-3 py-1 text-xs font-medium rounded-full bg-cyan-500/20 text-cyan-300">
                                            Easy Setup
                                        </span>
                                        <span className="inline-flex items-center px-3 py-1 text-xs font-medium rounded-full bg-cyan-500/20 text-cyan-300">
                                            Private
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </BorderAnimatedContainer>
            </div>
        </div>
    );
}

export default SignUp;
