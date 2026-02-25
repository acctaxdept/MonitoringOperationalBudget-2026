/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Lock, Unlock, Building2, Factory, ExternalLink, ChevronRight, AlertCircle, Leaf, Droplets, Trees } from 'lucide-react';

interface LinkItem {
  name: string;
  url: string;
  pt: string;
  color: string;
  secondaryColor?: string;
  icon: React.ReactNode;
}

const HO_LINKS: LinkItem[] = [
  { 
    name: 'MOB HO APO', 
    pt: 'Anugerah Palm Oil', 
    url: 'https://script.google.com/macros/s/AKfycbyD9Uv9ZnhQqdxXFQOCWK14-EmO5QmrMrGfE1XIV4DYgHEY2ZmaNa5Ra2n1OtJqjPhJ/exec',
    color: 'bg-emerald-600',
    secondaryColor: 'text-emerald-700',
    icon: <Leaf className="w-5 h-5" />
  },
  { 
    name: 'MOB HO GON', 
    pt: 'Golden Oilindo Nusantara', 
    url: 'https://script.google.com/macros/s/AKfycbwR2gWd4rxc7WnOEcJh0uf1vQLBnT0xFSMkmGEHud-XbB4Ue_CFQfZ5B7p8zKQqr0X3/exec',
    color: 'bg-yellow-500',
    secondaryColor: 'text-yellow-700',
    icon: <Droplets className="w-5 h-5" />
  },
  { 
    name: 'MOB HO ASL', 
    pt: 'Anugerah Sawit Langgeng', 
    url: 'https://script.google.com/macros/s/AKfycbw-fZGR7HmpZxsZHkz-bfSpRC0uJrolRbYi0QxfhzCBzoLaGtslSSNONrrH3JKhKizVww/exec',
    color: 'bg-red-500',
    secondaryColor: 'text-red-700',
    icon: <Trees className="w-5 h-5" />
  },
];

const PKS_LINKS: LinkItem[] = [
  { 
    name: 'MOB PKS GON', 
    pt: 'Golden Oilindo Nusantara', 
    url: 'https://script.google.com/macros/s/AKfycbwbR0mMuIQtyVrLBtpOnIGtroQ69WljGFs1l4Qc9e_PvocgNRvBYdtkunFkWOJKI5jN-w/exec',
    color: 'bg-yellow-500',
    secondaryColor: 'text-yellow-700',
    icon: <Droplets className="w-5 h-5" />
  },
  { 
    name: 'MOB PKS APO', 
    pt: 'Anugerah Palm Oil', 
    url: 'https://script.google.com/macros/s/AKfycby_1i8Z2A1RkEh9A55a_qBJll-lMmlqxStHLXRkzOD2OyObjqlRZbIT0EuY_jnyw4NY/exec',
    color: 'bg-emerald-600',
    secondaryColor: 'text-emerald-700',
    icon: <Leaf className="w-5 h-5" />
  },
  { 
    name: 'MOB PKS ASL', 
    pt: 'Anugerah Sawit Langgeng', 
    url: 'https://script.google.com/macros/s/AKfycbxqRGJc3rHwRfNTZakxz-tQNTwXnrM7-rI9K6iympm8LHfPpF1EBgJxNzawbgb3jpoiuA/exec',
    color: 'bg-red-500',
    secondaryColor: 'text-red-700',
    icon: <Trees className="w-5 h-5" />
  },
];

// Default passwords
const PASSWORDS = {
  HO: 'HO123',
  PKS: 'PKS123'
};

