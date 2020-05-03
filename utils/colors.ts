export type SurfaceStyle = {
  strokeColor: string
  fillColor: string
}

const surfaceStyleA: SurfaceStyle = {
  strokeColor: '#7F0000',
  fillColor: '#7F0000'
}

const surfaceStyleB: SurfaceStyle = {
  strokeColor: '#7F0000',
  fillColor: '#970000'
}

const surfaceStyleC: SurfaceStyle = {
  strokeColor: '#7F0000',
  fillColor: '#C60000'
}

export function getGraphSeriesStyle(seriesLength: number) {
  switch (seriesLength) {
    case 1:
      return [surfaceStyleB]
    case 2:
      return [surfaceStyleA, surfaceStyleC]
    default:
      return [surfaceStyleA, surfaceStyleB, surfaceStyleC]
  }
}
