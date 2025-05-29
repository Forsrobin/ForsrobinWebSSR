import { ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const webglAvailable = () => {
  try {
    const canvas = document.createElement('canvas')
    const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl')
    if (!gl) return false

    // Check for software rendering (indicates no hardware acceleration)
    const webglGl = gl as WebGLRenderingContext;
    const debugInfo = webglGl.getExtension('WEBGL_debug_renderer_info')
    if (debugInfo) {
      const renderer = webglGl.getParameter(debugInfo.UNMASKED_RENDERER_WEBGL)
      // Common software renderers
      const softwareRenderers = ['SwiftShader', 'Software', 'llvmpipe', 'ANGLE (Software)']
      return !softwareRenderers.some((sw) => renderer.includes(sw))
    }
    return true // Assume hardware acceleration if debug info is unavailable
  } catch (e) {
    return false
  }
}
