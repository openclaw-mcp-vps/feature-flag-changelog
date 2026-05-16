export default function Home() {
  const faqs = [
    {
      q: 'Which feature flag services are supported?',
      a: 'FlagLog connects to LaunchDarkly, Split, Unleash, and any service with a webhook or REST API. Setup takes under 5 minutes.'
    },
    {
      q: 'How does the changelog generation work?',
      a: 'When a flag is toggled or modified, FlagLog captures the event and uses a template engine to produce a human-readable entry — no manual writing needed.'
    },
    {
      q: 'Can I publish changelogs to my own site?',
      a: 'Yes. You get a hosted public changelog page and a JSON/RSS feed you can embed anywhere, including Notion, Confluence, or your own docs.'
    }
  ]

  return (
    <main className="min-h-screen flex flex-col items-center px-4 py-16">
      {/* Hero */}
      <section className="max-w-2xl w-full text-center mb-20">
        <span className="inline-block mb-4 px-3 py-1 rounded-full bg-[#161b22] border border-[#30363d] text-xs text-[#58a6ff] uppercase tracking-widest">
          Developer Tools
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Automatic changelog from{' '}
          <span className="text-[#58a6ff]">feature flag changes</span>
        </h1>
        <p className="text-lg text-[#8b949e] mb-8">
          Connect LaunchDarkly, Split, or any flag service. Every toggle becomes a
          polished, user-facing changelog entry — automatically.
        </p>
        <a
          href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || '#'}
          className="inline-block px-8 py-3 rounded-lg bg-[#58a6ff] text-[#0d1117] font-semibold text-base hover:bg-[#79b8ff] transition-colors"
        >
          Get started — $13/mo
        </a>
        <p className="mt-3 text-xs text-[#6e7681]">No credit card required for 7-day trial.</p>
      </section>

      {/* Feature highlights */}
      <section className="max-w-2xl w-full grid sm:grid-cols-3 gap-4 mb-20">
        {[
          { icon: '⚡', title: 'Real-time monitoring', desc: 'Webhooks and polling keep you in sync instantly.' },
          { icon: '✍️', title: 'Auto-written entries', desc: 'Human-readable copy generated for every flag event.' },
          { icon: '📡', title: 'Publish anywhere', desc: 'Hosted page, JSON feed, or embed in your docs.' }
        ].map((f) => (
          <div key={f.title} className="rounded-xl border border-[#30363d] bg-[#161b22] p-5">
            <div className="text-2xl mb-2">{f.icon}</div>
            <div className="font-semibold text-white text-sm mb-1">{f.title}</div>
            <div className="text-xs text-[#8b949e]">{f.desc}</div>
          </div>
        ))}
      </section>

      {/* Pricing */}
      <section className="max-w-sm w-full mb-20" id="pricing">
        <h2 className="text-2xl font-bold text-white text-center mb-6">Simple pricing</h2>
        <div className="rounded-2xl border border-[#58a6ff] bg-[#161b22] p-8 flex flex-col items-center">
          <div className="text-4xl font-bold text-white mb-1">$13<span className="text-lg font-normal text-[#8b949e]">/mo</span></div>
          <div className="text-xs text-[#8b949e] mb-6">Everything included. Cancel anytime.</div>
          <ul className="w-full space-y-3 mb-8 text-sm">
            {[
              'Unlimited flag services connected',
              'Auto-generated changelog entries',
              'Public hosted changelog page',
              'JSON & RSS feed',
              'Slack & email notifications',
              'Priority support'
            ].map((item) => (
              <li key={item} className="flex items-center gap-2">
                <span className="text-[#58a6ff]">✓</span>
                <span className="text-[#c9d1d9]">{item}</span>
              </li>
            ))}
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || '#'}
            className="w-full text-center px-6 py-3 rounded-lg bg-[#58a6ff] text-[#0d1117] font-semibold hover:bg-[#79b8ff] transition-colors"
          >
            Start free trial
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl w-full mb-16" id="faq">
        <h2 className="text-2xl font-bold text-white text-center mb-8">FAQ</h2>
        <div className="space-y-4">
          {faqs.map((faq) => (
            <div key={faq.q} className="rounded-xl border border-[#30363d] bg-[#161b22] p-6">
              <div className="font-semibold text-white mb-2">{faq.q}</div>
              <div className="text-sm text-[#8b949e]">{faq.a}</div>
            </div>
          ))}
        </div>
      </section>

      <footer className="text-xs text-[#6e7681] text-center">
        &copy; {new Date().getFullYear()} FlagLog. Built for product teams who ship fast.
      </footer>
    </main>
  )
}
