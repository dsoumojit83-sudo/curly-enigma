'use client';

import { createContext, useContext, useState, useEffect } from 'react';
import { supabase } from '@/lib/supabase';

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isGuest, setIsGuest] = useState(false);

  useEffect(() => {
    // Check for existing session
    async function checkSession() {
      if (!supabase) {
        // No Supabase configured — guest mode
        setIsGuest(true);
        setLoading(false);
        return;
      }
      try {
        const { data: { session } } = await supabase.auth.getSession();
        setUser(session?.user ?? null);
        setIsGuest(!session?.user);
      } catch {
        setIsGuest(true);
      }
      setLoading(false);
    }

    checkSession();

    // Listen for auth changes
    if (supabase) {
      const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
        setUser(session?.user ?? null);
        setIsGuest(!session?.user);
      });
      return () => subscription.unsubscribe();
    }
  }, []);

  const signInWithGoogle = async () => {
    if (!supabase) return { error: 'Supabase not configured' };
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: 'google',
      options: { redirectTo: window.location.origin },
    });
    return { data, error };
  };

  const signInWithEmail = async (email, password) => {
    if (!supabase) return { error: 'Supabase not configured' };
    const { data, error } = await supabase.auth.signInWithPassword({ email, password });
    return { data, error };
  };

  const signUpWithEmail = async (email, password, name) => {
    if (!supabase) return { error: 'Supabase not configured' };
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: { data: { full_name: name } },
    });
    return { data, error };
  };

  const signOut = async () => {
    if (supabase) await supabase.auth.signOut();
    setUser(null);
    setIsGuest(true);
  };

  const continueAsGuest = () => {
    setIsGuest(true);
    setLoading(false);
  };

  return (
    <AuthContext.Provider value={{
      user,
      loading,
      isGuest,
      signInWithGoogle,
      signInWithEmail,
      signUpWithEmail,
      signOut,
      continueAsGuest,
    }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error('useAuth must be used within AuthProvider');
  return ctx;
}
