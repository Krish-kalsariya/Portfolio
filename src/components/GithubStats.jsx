import { motion } from 'framer-motion';
import { Github, GitCommit, GitPullRequest, Star, ExternalLink } from 'lucide-react';
import AnimatedSection from './AnimatedSection';
import GlassCard from './GlassCard';
import { githubData, personalInfo } from '../data/portfolioData';

const GithubStats = () => {
  // Generate decorative contribution grid
  const generateContributionGrid = () => {
    const weeks = 20;
    const days = 7;
    const grid = [];

    for (let w = 0; w < weeks; w++) {
      const week = [];
      for (let d = 0; d < days; d++) {
        // Random intensity for visual effect
        const intensity = Math.random();
        let level = 0;
        if (intensity > 0.8) level = 4;
        else if (intensity > 0.6) level = 3;
        else if (intensity > 0.4) level = 2;
        else if (intensity > 0.2) level = 1;

        week.push(level);
      }
      grid.push(week);
    }
    return grid;
  };

  const contributionGrid = generateContributionGrid();

  const getLevelColor = (level) => {
    const colors = [
      'bg-zinc-800',
      'bg-indigo-500/30',
      'bg-indigo-500/50',
      'bg-indigo-500/70',
      'bg-indigo-500'
    ];
    return colors[level];
  };

  const stats = [
    { icon: GitCommit, label: 'Contributions', value: githubData.contributions },
    { icon: Github, label: 'Repositories', value: githubData.repos },
    { icon: Star, label: 'Code Streak', value: githubData.streak },
  ];

  return (
    <section className="relative py-20 md:py-32">
      {/* Section Divider */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="w-full px-4 sm:px-6 lg:px-12 xl:px-20">
        {/* Section Header */}
        <AnimatedSection className="text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-zinc-500/10 border border-zinc-500/20 text-zinc-400 text-sm font-medium mb-4">
            Coding Activity
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[var(--text-primary)] mb-4">
            GitHub Profile
          </h2>
          <p className="text-[var(--text-secondary)] text-lg max-w-2xl mx-auto">
            Consistent coding and project development
          </p>
        </AnimatedSection>

        {/* Stats Grid */}
        <div className="grid sm:grid-cols-3 gap-6 mb-12">
          {stats.map((stat, index) => (
            <AnimatedSection key={stat.label} delay={0.1 + index * 0.1}>
              <GlassCard className="p-6 text-center" glow="indigo">
                <div className="w-12 h-12 rounded-full border-2 border-indigo-500 flex items-center justify-center z-10 md:-translate-x-1/2" style={{ backgroundColor: 'var(--bg-secondary)' }}>
                  <stat.icon className="w-6 h-6 text-indigo-400" />
                </div>
                <div className="text-3xl font-bold gradient-text mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-[var(--text-muted)]">
                  {stat.label}
                </div>
              </GlassCard>
            </AnimatedSection>
          ))}
        </div>

        {/* Contribution Graph */}
        <AnimatedSection delay={0.4}>
          <GlassCard className="p-6 md:p-8">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-semibold text-[var(--text-primary)]">Contribution Activity</h3>
              <div className="flex items-center gap-2 text-xs text-[var(--text-muted)]">
                <span>Less</span>
                <div className="flex gap-1">
                  {[0, 1, 2, 3, 4].map((level) => (
                    <div
                      key={level}
                      className={`w-3 h-3 rounded-sm ${getLevelColor(level)}`}
                    />
                  ))}
                </div>
                <span>More</span>
              </div>
            </div>

            {/* Grid */}
            <div className="pb-2">
              <div className="flex gap-1 min-w-max">
                {contributionGrid.map((week, weekIndex) => (
                  <div key={weekIndex} className="flex flex-col gap-1">
                    {week.map((level, dayIndex) => (
                      <motion.div
                        key={dayIndex}
                        initial={{ scale: 0, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        transition={{
                          delay: (weekIndex * 7 + dayIndex) * 0.002,
                          duration: 0.2
                        }}
                        viewport={{ once: true }}
                        className={`w-3 h-3 rounded-sm ${getLevelColor(level)} hover:ring-2 hover:ring-white/30 transition-all cursor-pointer`}
                        title={`${level} contributions`}
                      />
                    ))}
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="mt-8 text-center">
              <motion.a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-2 px-6 py-3 bg-white text-dark-900 rounded-xl font-semibold hover:bg-zinc-200 transition-colors"
              >
                <Github size={18} />
                View GitHub Profile
                <ExternalLink size={14} />
              </motion.a>
            </div>
          </GlassCard>
        </AnimatedSection>

        {/* Repository Preview */}
        <AnimatedSection delay={0.5} className="mt-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { name: 'Bookora', desc: 'MERN Stack Book Store', stars: 0, forks: 0 },
              { name: 'Brainera', desc: 'Learning Management System', stars: 0, forks: 0 },
              { name: 'Portfolio', desc: 'Personal Developer Portfolio', stars: 0, forks: 0 },
            ].map((repo, index) => (
              <motion.a
                key={repo.name}
                href={`${personalInfo.github}/${repo.name}`}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 + index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -4 }}
                className="p-4 rounded-xl border hover:border-indigo-500/50 transition-colors" style={{ backgroundColor: 'var(--glass-bg)', borderColor: 'var(--glass-border)' }}
              >
                <div className="flex items-start justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-yellow-400" />
                    <span className="font-semibold text-[var(--text-primary)]">{repo.name}</span>
                  </div>
                </div>
                <p className="text-sm text-[var(--text-secondary)] mb-3">{repo.desc}</p>
                <div className="flex items-center gap-4 text-sm text-[var(--text-muted)]">
                  <span className="flex items-center gap-1">
                    <Star size={14} />
                    {repo.stars}
                  </span>
                  <span className="flex items-center gap-1">
                    <GitPullRequest size={14} />
                    {repo.forks}
                  </span>
                </div>
              </motion.a>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default GithubStats;