export default function App() {
  const [activeSection, setActiveSection] = useState<'NONE' | 'HO' | 'PKS'>('NONE');
  const [password, setPassword] = useState('');
  const [isAuthorized, setIsAuthorized] = useState(false);
  const [error, setError] = useState('');

  const handleSectionSelect = (section: 'HO' | 'PKS') => {
    setActiveSection(section);
    setIsAuthorized(false);
    setPassword('');
    setError('');
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    const correctPassword = activeSection === 'HO' ? PASSWORDS.HO : PASSWORDS.PKS;
    
    if (password === correctPassword) {
      setIsAuthorized(true);
      setError('');
    } else {
      setError('Kata sandi salah. Silakan coba lagi.');
    }
  };

  const reset = () => {
    setActiveSection('NONE');
    setIsAuthorized(false);
    setPassword('');
    setError('');
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans flex flex-col items-center p-6 md:p-12 relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden z-0">
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 -right-24 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-24 left-1/4 w-64 h-64 bg-yellow-500/5 rounded-full blur-3xl" />
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-md z-10"
      >
        {/* Header */}
        <header className="text-center mb-12">
          <motion.div 
            whileHover={{ rotate: 5, scale: 1.05 }}
            className="inline-flex items-center justify-center w-20 h-20 bg-white rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100 mb-8"
          >
            <Building2 className="text-emerald-600 w-10 h-10" />
          </motion.div>
          <h1 className="text-3xl font-black tracking-tight text-slate-900 mb-3">MOB Portal</h1>
          <p className="text-slate-500 text-sm font-medium italic">
            Plan Smart. Spend Right. Perform Better
          </p>
        </header>

        <AnimatePresence mode="wait">
          {activeSection === 'NONE' ? (
            <motion.div
              key="selection"
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              className="space-y-5"
            >
              <button
                onClick={() => handleSectionSelect('HO')}
                className="w-full group bg-white/80 backdrop-blur-sm p-7 rounded-[2rem] border border-slate-200 shadow-sm hover:shadow-xl hover:shadow-emerald-500/10 hover:border-emerald-500/50 transition-all flex items-center justify-between"
              >
                <div className="flex items-center gap-5">
                  <div className="w-14 h-14 bg-slate-50 rounded-2xl flex items-center justify-center group-hover:bg-emerald-500 group-hover:text-white transition-all duration-300 shadow-inner">
                    <Building2 className="w-7 h-7" />
                  </div>
                  <div className="text-left">
                    <h2 className="font-bold text-xl text-slate-800">Head Office</h2>
                    <p className="text-slate-400 text-xs font-bold uppercase tracking-widest mt-0.5">Secure Access</p>
                  </div>
                </div>
                <div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center group-hover:bg-emerald-500 group-hover:text-white transition-all">
                  <ChevronRight className="w-5 h-5 transition-transform group-hover:translate-x-0.5" />
                </div>
              </button>

              <button
                onClick={() => handleSectionSelect('PKS')}
                className="w-full group bg-white/80 backdrop-blur-sm p-7 rounded-[2rem] border border-slate-200 shadow-sm hover:shadow-xl hover:shadow-blue-500/10 hover:border-blue-500/50 transition-all flex items-center justify-between"
              >
                <div className="flex items-center gap-5">
                  <div className="w-14 h-14 bg-slate-50 rounded-2xl flex items-center justify-center group-hover:bg-blue-500 group-hover:text-white transition-all duration-300 shadow-inner">
                    <Factory className="w-7 h-7" />
                  </div>
                  <div className="text-left">
                    <h2 className="font-bold text-xl text-slate-800">Pabrik Kelapa Sawit</h2>
                    <p className="text-slate-400 text-xs font-bold uppercase tracking-widest mt-0.5">Secure Access</p>
                  </div>
                </div>
                <div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center group-hover:bg-blue-500 group-hover:text-white transition-all">
                  <ChevronRight className="w-5 h-5 transition-transform group-hover:translate-x-0.5" />
                </div>
              </button>
            </motion.div>
          ) : !isAuthorized ? (
            <motion.div
              key="login"
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -10 }}
              className="bg-white/90 backdrop-blur-md p-10 rounded-[2.5rem] border border-slate-200 shadow-2xl shadow-slate-200/50"
            >
              <div className="flex items-center gap-4 mb-10">
                <button onClick={reset} className="p-3 hover:bg-slate-100 rounded-2xl transition-colors">
                  <ChevronRight className="rotate-180 w-5 h-5 text-slate-400" />
                </button>
                <h2 className="font-black text-2xl text-slate-800 tracking-tight">Access {activeSection}</h2>
              </div>
              
              <form onSubmit={handleLogin} className="space-y-8">
                <div className="space-y-3">
                  <label className="text-xs font-black text-slate-400 uppercase tracking-[0.2em] ml-1">
                    Security Key
                  </label>
                  <div className="relative group">
                    <input
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="••••••••"
                      className="w-full bg-slate-50 border-2 border-slate-100 rounded-2xl px-5 py-4 text-lg focus:outline-none focus:ring-4 focus:ring-emerald-500/10 focus:border-emerald-500 transition-all placeholder:text-slate-200"
                      autoFocus
                    />
                    <Lock className="absolute right-5 top-1/2 -translate-y-1/2 text-slate-300 w-6 h-6 group-focus-within:text-emerald-500 transition-colors" />
                  </div>
                </div>

                {error && (
                  <motion.div 
                    initial={{ opacity: 0, y: -5 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center gap-3 text-red-600 text-sm font-bold bg-red-50 p-4 rounded-2xl border border-red-100"
                  >
                    <AlertCircle className="w-5 h-5 shrink-0" />
                    <span>{error}</span>
                  </motion.div>
                )}

                <button
                  type="submit"
                  className="w-full bg-slate-900 text-white font-black py-5 rounded-2xl hover:bg-slate-800 active:scale-[0.98] transition-all shadow-xl shadow-slate-900/20 text-lg tracking-tight"
                >
                  Verify Access
                </button>
              </form>
            </motion.div>
          ) : (
            <motion.div
              key="links"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-4"
            >
              <div className="flex items-center justify-between mb-10 px-2">
                <div className="flex items-center gap-4">
                  <button onClick={reset} className="p-3 bg-white hover:bg-slate-50 rounded-2xl shadow-sm border border-slate-100 transition-all">
                    <ChevronRight className="rotate-180 w-5 h-5 text-slate-400" />
                  </button>
                  <h2 className="font-black text-2xl text-slate-800 tracking-tight">
                    {activeSection} Links
                  </h2>
                </div>
                <div className="flex items-center gap-2 text-emerald-600 bg-emerald-50 px-4 py-2 rounded-2xl text-xs font-black border border-emerald-100 shadow-sm">
                  <Unlock className="w-4 h-4" />
                  SECURE
                </div>
              </div>

              <div className="grid gap-4">
                {(activeSection === 'HO' ? HO_LINKS : PKS_LINKS).map((link, idx) => (
                  <motion.a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.08 }}
                    className="group bg-white/80 backdrop-blur-sm p-6 rounded-[2rem] border border-slate-100 shadow-sm hover:shadow-2xl hover:shadow-slate-200 hover:border-emerald-500/30 transition-all flex items-center justify-between"
                  >
                    <div className="flex items-center gap-5 flex-1">
                      <div className={`w-14 h-14 ${link.color} rounded-2xl flex items-center justify-center text-white shadow-lg shadow-current/20 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                        {link.icon}
                      </div>
                      <div className="flex-1">
                        <h3 className="font-black text-slate-800 text-lg group-hover:text-emerald-600 transition-colors leading-tight">{link.name}</h3>
                        <p className={`text-[10px] font-black uppercase tracking-[0.15em] mt-1 ${link.secondaryColor || 'text-slate-400'}`}>
                          {link.pt}
                        </p>
                      </div>
                    </div>
                    <div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center group-hover:bg-emerald-500 group-hover:text-white transition-all">
                      <ExternalLink className="w-4 h-4" />
                    </div>
                  </motion.a>
                ))}
              </div>

              <button
                onClick={reset}
                className="w-full mt-12 text-slate-300 hover:text-slate-900 text-xs font-black uppercase tracking-[0.3em] transition-colors"
              >
                Return to Menu
              </button>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Footer */}
        <footer className="mt-24 text-center pb-12">
          <p className="text-slate-300 text-[10px] font-black uppercase tracking-[0.4em]">
            Monitoring Operational Budget
          </p>
        </footer>
      </motion.div>
    </div>
  );
}
