// app/api/get-country/route.ts
export async function POST(req) {
    const forwarded = req.headers.get("x-forwarded-for");
  const ip = forwarded?.split(",")[0] || "127.0.0.1";

  // Localhost fallback
  const isLocal = ip === "::1" || ip === "127.0.0.1";
  const lookUpIp = isLocal ? "134.201.250.155" : ip;

  console.log(lookUpIp)

  const API_KEY = process.env.IPSTACK_API_KEY;

  try {
    const response = await fetch(
      `http://api.ipstack.com/${lookUpIp}?access_key=${API_KEY}`
    );

    const data = await response.json();

    if (!response.ok || !data.country_name) {
      return new Response(JSON.stringify({ error: "Unable to get location",success:false }), {
        status: 500,
      });
    }

    return new Response(
      JSON.stringify({
        country: data.country_name,
        country_code: data.country_code,
        lookUpIp,
        success:true,
      }),
      { status: 200 }
    );
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ error: "Something went wrong",success:false }), {
      status: 500,
    });
  }
}
