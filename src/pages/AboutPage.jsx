import '../styles/About.css'

export default function AboutPage() {
  return (
    <div className='about-container'>
      <h2>Who am I?</h2>
      <div className='about-inner-container'>
        <img
          src='https://avatars.githubusercontent.com/u/88417696?v=4'
          alt='My github profile picture'
        />
        <p>
          My name is Felipe, I'm a simple person really. Someone who wants to
          learn a lot about coding. <br /> <br />
          I'm building this blog for practicing purposes but also for writing
          random stuff I see in the world
        </p>
      </div>
      <p>Thanks if you're reading this 🖤</p>
    </div>
  )
}
