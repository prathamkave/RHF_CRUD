import React from "react";

const UserCard = () => {
	return (
		<div className='w-full max-w-xs bg-[#24221B] border border-[#E4DFD8]/15 rounded-3xl p-6 shadow-2xl relative mt-8'>
			<div className='flex flex-col items-center mt-2 mb-6'>
				<img
					src='https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'
					alt='User Avatar'
					className='w-20 h-20 rounded-full object-cover mb-3 ring-2 ring-[#E4DFD8]/20'
				/>
				<h3 className='text-xl font-bold text-[#E4DFD8] tracking-tight'>
					User Name
				</h3>
				<p className='text-xs font-medium text-[#E4DFD8]/60 mt-1 uppercase tracking-wider'>
					Role
				</p>
			</div>

			<div className='space-y-3 mb-8'>
				<div className='flex items-center space-x-3 text-sm text-[#E4DFD8]/80 bg-[#E4DFD8]/5 p-3.5 rounded-2xl border border-[#E4DFD8]/10'>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						className='h-4 w-4 text-[#F2D04E] shrink-0'
						viewBox='0 0 20 20'
						fill='currentColor'
					>
						<path d='M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z' />
						<path d='M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z' />
					</svg>
					<span className='truncate font-medium'>Email</span>
				</div>

				<div className='flex items-center space-x-3 text-sm text-[#E4DFD8]/80 bg-[#E4DFD8]/5 p-3.5 rounded-2xl border border-[#E4DFD8]/10'>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						className='h-4 w-4 text-[#F2D04E] shrink-0'
						viewBox='0 0 20 20'
						fill='currentColor'
					>
						<path d='M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z' />
					</svg>
					<span className='font-medium'>Phone</span>
				</div>
			</div>

			<div className='flex items-center justify-between space-x-3'>
				<button className='flex-1 py-3 bg-[#d0cdc0] text-[#24221B] font-bold text-xs uppercase tracking-wider rounded-xl hover:bg-[#E5C138] transition-colors cursor-pointer active:scale-[0.98]'>
					Update
				</button>

				<button className='flex-1 py-3 bg-transparent text-red-500 border border-red-500/20 font-bold text-xs uppercase tracking-wider rounded-xl hover:bg-red-500/20 transition-colors cursor-pointer active:scale-[0.98]'>
					Delete
				</button>
			</div>
		</div>
	);
};

export default UserCard;