'use client';
export default function Home() {
 
 function clickTesting() {
  console.log("increment like count")
}
  return (
    <section>
      <button onClick={clickTesting}>click secon test </button>
      {/* <Hero /> */}
      {/* <Services /> */}
      {/* <TrustedBy /> */}
      {/* <StatsSection /> */}
      {/* <Portfolio/> */}
     
    </section>
  );
}
