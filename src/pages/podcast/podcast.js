import React from "react";
import HeroImage from "../../components/heroImage/heroImage";
import Footer from "../../components/footer/footer";
import { podcastArray } from "./podcastHelper";
import "./podcast.scss";
import PodcastCard from "./podcastCard";

/**
 * Renders Podcast page
 * @returns {JSX.Element}
 * @constructor
 */
export default function Podcast() {
	return (
		<>
			<HeroImage heroTitle="PODCAST" />
			{podcastArray.map((podcast) => {
				return (
					<PodcastCard
						key={`s${podcast.seasonNumber}e${podcast.episodeNumber}`}
						card={podcast}
					/>
				);
			})}

			<Footer />
		</>
	);
}
