import {faHeart}          from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon}  from '@fortawesome/react-fontawesome';
import {forbidExtraProps} from 'airbnb-prop-types';

import React          from 'react';
import Card           from 'react-bootstrap/Card';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip        from 'react-bootstrap/Tooltip';
import {Link}         from 'react-router-dom';

import NoAvailableImage from '../gif/No_available_image.gif';

import buildImageUrl              from '../helpers/buildImageUrl';
import useAuthored                from '../hooks/useAuthored';
import useFavorites               from '../hooks/useFavorites';
import BlueprintSummaryProjection from '../propTypes/BlueprintSummaryProjection';

FactorioPrintsThumbnail.propTypes = forbidExtraProps({
	blueprintSummary: BlueprintSummaryProjection,
});

function FactorioPrintsThumbnail({blueprintSummary})
{
	const {key, title, imgurImage, voteSummary: {numberOfUpvotes}} = blueprintSummary;

	const {isSuccess, data} = useFavorites();
	const authoredResult    = useAuthored();

	const mine     = authoredResult.isSuccess && authoredResult.data.has(key);
	const favorite = isSuccess && data.has(key);

	const tooltip  = (
		<Tooltip>
			{title}
		</Tooltip>
	);
	const imageUrl = imgurImage ?
		buildImageUrl(imgurImage.imgurId, imgurImage.imgurType, 'b') :
		NoAvailableImage;

	const mineStyle     = mine ? 'text-warning' : 'text-default';
	const favoriteStyle = favorite ? 'text-warning' : 'text-default';

	return (
		<Card className='blueprint-thumbnail col-auto' style={{width: '11rem', backgroundColor: '#1c1e22'}}>
			<a
				className='mr-1'
				href={`https://factorioprints.com/view/${key}`}
			>
				<Card.Img variant='top' src={imageUrl} referrerPolicy='no-referrer' />
			</a>
			<p className='truncate p-1'>
				<span className='mr-1'>{`${numberOfUpvotes}`} <span className='sr-only'>favorites</span></span>
				<span className={favoriteStyle}>
					{/* TODO: This heart should be a toggle button */}
					<FontAwesomeIcon icon={faHeart} className='text-error' />
				</span>
				{'  '}
				<OverlayTrigger placement='bottom' overlay={tooltip}>
					<Link to={`/view/${key}`}>
						<span className={mineStyle}>
							{title}
						</span>
					</Link>
				</OverlayTrigger>
			</p>
		</Card>
	);
}

export default FactorioPrintsThumbnail;
