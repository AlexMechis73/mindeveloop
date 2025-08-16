// app/api/newsletter/route.ts
import { NextResponse } from 'next/server';
import { supabase } from '@/lib/supabaseClient';

export async function POST(request: Request) {
  try {
    // Ora ci aspettiamo sia l'email che la sourcePage
    const { email, sourcePage } = await request.json();

    if (!email || !email.includes('@')) {
      return NextResponse.json({ success: false, message: 'Indirizzo email non valido.' }, { status: 400 });
    }

    const { data, error } = await supabase
      .from('subscribers')
      .insert([
        // Inseriamo entrambi i campi
        { email: email, source_page: sourcePage || 'Sconosciuta' },
      ])
      .select();

    if (error) {
      console.error('Errore Supabase:', error);
      if (error.code === '23505') {
        return NextResponse.json({ success: false, message: 'Questa email è già iscritta.' }, { status: 409 });
      }
      throw error;
    }
    
    return NextResponse.json({ success: true, message: 'Iscrizione avvenuta con successo!' });

  } catch (error) {
    console.error('Errore API Newsletter:', error);
    return NextResponse.json({ success: false, message: 'Errore interno del server.' }, { status: 500 });
  }
}