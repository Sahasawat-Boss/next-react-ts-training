type UserData = {
    id: number;
    fname: string;
    lname: string;
    username: string;
    avatar: string;
};

export default async function Page() {
    const data = await fetch('https://www.melivecode.com/api/users');
    const user: UserData[] = await data.json();
    console.log(user);

    return (
        <div className="p-6">
            <a
                href="https://www.melivecode.com/api/users"
                className="text-blue-400 text-xl"
                target="_blank"
                rel="noopener noreferrer"
            >
                SRC: https://www.melivecode.com/api/users
            </a>

            <div className="mt-6 space-y-6">
                {user.map((users) => (
                    <div
                        key={users.id}
                        className="border p-4 rounded shadow-sm hover:shadow-md transition"
                    >
                        <h2 className="text-2xl font-bold mb-1">ID: {users.id}</h2>

                        <p className="text-gray-800">{users.fname}</p>
                        <p className="text-gray-800">{users.lname}</p>
                        <p className="text-gray-800">{users.username}</p>
                        <img
                            src={users.avatar}
                            alt={users.username}
                            className="w-24 h-24 rounded-full mt-4 border"
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}

//----with Try and Catch
// import React from 'react';

// type UserData = {
//     id: number;
//     fname: string;
//     lname: string;
//     username: string;
//     avatar: string;
// };

// export default async function Page() {
//     let content: React.ReactNode;

//     try {
//         const res = await fetch('https://www.melivecode.com/api/users');

//         console.log('📡 Fetch response:', res);

//         if (!res.ok) {
//             console.error('❌ Fetch failed with status:', res.status);
//             throw new Error('Failed to fetch users');
//         }

//         const user: UserData[] = await res.json();
//         console.log('✅ User data:', user);

//         content = (
//             <div className="mt-6 space-y-6">
//                 {user.map((users) => (
//                     <div
//                         key={users.id}
//                         className="border p-4 rounded shadow-sm hover:shadow-md transition"
//                     >
//                         <h2 className="text-2xl font-bold mb-1">ID: {users.id}</h2>
//                         <p className="text-gray-800">First Name: {users.fname}</p>
//                         <p className="text-gray-800">Last Name: {users.lname}</p>
//                         <p className="text-gray-800">Username: {users.username}</p>
//                         <img
//                             src={users.avatar}
//                             alt={users.username}
//                             className="w-24 h-24 rounded-full mt-4 border"
//                         />
//                     </div>
//                 ))}
//             </div>
//         );
//     } catch (error: any) {
//         console.error('❌ Error during fetch or render:', error.message);

//         content = (
//             <div className="mt-6 p-4 bg-red-100 text-red-700 border border-red-400 rounded">
//                 <strong>Error:</strong> {error.message || 'Unable to load user data.'}
//             </div>
//         );
//     }

//     return (
//         <div className="p-6">
//             <a
//                 href="https://www.melivecode.com/api/users"
//                 className="text-blue-500 text-xl underline"
//                 target="_blank"
//                 rel="noopener noreferrer"
//             >
//                 SRC: https://www.melivecode.com/api/users
//             </a>

//             {content}
//         </div>
//     );
// }
