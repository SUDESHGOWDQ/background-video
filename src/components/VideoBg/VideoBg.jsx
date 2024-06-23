/* eslint-disable react/prop-types */
import { useInView } from 'react-intersection-observer';
import './VideoBg.css';
function VideoBg({
	videoFile,
	videoFileOgg,
	videoFileWebm,
	videoPoster,
	darken = true,
	fullScreen = true,
	autoPlay = true,
	loop = true,
	muted = true,
	overlay = true,
	OverlayTopOffset = 0,
	caption = '',
	description = '',
	AriaLabel,
}) {
	const { ref, inView } = useInView({
		triggerOnce: true,
		rootMargin: '50px',
	});
	return (
		<div
			className={`videobg-container ${fullScreen ? 'full-screen' : ''} ${
				darken ? 'darken' : ''
			}`}
			ref={ref}>
			{overlay && (
				<div
					className='overlay'
					style={
						OverlayTopOffset !== 0 ? { paddingTop: OverlayTopOffset } : {}
					}>
					{caption && <h1>{caption}</h1>}
					{description && <p>{description}</p>}
				</div>
			)}
			{inView && (
				<video
					{...(AriaLabel ? { 'aria-label': AriaLabel } : {})}
					autoPlay={autoPlay}
					loop={loop}
					muted={muted}
					poster={videoPoster}
					className='video-element'>
					<source src={videoFile} type='video/mp4' />
					{videoFileWebm && <source src={videoFileWebm} type='video/webm' />}
					{videoFileOgg && <source src={videoFileOgg} type='video/ogg' />}
					Your browser does not support the video tag.
				</video>
			)}
		</div>
	);
}

export default VideoBg;
