import videoFile from './assets/videoss.mp4';
import videoFileOgg from './assets/video.ogg';
import videoFileWebm from './assets/video.webm';
import videoImage from './assets/vid.png';
import VideoBg2 from './components/VideoBg/VideoBg';
import './App.css';
function App() {
	return (
		<>
			<VideoBg2
				videoFileMp4={videoFile}
				videoFileWebm={videoFileWebm}
				videoFileOgg={videoFileOgg}
				videoPoster={videoImage}
				darken={true}
				fullScreen={true}
				autoPlay={true}
				loop={true}
				muted={true}
				overlay={true}
				OverlayTopOffset={0}
				caption='Lorem ipsum dolor'
				description='Lorem ipsum dolor sit amet consectetur, adipisicing elit. At, nihil! Ad corporis ab, quisquam est eum modi temporibus! Ipsa architecto alias praesentium eum voluptas amet laudantium quas adipisci odio sint!'
				AriaLabel='Descriptive Label for Video'
			/>

			<div className='page'>
				<h2>Video Background in React JS</h2>
				<p>
					Lorem ipsum dolor, sit amet consectetur adipisicing elit.
					Reprehenderit consequatur ad eveniet? Odio, est qui excepturi pariatur
					molestias quaerat tempore. Culpa, repudiandae. Corporis molestiae
					commodi neque pariatur nostrum, sed velit...
				</p>

				<p>
					Lorem ipsum dolor, sit amet consectetur adipisicing elit.
					Reprehenderit consequatur ad eveniet? Odio, est qui excepturi pariatur
					molestias quaerat tempore. Culpa, repudiandae. Corporis molestiae
					commodi neque pariatur nostrum, sed velit...
				</p>

				<p>
					Lorem ipsum dolor, sit amet consectetur adipisicing elit.
					Reprehenderit consequatur ad eveniet? Odio, est qui excepturi pariatur
					molestias quaerat tempore. Culpa, repudiandae. Corporis molestiae
					commodi neque pariatur nostrum, sed velit...
				</p>

				<p className='credits'>~! w e b s t y l e p r e s s !~</p>
			</div>
		</>
	);
}

export default App;
