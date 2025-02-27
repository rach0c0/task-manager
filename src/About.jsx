import {Link} from 'react-router-dom'

function About() {
    return (
      <main>
        <nav> <Link to="/">Home</Link> </nav>
        <div style={{padding: '2vw'}}>
        <h2>🐱 About Dis App – A Very Impurrtant Task Manager</h2>
        <p>Oh hai hooman! 😺 Welcome to Task Manager 3000, da most meow-nificent productivity tool evar! 🐾 You haz many things to do? Too many noms to eat? Too many naps to take? Worry not, furriend! Dis app iz here to help (and totally not just to steal ur keyboard warmth).</p>
        <p>U see, as a highly sophisticated feline, I understand da impawtance of staying organized. Imagine dis: U haz a big to-do list (like “chase red dot” 🐾, “destroy couch” 🛋, “ignore hooman” 😼), but den… OH NOES! You forgotted what to do next?! 🙀 DIS IS A CAT-astrophe!</p>
        <h4>But wait! Dis app iz da purrrfect solution! 😻 With dis magical contraption, you can:</h4>
        <ul>
            <li>Write down hooman tasks (like "get me more treatz" 🍗)</li>
            <li>Check off completed things (like "stare at wall for 20 mins" 🧱)</li>
            <li>Delete unneeded tasks (but NOT da important ones like "nap" 💤)</li>
            <li>Even edit tasks in case u change ur fluffy little mind!</li>
        </ul>
        <p>And bestest of all? It saves ur tasks even if u refresh da page! Like, how cool iz dat?? 😮 It’s almost like… magic. (Or da work of tiny invisible hooman servants. 👀)</p>
        <p>So go ahead, hooman. Use dis app. Be productive. Accomplish great things. And remember... if u do a good job, I MIGHT let u pet me. Maybe. 😼</p>
        <p>Now, off u go! 🐾 And if u ever get distracted… don’t worry. I does dat too. All da time.</p>
        <p>P.S. If dis app haz bugs… I definitely did not chase dem under da fridge. 😸</p>
        </div>
      </main>
    )
  }
  
  export default About;