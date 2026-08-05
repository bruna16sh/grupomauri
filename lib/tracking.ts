type GtagFn = (...args: unknown[]) => void

declare global {
  interface Window {
    gtag?: GtagFn
  }
}

/** Hosts of the Grupo Mauri ecosystem. Links to these keep campaign params. */
const ECOSYSTEM_HOSTS = [
  'qorion.tech',
  'finops.qorion.tech',
  'grupomauri.com.br',
  'estrategia.grupomauri.com.br',
]

const CAMPAIGN_KEYS = [
  'utm_source',
  'utm_medium',
  'utm_campaign',
  'utm_term',
  'utm_content',
  'utm_id',
  'gclid',
]

function isEcosystemHost(host: string): boolean {
  const bare = host.replace(/^www\./, '')
  return ECOSYSTEM_HOSTS.some((h) => bare === h || bare.endsWith(`.${h}`))
}

/**
 * Carries utm_* / gclid to the destination when the visitor moves between
 * ecosystem domains. GA4 cross-domain measurement stitches the session via
 * `_gl`; this keeps the campaign readable on the destination as well.
 *
 * Rewriting at click time (rather than patching every anchor upfront) keeps
 * this correct for links rendered after the initial paint.
 */
function decorateEcosystemLink(anchor: HTMLAnchorElement) {
  const current = new URLSearchParams(window.location.search)
  const carried = CAMPAIGN_KEYS.filter((k) => current.has(k))
  if (carried.length === 0) return

  let url: URL
  try {
    url = new URL(anchor.href)
  } catch {
    return
  }
  if (!isEcosystemHost(url.hostname)) return

  carried.forEach((k) => {
    if (!url.searchParams.has(k)) url.searchParams.set(k, current.get(k) as string)
  })
  anchor.href = url.toString()
}

/** Events inferred from the link itself, so contact links need no markup. */
function implicitEventName(anchor: HTMLAnchorElement): string | undefined {
  const href = anchor.getAttribute('href') ?? ''
  if (href.startsWith('mailto:')) return 'email_click'
  if (/^https?:\/\/(wa\.me|api\.whatsapp\.com)/.test(href)) return 'whatsapp_click'
  return undefined
}

function handleClick(event: MouseEvent) {
  const target = event.target
  if (!(target instanceof Element)) return

  const anchor = target.closest('a')
  if (anchor instanceof HTMLAnchorElement) decorateEcosystemLink(anchor)

  const el = target.closest<HTMLElement>('[data-analytics]')
  const name =
    el?.dataset.analytics ??
    (anchor instanceof HTMLAnchorElement ? implicitEventName(anchor) : undefined)
  if (!name) return

  const source = el ?? anchor
  window.gtag?.('event', name, {
    link_url: source instanceof HTMLAnchorElement ? source.href : undefined,
    link_text: source?.textContent?.trim().slice(0, 100),
  })
}

export function initTracking() {
  document.addEventListener('click', handleClick, { capture: true })
}
