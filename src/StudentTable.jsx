import StudentRow from "./StudentRow";

export default function StudentTable({ students, updateScore }) {
  return (
    <div className="overflow-x-auto mt-6">
      <table className="min-w-full border border-[#00FFE0] bg-gray-900 text-white rounded-lg shadow-lg">
        <thead className="bg-gray-800">
          <tr>
            <th className="px-6 py-3 text-left border-b border-[#00FFE0] text-lg font-bold tracking-wide">
              Name
            </th>
            <th className="px-6 py-3 text-left border-b border-[#00FFE0] text-lg font-bold tracking-wide">
              Score
            </th>
            <th className="px-6 py-3 text-left border-b border-[#00FFE0] text-lg font-bold tracking-wide">
              Status
            </th>
            <th className="px-6 py-3 text-left border-b border-[#00FFE0] text-lg font-bold tracking-wide">
              Update
            </th>
          </tr>
        </thead>
        <tbody>
          {students.map((student, index) => (
            <StudentRow
              key={index}
              student={student}
              index={index}
              updateScore={updateScore}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}



// import StudentRow from "./StudentRow";

// export default function StudentTable({ students, updateScore }) {
//   return (
//     <table>
//       <thead>
//         <tr>
//           <th>Name</th>
//           <th>Score</th>
//           <th>Status</th>
//         </tr>
//       </thead>
//       <tbody>
//         {students.map((student, index) => (
//           <StudentRow
//             key={index}
//             student={student}
//             index={index}
//             updateScore={updateScore}
//           />
//         ))}
//       </tbody>
//     </table>
//   );
// }