import React from "react";

const Leaderboard = () => {
  return (
      <div className="flex-1 flex flex-col items-center p-8 bg-gray-800 text-white ">
        <h2 className="text-2xl font-bold mb-4 self-start ml-11 mb-14">Leaderboard</h2>
        <div className="w-11/12 h-4/5 border border-gray-500 rounded-lg pt-5 overflow-y-auto">
          <table className="w-full text-center">
            <thead>
              <tr>
                <th className="pb-2">Sr. No.</th>
                <th className="pb-2">Pokemon</th>
                <th className="pb-2">Trainer</th>
                <th className="pb-2">Likes</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="py-2">1</td>
                <td className="py-2">Pikachu</td>
                <td className="py-2">Ash</td>
                <td className="py-2">10</td>
              </tr>
              <tr>
                <td className="py-2">2</td>
                <td className="py-2">Raichu</td>
                <td className="py-2">Gary</td>
                <td className="py-2">5</td>
              </tr>
              <tr>
                <td className="py-2">3</td>
                <td className="py-2">Brok</td>
                <td className="py-2">Onix</td>
                <td className="py-2">2</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      );
    };
    
    export default Leaderboard;