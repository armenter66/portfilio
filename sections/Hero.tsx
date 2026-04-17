'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { ArrowDown, Github, Linkedin, Send } from 'lucide-react';
import { personalData } from '../data/portfolio';
import myimg from '../public/myphoto.webp';

const container = {
	hidden: { opacity: 0 },
	show: {
		opacity: 1,
		transition: { staggerChildren: 0.1, delayChildren: 0.2 },
	},
};

const item = {
	hidden: { opacity: 0, y: 24 },
	show: {
		opacity: 1,
		y: 0,
		transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
	},
};

export default function Hero() {
	return (
		<section className='relative min-h-screen flex flex-col justify-center overflow-hidden pt-20'>
			{/* Background orbs */}
			<div className='absolute inset-0 pointer-events-none'>
				<div className='absolute top-1/3 left-1/4 w-96 h-96 bg-accent/15 rounded-full blur-[120px] animate-pulse-slow' />
				<div
					className='absolute bottom-1/3 right-1/4 w-72 h-72 bg-lime/8 rounded-full blur-[100px] animate-pulse-slow'
					style={{ animationDelay: '2s' }}
				/>
				<div
					className='absolute inset-0 opacity-[0.025]'
					style={{
						backgroundImage:
							'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
						backgroundSize: '60px 60px',
					}}
				/>
			</div>

			<div className='container-tight relative z-10 w-full'>
				{/* Two-column layout */}
				<div className='grid lg:grid-cols-2 gap-12 lg:gap-16 items-center'>
					{/* ── LEFT: Text ── */}
					<motion.div variants={container} initial='hidden' animate='show'>
						<motion.div variants={item} className='mb-8'>
							<span className='inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass text-sm text-accent border border-accent/20'>
								<span className='w-2 h-2 rounded-full bg-lime animate-pulse' />
								Available for new projects
							</span>
						</motion.div>

						<motion.h1
							variants={item}
							className='font-display text-5xl md:text-6xl xl:text-7xl font-bold leading-[1.0] tracking-tight mb-6'
						>
							<span className='text-white'>Armen</span>
							<br />
							<span className='text-gradient'>Barsehian</span>
						</motion.h1>

						<motion.div
							variants={item}
							className='flex flex-wrap items-center gap-2 mb-6'
						>
							{['Frontend Developer', 'WordPress Expert', '4+ Years'].map((tag, i) => (
								<span
									key={i}
									className='px-3 py-1.5 rounded-xl glass text-xs font-mono text-ink-200 border border-surface-border'
								>
									{tag}
								</span>
							))}
						</motion.div>

						<motion.p
							variants={item}
							className='text-base md:text-lg text-ink-300 leading-relaxed max-w-lg mb-8'
						>
							I build fast, beautiful websites that convert visitors into clients.{' '}
							<span className='text-white font-medium'>30+ websites delivered.</span>{' '}
							From blockchain platforms to luxury real estate — I make the web work.
						</motion.p>

						<motion.div variants={item} className='flex flex-wrap gap-3 mb-10'>
							<a
								href='#projects'
								className='group px-6 py-3 rounded-2xl bg-accent hover:bg-accent-light text-white font-medium text-sm transition-all duration-300 hover:shadow-xl hover:shadow-accent/30 flex items-center gap-2'
							>
								View my work
								<ArrowDown
									size={15}
									className='group-hover:translate-y-0.5 transition-transform'
								/>
							</a>
							<a
								href='#contact'
								className='px-6 py-3 rounded-2xl glass text-white font-medium text-sm border border-surface-border hover:border-accent/30 transition-all'
							>
								Contact me
							</a>
						</motion.div>

						<motion.div variants={item} className='flex items-center gap-4'>
							<span className='text-xs text-ink-500 font-mono uppercase tracking-widest'>
								Find me
							</span>
							<div className='w-6 h-px bg-surface-border' />
							<div className='flex gap-2'>
								{[
									{ Icon: Github, href: personalData.github },
									{ Icon: Linkedin, href: personalData.linkedin },
									{ Icon: Send, href: personalData.telegram },
								].map(({ Icon, href }, i) => (
									<a
										key={i}
										href={href}
										target='_blank'
										rel='noreferrer'
										className='w-9 h-9 rounded-xl glass flex items-center justify-center text-ink-400 hover:text-white hover:border-accent/30 border border-surface-border transition-all'
									>
										<Icon size={15} />
									</a>
								))}
							</div>
						</motion.div>
					</motion.div>

					{/* ── RIGHT: Photo ── */}
					<motion.div
						initial={{ opacity: 0, scale: 0.92, y: 20 }}
						animate={{ opacity: 1, scale: 1, y: 0 }}
						transition={{ delay: 0.4, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
						className='hidden lg:flex justify-center items-center'
					>
						<div className='relative'>
							{/* Glow behind photo */}
							<div className='absolute inset-0 rounded-[2rem] bg-gradient-to-br from-accent/25 to-lime/10 blur-3xl scale-110' />
							{/* Decorative rings */}
							<div className='absolute -inset-3 rounded-[2.5rem] border border-accent/15' />
							<div className='absolute -inset-7 rounded-[3rem] border border-white/[0.04]' />

							{/* Photo */}
							<div className='relative w-[340px] h-[420px] xl:w-[380px] xl:h-[460px] rounded-[2rem] overflow-hidden border border-accent/25 shadow-2xl'>
								<Image
									src={myimg}
									alt='Armen Barsehian'
									fill
									className='object-cover object-top'
									priority
								/>
								{/* Gradient overlay bottom */}
								<div className='absolute bottom-0 left-0 right-0 h-36 bg-gradient-to-t from-ink/90 to-transparent' />

								{/* Name badge inside photo */}
								<div className='absolute bottom-5 left-5 right-5 glass rounded-xl px-4 py-3 border border-white/10'>
									<div className='flex items-center justify-between'>
										<div>
											<div className='text-white font-semibold text-sm font-display'>
												Armen Barsehian
											</div>
											<div className='text-ink-400 text-xs mt-0.5'>
												Frontend & WP Developer
											</div>
										</div>
										<div className='flex items-center gap-1.5'>
											<span className='w-2 h-2 rounded-full bg-lime animate-pulse' />
											<span className='text-xs text-lime font-medium'>Open</span>
										</div>
									</div>
								</div>
							</div>

							{/* Floating chips */}
							<motion.div
								animate={{ y: [0, -7, 0] }}
								transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut' }}
								className='absolute -left-14 top-12 glass rounded-2xl px-4 py-3 border border-surface-border shadow-xl'
							>
								<div className='text-2xl font-display font-bold text-gradient-lime'>
									30+
								</div>
								<div className='text-xs text-ink-400'>Websites</div>
							</motion.div>

							<motion.div
								animate={{ y: [0, 7, 0] }}
								transition={{
									repeat: Infinity,
									duration: 3.5,
									ease: 'easeInOut',
									delay: 0.7,
								}}
								className='absolute -right-12 bottom-24 glass rounded-2xl px-4 py-3 border border-surface-border shadow-xl'
							>
								<div className='text-2xl font-display font-bold text-gradient-lime'>
									4+
								</div>
								<div className='text-xs text-ink-400'>Years</div>
							</motion.div>
						</div>
					</motion.div>
				</div>

				{/* Stats bar */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ delay: 1.0, duration: 0.6 }}
					className='mt-16 md:mt-20'
				>
					<div className='glass rounded-2xl p-6 md:p-8 border border-surface-border'>
						<div className='grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-0 divide-y-2 md:divide-y-0 md:divide-x divide-surface-border'>
							{[
								{ num: '4+', label: 'Years Experience' },
								{ num: '30+', label: 'Websites Built' },
								{ num: '15+', label: 'Happy Clients' },
								{ num: '100%', label: 'Remote Ready' },
							].map((stat, i) => (
								<div
									key={i}
									className='pt-4 md:pt-0 md:px-8 first:pt-0 first:md:pl-0 last:md:pr-0 text-center md:text-left'
								>
									<div className='font-display text-3xl font-bold text-gradient-lime'>
										{stat.num}
									</div>
									<div className='text-sm text-ink-400 mt-1'>{stat.label}</div>
								</div>
							))}
						</div>
					</div>
				</motion.div>
			</div>

			{/* Scroll indicator */}
			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ delay: 1.6 }}
				className='absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2'
			>
				<span className='text-xs text-ink-600 font-mono tracking-widest uppercase'>
					scroll
				</span>
				<motion.div
					animate={{ y: [0, 8, 0] }}
					transition={{ repeat: Infinity, duration: 1.5 }}
					className='w-px h-10 bg-gradient-to-b from-accent to-transparent'
				/>
			</motion.div>
		</section>
	);
}
