import infinitescroll from '../../assets/infinitescroll.png';
import pip from '../../assets/pip.png';
import joketeller from '../../assets/joketeller.png';
import facerecognitionapp from '../../assets/facerecognitionapp.png';
import fitme from '../../assets/fitme.png';
const projects = [
    {
        projectName: 'Face Recognition App',
        description: 'A fullstack web app using Clarifai\'s face detection API that takes image input from users and detects faces in them. It can sign in and register users and track their entry count. This project was built using ReactJs, TailwindCSS, NodeJs, ExpressJs, Postgresql, Clarifai and some other packages.',
        github: 'https://github.com/dannyobito/facerecognitionapp',
        liveLink: 'https://dannyobito.github.io/facerecognitionapp',
        image: facerecognitionapp
    },
    {
        projectName: 'Fit Me',
        description: 'A react, Firebase E-commerce Application (still in the works)',
        github: 'https://github.com/dannyobito/fit-me',
        liveLink: '',
        image: fitme
    },
    {
        projectName: 'Picture-in-picture',
        description: 'A pip app using chrome\'s built in pip API',
        github: 'https://github.com/dannyobito/pic',
        liveLink: 'https://dannyobito.github.io/picture-in-picture',
        image: pip
    },
    {
        projectName: 'Joke Teller',
        description: 'An app that tells you lame jokes using a joke API and RSS text to speech API',
        github: 'https://github.com/dannyobito/joke-teller',
        liveLink: 'https://dannyobito.github.io/joke-teller',
        image: joketeller
    },
    {
        projectName: 'Infinite Scroll',
        description: 'An endless stream of beautiful images. Uses unsplash API',
        github: 'https://github.com/dannyobito/infinite-scroll',
        liveLink: 'https://dannyobito.github.io/infinite-scroll',
        image: infinitescroll
    },
]

export default projects