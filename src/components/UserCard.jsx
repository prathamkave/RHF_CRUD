import React from "react";

const UserCard = ({ users, setToggle, deleteUser, setUpdatedData }) => {
	return (
		<div className='flex flex-wrap gap-6 max-h-[calc(100vh-300px)] overflow-y-auto scrollbar-thin scrollbar-thumb-[#F2D04E]/20 scrollbar-track-[#E4DFD8]/5'>
			{users.map((user) => (
				<div
					key={user.id}
					className='w-full max-w-xs bg-[#24221B] border border-[#E4DFD8]/15 rounded-3xl p-6 shadow-2xl relative mt-8'
				>
					<div className='flex flex-col items-center mt-2 mb-6'>
						<img
							src={
								user.imageUrl ||
								"https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-4.0.3&auto=format&fit=crop&w=687&q=80"
							}
							alt={user.name}
							className='w-20 h-20 rounded-full object-cover mb-3 ring-2 ring-[#E4DFD8]/20'
						/>

						<h3 className='text-xl font-bold text-[#E4DFD8] tracking-tight'>
							{user.name}
						</h3>

						<p className='text-xs font-medium text-[#E4DFD8]/60 mt-1 uppercase tracking-wider'>
							{user.role}
						</p>
					</div>

					<div className='space-y-3 mb-8'>
						<div className='flex flex-col gap-5 items-center space-x-3 text-sm text-[#E4DFD8]/80 bg-[#E4DFD8]/5 p-3.5 rounded-2xl border border-[#E4DFD8]/10'>
							<div className='flex items-center gap-2 self-start'>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									className='h-4 w-4 text-[#F2D04E] shrink-0'
									viewBox='0 0 20 20'
									fill='currentColor'
								>
									<path d='M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z' />
									<path d='M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z' />
								</svg>

								<span className='truncate font-medium'>{user.email}</span>
							</div>

							<div className='flex items-center gap-2 self-start'>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									className='h-4 w-4 text-[#F2D04E] shrink-0'
									viewBox='0 0 20 20'
									fill='currentColor'
								>
									<path d='M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z' />
								</svg>

								<span className='font-medium'>{user.phone}</span>
							</div>
						</div>
					</div>

					<div className='flex items-center justify-between space-x-3'>
						<button
							onClick={() => {setUpdatedData(user)
            setToggle((prev) => !prev)}}
							className='flex-1 py-3 bg-[#d0cdc0] text-[#24221B] font-bold text-xs uppercase tracking-wider rounded-xl hover:bg-[#E5C138] transition-colors cursor-pointer active:scale-[0.98]'
						>
							Update
						</button>

						<button
							onClick={() => deleteUser(user.id)}
							className='flex-1 py-3 bg-transparent text-red-500 border border-red-500/20 font-bold text-xs uppercase tracking-wider rounded-xl hover:bg-red-500/20 transition-colors cursor-pointer active:scale-[0.98]'
						>
							Delete
						</button>
					</div>
				</div>
			))}
		</div>
	);
};

export default UserCard;
