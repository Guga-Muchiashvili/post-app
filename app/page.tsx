'use client'
import Image from "next/image";

export default function Home() {


  const HandleSubmit = async () => {

   const res = await fetch('api/createPost', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      title: 'dalaila'
    })
  })
  console.log('sdaw')
  const data = await res.json()
  console.log(data)
  }

  return (
    <main >
      <input type="text" />
      <button onClick={() => HandleSubmit()}>POST</button>
    </main>
  );
}
