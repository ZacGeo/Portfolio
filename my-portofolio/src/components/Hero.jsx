import ProfileImage from '../assets/369242141_618436483508758_7004712142582004871_n.jpg'
const Hero = () => {
  return (
   
        <div className="flex flex-wrap">
          <div className="w-full lg:w-1/2">
            <div className="flex flex-col items-center lg:items-start">
              <h1 className="pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl">Georgos Zacharopoulos</h1>
              <span className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl  tracking-tight text-transparent">JUNIOR SOFTWARE DEVELOPER</span>
              <p className="my-2 max-w-xl py-6 font-light">My name is Georgos Zacharopoulos, and I am a Greek student currently enrolled at the University of Thessaly in the Department of Information Technology and Telecommunications. I have been passionate about programming for the past two years, during which time I have completed several projects, both independently and in collaboration with other developers. Additionally, I have acquired skills in creating static websites for businesses. I am highly motivated to learn new technologies and methodologies to tackle diverse projects. In my free time, I enjoy playing chess, going to the gym, and cooking.</p>
            </div>
          </div>
          <div className="w-full lg:w-1/2 lg:p-8">
            <div className="flex justify-center">
              <img src={ProfileImage} alt="georgos zacharopoulos" className="rounded-xl w-3/4 lg:w-4/5" />
            </div>
          </div>
        </div>
    
  )
}

export default Hero