export default function About () {
  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="text-3xl pb-5 underline underline-offset-[10px] decoration-2">
        About
      </h1>
      <table className="border-collapse p-2">
        <thead>
          <tr>
            <th className="border border-[#00a0e0] p-1.5">key</th>
            <th className="border border-[#00a0e0] p-1.5">value</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border border-[#00a0e0] p-1.5">name</td>
            <td className="border border-[#00a0e0] p-1.5">yukito.k</td>
          </tr>
          <tr>
            <td className="border border-[#00a0e0] p-1.5">job</td>
            <td className="border border-[#00a0e0] p-1.5">software testing enginner</td>
          </tr>
          <tr>
            <td className="border border-[#00a0e0] p-1.5">lang</td>
            <td className="border border-[#00a0e0] p-1.5">js ts php</td>
          </tr>
          <tr>
            <td className="border border-[#00a0e0] p-1.5">favs</td>
            <td className="border border-[#00a0e0] p-1.5">mtg food stroll</td>
          </tr>
          <tr>
            <td className="border border-[#00a0e0] p-1.5">icon</td>
            <td className="border border-[#00a0e0] p-1.5">
              <img src="/images/avater.png" width="200" height="200" />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  ) 
}
