/**
 * Consentimento de cookies não essenciais.
 *
 * A escolha é guardada em cookie first-party em `.grupomauri.com.br`, então quem
 * aceita no site principal não é perguntado de novo na landing de FinOps.
 *
 * Enquanto não houver decisão, nada de analytics ou campanha é gravado: o
 * Consent Mode do Google entra negado por padrão no index.html, e a
 * atribuição só escreve o cookie depois do aceite.
 */

const COOKIE_NAME = 'gm_consent'
const COOKIE_MAX_AGE = 60 * 60 * 24 * 180 // 6 meses
const ROOT_DOMAIN = 'grupomauri.com.br'

export type ConsentState = 'granted' | 'denied' | 'unset'

type Listener = (state: ConsentState) => void

const listeners = new Set<Listener>()

function isSharedHost(host: string): boolean {
  return host === ROOT_DOMAIN || host.endsWith(`.${ROOT_DOMAIN}`)
}

export function readConsent(): ConsentState {
  if (typeof document === 'undefined') return 'unset'
  const row = document.cookie
    .split('; ')
    .find((c) => c.startsWith(`${COOKIE_NAME}=`))
  if (!row) return 'unset'
  const value = row.slice(COOKIE_NAME.length + 1)
  return value === 'granted' || value === 'denied' ? value : 'unset'
}

function writeConsent(state: Exclude<ConsentState, 'unset'>): void {
  const parts = [
    `${COOKIE_NAME}=${state}`,
    'path=/',
    `max-age=${COOKIE_MAX_AGE}`,
    'SameSite=Lax',
  ]
  if (isSharedHost(window.location.hostname)) parts.push(`domain=.${ROOT_DOMAIN}`)
  if (window.location.protocol === 'https:') parts.push('Secure')
  document.cookie = parts.join('; ')
}

/** Apaga o que já foi gravado quando a pessoa recusa depois de ter aceitado. */
function clearTrackingCookies(): void {
  const domains = isSharedHost(window.location.hostname)
    ? ['', `; domain=.${ROOT_DOMAIN}`]
    : ['']
  const names = document.cookie
    .split('; ')
    .map((c) => c.split('=')[0])
    .filter((n) => n === 'gm_attr' || n === '_ga' || n.startsWith('_ga_'))

  for (const name of names) {
    for (const domain of domains) {
      document.cookie = `${name}=; path=/; max-age=0${domain}`
    }
  }
}

function notify(state: ConsentState): void {
  listeners.forEach((fn) => fn(state))
}

/** Repassa a decisão ao Google Consent Mode. */
function syncGoogleConsent(state: Exclude<ConsentState, 'unset'>): void {
  const value = state === 'granted' ? 'granted' : 'denied'
  window.gtag?.('consent', 'update', {
    ad_storage: value,
    ad_user_data: value,
    ad_personalization: value,
    analytics_storage: value,
  })
}

export function setConsent(state: Exclude<ConsentState, 'unset'>): void {
  writeConsent(state)
  syncGoogleConsent(state)
  if (state === 'denied') clearTrackingCookies()
  notify(state)
}

export function onConsentChange(listener: Listener): () => void {
  listeners.add(listener)
  return () => listeners.delete(listener)
}

export function hasConsent(): boolean {
  return readConsent() === 'granted'
}
