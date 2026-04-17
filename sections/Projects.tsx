'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';
import { projects } from '../data/portfolio';
import Image from 'next/image';

const allCategories = [
	'All',
	...Array.from(new Set(projects.map((p) => p.category))),
];

function ProjectCard({
	project,
	index,
}: {
	project: (typeof projects)[0];
	index: number;
}) {
	const colors = [
		'from-violet-500/20 to-purple-600/10',
		'from-cyan-500/20 to-blue-600/10',
		'from-emerald-500/20 to-teal-600/10',
		'from-orange-500/20 to-amber-600/10',
		'from-pink-500/20 to-rose-600/10',
		'from-lime-500/20 to-green-600/10',
	];
	const gradient = colors[index % colors.length];

	return (
		<motion.div
			layout
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
			exit={{ opacity: 0, scale: 0.95 }}
			transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
			className='group glass rounded-2xl overflow-hidden border border-surface-border hover:border-accent/25 transition-all duration-300 hover:shadow-xl hover:shadow-accent/5'
		>
			{/* Visual preview */}
			<div
				className={`relative h-40 bg-gradient-to-br ${gradient} overflow-hidden`}
			>
				{/* <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-6xl opacity-10 font-display font-bold text-white">
            {project.title.charAt(0)}
        </div>
        </div> */}
				<div className='relative h-40 overflow-hidden'>
					<Image
						src={`/screenshots/${project.image}`}
						alt={project.title}
						fill
						className='object-cover'
					/>
				</div>
				<div
					className='absolute inset-0 opacity-[0.04]'
					style={{
						backgroundImage:
							'linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px)',
						backgroundSize: '20px 20px',
					}}
				/>
				{/* Category badge */}
				<div className='absolute top-3 left-3'>
					<span className='px-2.5 py-1 rounded-lg bg-black/40 text-xs text-white/70 backdrop-blur-sm'>
						{project.category}
					</span>
				</div>
				{/* Link button */}
				<a
					href={project.url}
					target='_blank'
					rel='noreferrer'
					className='absolute top-3 right-3 w-8 h-8 rounded-lg bg-black/40 backdrop-blur-sm flex items-center justify-center text-white/60 hover:text-white hover:bg-accent transition-all opacity-0 group-hover:opacity-100'
				>
					<ExternalLink size={14} />
				</a>

				{/* URL preview strip */}
				<div className='absolute bottom-0 left-0 right-0 px-3 py-2 bg-gradient-to-t from-black/60 to-transparent'>
					<span className='text-xs text-white/50 font-mono truncate block'>
						{project.url.replace('https://', '').replace('http://', '')}
					</span>
				</div>
			</div>

			{/* Content */}
			<div className='p-5'>
				<h3 className='font-display font-semibold text-white mb-1.5 group-hover:text-accent transition-colors'>
					{project.title}
				</h3>
				<p className='text-xs text-ink-400 leading-relaxed mb-4'>
					{project.description}
				</p>
				<div className='flex flex-wrap gap-1.5'>
					{project.tags.map((tag) => (
						<span
							key={tag}
							className='px-2 py-0.5 rounded-md bg-accent/10 text-accent text-xs border border-accent/20'
						>
							{tag}
						</span>
					))}
				</div>
			</div>
		</motion.div>
	);
}

export default function Projects() {
	const [activeFilter, setActiveFilter] = useState('All');
	const [showAll, setShowAll] = useState(false);

	const filtered =
		activeFilter === 'All'
			? projects
			: projects.filter((p) => p.category === activeFilter);
	const displayed = showAll ? filtered : filtered.slice(0, 9);

	return (
		<section id='projects' className='section-pad'>
			<div className='container-tight'>
				<AnimatedSection>
					<div className='flex items-center gap-3 mb-16'>
						<span className='font-mono text-xs text-accent uppercase tracking-widest'>
							04 — Projects
						</span>
						<div className='flex-1 h-px bg-surface-border max-w-xs' />
					</div>
				</AnimatedSection>

				<div className='flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12'>
					<AnimatedSection>
						<h2 className='font-display text-4xl md:text-5xl font-bold text-white leading-tight'>
							Selected
							<br />
							<span className='text-gradient'>work.</span>
						</h2>
					</AnimatedSection>

					{/* Filter pills */}
					<AnimatedSection delay={0.1}>
						<div className='flex flex-wrap gap-2'>
							{allCategories.slice(0, 8).map((cat) => (
								<button
									key={cat}
									onClick={() => {
										setActiveFilter(cat);
										setShowAll(false);
									}}
									className={`px-4 py-1.5 rounded-xl text-xs font-medium transition-all duration-200 ${
										activeFilter === cat
											? 'bg-accent text-white'
											: 'glass text-ink-300 border border-surface-border hover:border-accent/30 hover:text-white'
									}`}
								>
									{cat}
								</button>
							))}
						</div>
					</AnimatedSection>
				</div>

				{/* Grid */}
				<motion.div layout className='grid sm:grid-cols-2 lg:grid-cols-3 gap-5'>
					<AnimatePresence mode='popLayout'>
						{displayed.map((project, i) => (
							<ProjectCard key={project.url} project={project} index={i} />
						))}
					</AnimatePresence>
				</motion.div>

				{/* Show more */}
				{!showAll && filtered.length > 9 && (
					<AnimatedSection delay={0.2} className='flex justify-center mt-12'>
						<button
							onClick={() => setShowAll(true)}
							className='px-8 py-3 rounded-2xl glass border border-surface-border text-sm text-white hover:border-accent/30 hover:bg-accent/5 transition-all'
						>
							Show all {filtered.length} projects
						</button>
					</AnimatedSection>
				)}

				{/* Total count */}
				<AnimatedSection delay={0.1} className='mt-8 text-center'>
					<p className='text-sm text-ink-500 font-mono'>
						Showing {displayed.length} of {filtered.length} projects
					</p>
				</AnimatedSection>
			</div>
		</section>
	);
}
