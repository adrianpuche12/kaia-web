import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const buildId = searchParams.get('buildId');

  if (!buildId) {
    return NextResponse.json({ error: 'Build ID required' }, { status: 400 });
  }

  try {
    // Usar la API de Expo EAS para obtener los detalles del build
    const apiUrl = `https://api.expo.dev/v2/builds/${buildId}`;

    const response = await fetch(apiUrl, {
      headers: {
        'Accept': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error(`API returned ${response.status}`);
    }

    const buildData = await response.json();

    // El campo artifacts.buildUrl contiene la URL de descarga directa
    if (buildData.artifacts && buildData.artifacts.buildUrl) {
      return NextResponse.redirect(buildData.artifacts.buildUrl);
    }

    // Fallback: intentar construir la URL manualmente
    // Formato conocido de Expo: https://expo.dev/artifacts/eas-build-{buildId}/{filename}
    const fallbackUrl = `https://expo.dev/artifacts/eas-build-${buildId}/kaia-mobile.apk`;

    return NextResponse.redirect(fallbackUrl);

  } catch (error) {
    console.error('Error fetching build:', error);

    // Como último recurso, redirigir a la página de build
    return NextResponse.redirect(
      `https://expo.dev/accounts/adrianpuche/projects/mobile/builds/${buildId}`
    );
  }
}
