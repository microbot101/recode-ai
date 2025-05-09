import styles from '../../styles/Timeline.module.css';

export default function Timeline() {
  return (
    <section id="roadmap" className={styles['design-section']}>
      <h1>RoadMap</h1>
      <div className={styles.timeline}>

        {/* Q2 2025 — Left Side */}
        <div className={styles['timeline-empty']}></div>
        <div className={styles['timeline-middle']}>
          <div className={styles['timeline-circle']}></div>
        </div>
        <div className={`${styles['timeline-component']} ${styles['timeline-content']}`}>
          <h3>✅ Q2 2025 — MVP Launch (Completed)</h3>
          <ul>
            <li>Launched our no-code AI platform for building websites, apps, and digital stores.</li>
            <li>Initial user onboarding, feedback loop, and iterative UI/UX improvements.</li>
          </ul>
        </div>

        {/* Q3 2025 — Right Side */}
        <div className={`${styles['timeline-component']} ${styles['timeline-content']}`}>
          <h3>🚧 Q3 2025 — Crypto Token Integration (In Progress)</h3>
          <ul>
            <li>Launch native utility token $RECODE</li>
            <li>Token smart contract deployment on Ethereum or preferred chain</li>
            <li>Token use cases: platform credits, AI features, premium content unlocks</li>
            <li>Tokenomics design and whitepaper release</li>
            <li>Begin smart contract audits and compliance review</li>
          </ul>
        </div>
        <div className={styles['timeline-middle']}>
          <div className={styles['timeline-circle']}></div>
        </div>
        <div className={styles['timeline-empty']}></div>

        {/* Q4 2025 — Left Side */}
        <div className={styles['timeline-empty']}></div>
        <div className={styles['timeline-middle']}>
          <div className={styles['timeline-circle']}></div>
        </div>
        <div className={`${styles['timeline-component']} ${styles['timeline-content']}`}>
          <h3>🪙 Q4 2025 — Token Launch + Community Incentives</h3>
          <ul>
            <li>Public token sale / airdrop campaigns</li>
            <li>Token integration into platform for payments and rewards</li>
            <li>Launch "Build-to-Earn" and referral programs</li>
            <li>DAO governance planning begins</li>
          </ul>
        </div>

        {/* Q1 2026 — Right Side */}
        <div className={`${styles['timeline-component']} ${styles['timeline-content']}`}>
          <h3>🌍 Q1 2026 — Ecosystem Growth</h3>
          <ul>
            <li>AI-powered plugin marketplace for Recode users</li>
            <li>Partner integrations with DeFi and Web3 tools</li>
            <li>DAO voting launch for community governance</li>
            <li>Cross-chain token bridge integration (Polygon, BSC, etc.)</li>
          </ul>
        </div>
        <div className={styles['timeline-middle']}>
          <div className={styles['timeline-circle']}></div>
        </div>
        <div className={styles['timeline-empty']}></div>

        {/* Q2 2026 — Left Side */}
        <div className={styles['timeline-empty']}></div>
        <div className={styles['timeline-middle']}>
          <div className={styles['timeline-circle']}></div>
        </div>
        <div className={`${styles['timeline-component']} ${styles['timeline-content']}`}>
          <h3>🚀 Q2 2026 — Recode Pro & Expansion</h3>
          <ul>
            <li>Launch of Recode Pro with advanced analytics + AI tools</li>
            <li>Mobile app beta release</li>
            <li>Localization for global markets</li>
            <li>Institutional partnerships and grants for Web3 innovation</li>
          </ul>
        </div>

      </div>
    </section>
  );
}
