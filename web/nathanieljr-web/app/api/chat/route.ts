import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    // Read payload (message to be sent) from NateBot
    const body = await request.json();
    
    // Forward payload to FastAPI backend (defaults to standard docker-compose hostname)
    const apiUrl = process.env.API_URL || 'http://chatbot:8000/chatbot';
    const fastApiResponse = await fetch(apiUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body)
    });

    const data = await fastApiResponse.json();

    // Return response from FastAPI to NateBot
    return NextResponse.json(data);
    
  } catch (error) {
    return NextResponse.json({ error: "Failed communicating with backend" }, { status: 500 });
  }
}