export default function StudentRow({ student, index, updateScore }) {
  const status = student.score >= 40 ? "PASS" : "FAIL";

  return (
    <tr className="hover:bg-gray-800 transition">
      {/* Name */}
      <td className="px-6 py-3 border-b border-[#00FFE0]">{student.name}</td>

      {/* Editable Score */}
      <td className="px-6 py-3 border-b border-[#00FFE0]">
        <input
          type="number"
          value={student.score}
          onChange={(e) => updateScore(index, e.target.value)}
          className="w-20 bg-gray-900 text-white border border-[#00FFE0] rounded px-2 py-1 focus:outline-none focus:ring-2 focus:ring-[#00FFE0]"
        />
      </td>

      {/* Status */}
      <td className="px-6 py-3 border-b border-[#00FFE0]">
        {status === "PASS" ? (
          <span className="text-[#00FFE0] font-bold drop-shadow-[0_0_10px_#00FFE0]">
            PASS
          </span>
        ) : (
          <span className="text-red-500 font-bold drop-shadow-[0_0_10px_red]">
            FAIL
          </span>
        )}
      </td>

      {/* Save Button */}
      <td className="px-6 py-3 border-b border-[#00FFE0]">
        <button
          onClick={() => updateScore(index, student.score)}
          className="px-4 py-1 bg-[#00FFE0] text-black font-bold rounded hover:bg-teal-400 transition"
        >
          SAVE
        </button>
      </td>
    </tr>
  );
}




// export default function StudentRow({ student, index, updateScore }) {
//   const status = student.score >= 40 ? "PASS" : "FAIL";
//   const statusStyle = {
//     color: student.score >= 40 ? "limegreen" : "red",
//     fontWeight: "bold"
//   };

//   return (
//     <tr>
//       <td>{student.name}</td>
//       <td>
//         <input
//           type="number"
//           value={student.score}
//           onChange={(e) => updateScore(index, e.target.value)}
//         />
//       </td>
//       <td style={statusStyle}>{status}</td>
//       <td className={student.score >= 40 ? "pass" : "fail"}>
//   {student.score >= 40 ? "PASS" : "FAIL"}
// </td>
//       <td>
//         <button onClick={() => updateScore(index, student.score)}>SAVE</button>
//       </td>
//     </tr>
//   );
// }