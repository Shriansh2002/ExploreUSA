import Link from 'next/link';

const Header = () => {
	return (
		<nav className="bg-white shadow-lg">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex items-center justify-between h-16">
					<div className="flex items-center">
						<Link href="/">
							<p className="font-bold text-3xl text-gray-800">
								Explore USA
							</p>
						</Link>
					</div>
					<div className="hidden md:block">
						<ul className="flex items-center">
							<li className="ml-4">
								<Link href="/states">
									<p className="text-gray-600 hover:text-gray-800">
										States
									</p>
								</Link>
							</li>
							<li className="ml-4">
								<Link href="/foods">
									<p className="text-gray-600 hover:text-gray-800">
										Foods
									</p>
								</Link>
							</li>
							<li className="ml-4">
								<Link href="/specials">
									<p className="text-gray-600 hover:text-gray-800">
										Specials
									</p>
								</Link>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</nav>
	);
};

export default Header;
