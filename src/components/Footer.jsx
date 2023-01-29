import React from 'react'

const Footer = () => {
  return (
    <div className='pt-60'>
<footer class="px-4 py-8 dark:bg-gray-800 dark:text-gray-400">
	<div class="container flex flex-wrap items-center justify-center mx-auto space-y-4 sm:justify-between sm:space-y-0">
		<div class="flex flex-row pr-3 pl-6 space-x-4 sm:space-x-8">
			<div class="flex items-center justify-center">
				<a href="/">
                    <span className='text-cyan-400 text-xl font-semibold'>CrowdFunder</span>
                </a>
			</div>
			<ul class="flex flex-wrap items-center space-x-4 sm:space-x-8">
				<li>
					<a rel="noopener noreferrer" href="/about">About</a>
				</li>
				<li>
					<a rel="noopener noreferrer" href="/howitworks">How It Works</a>
				</li>
				<li>
					<a rel="noopener noreferrer" href="/contact">Contact</a>
				</li>
			</ul>
		</div>
		<ul class="flex flex-wrap pl-3 space-x-4 sm:space-x-8">
			<li>
				<a rel="noopener noreferrer" href="#">Instagram</a>
			</li>
			<li>
				<a rel="noopener noreferrer" href="#">Facebook</a>
			</li>
			<li>
				<a rel="noopener noreferrer" href="#">Twitter</a>
			</li>
		</ul>
	</div>
</footer>
    </div>
  )
}

export default Footer