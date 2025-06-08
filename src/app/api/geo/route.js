import geoip from 'geoip-lite';
import path from 'path';
import fs from 'path';

// Initialize GeoIP (runs once when the serverless function boots)
let isGeoIPInitialized = false;

function initializeGeoIP() {
  if (isGeoIPInitialized) return;
  
  const dbPath = process.env.GEOIP_DB_PATH 
    ? path.join(process.cwd(), process.env.GEOIP_DB_PATH)
    : path.join(path.dirname(require.resolve('geoip-lite')), 'data');

  if (fs.existsSync(path.join(dbPath, 'geoip-city.dat'))) {
    try {
      geoip.startWatchingDataUpdate(dbPath);
      isGeoIPInitialized = true;
      console.log('GeoIP initialized successfully');
    } catch (error) {
      console.error('GeoIP initialization failed:', error);
    }
  } else {
    console.warn('GeoIP database files not found at:', dbPath);
  }
}

// Initialize during first invocation
initializeGeoIP();

export async function GET(request) {
  try {
    // Get client IP (considering Vercel's headers)
    const ip = request.headers.get('x-forwarded-for')?.split(',')[0].trim() || 
               request.ip || 
               '8.8.8.8';

    if (!isGeoIPInitialized) {
      return Response.json(
        { error: "GeoIP service unavailable", fallback: request.geo },
        { status: 503 }
      );
    }

    const geo = geoip.lookup(ip);
    
    // Merge with Vercel's edge geolocation if available
    const response = {
      ip,
      geoip: geo || null,
      vercelEdgeGeo: request.geo || null
    };

    return Response.json(response);

  } catch (error) {
    console.error('GeoIP lookup failed:', error);
    return Response.json(
      { error: "Geolocation failed", details: error.message },
      { status: 500 }
    );
  }
}