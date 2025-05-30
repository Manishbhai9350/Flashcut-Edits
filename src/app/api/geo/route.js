import { NextResponse } from "next/server";

export async function GET(request) {
  // Get IP address from request
  const ip = request.headers.get('x-forwarded-for') || '127.0.0.1';
  
  try {
    // Use a geolocation service (example with ipinfo.io)
    const response = await fetch(`https://ipinfo.io/${ip}/json?token=${process.env.IPINFO_API_KEY}`);
    const data = await response.json();

    console.log(data);
    
    return NextResponse.json({
      country: data.country || 'US',
      locale: data.country === 'IN' ? 'en-IN' : 'en-US'
    });
  } catch (error) {
    console.error('Geolocation error:', error);
    return NextResponse.json({
      country: 'US',
      locale: 'en-US'
    });
  }
}
