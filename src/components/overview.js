/**
 * Stats Overview Component
 */

import React, { Component, PropTypes } from 'react'
import {
	Row,
	Col,
	Image
} from 'react-bootstrap'

import ImageGrid from '../components/imageGrid'

class Overview extends React.Component {

	constructor(props) {
		super(props)
		this.images = this.images.bind(this)
		this.totalLikes = this.totalLikes.bind(this)
	}

	// TODO: Continue work on this method
	// - Returns an array of image urls for rendering
	// - Maybe move up to App container for reusability?
	images(statName, numberOfImages) {
		const { stats } = this.props
		var selectedPosts = stats[statName].slice(0, 10)
		var selectedImages = []

		selectedPosts.forEach((post) => {
			selectedImages.push(post.images.thumbnail.url)
		})

		return selectedImages
	}

	totalLikes(posts) {
		var likes = 0

		posts.forEach((post) => {
			console.log(post.likes.count)

			let postLikes = post.likes.count
			likes += postLikes
		})

		console.log("User's total likes: ", likes)

		return likes
	}

	render() {
		const { stats } = this.props

		// Temporary stats state checking to avoid undefined exceptions
		if (this.props.stats && this.props.stats.hasOwnProperty("liked_posts")) {
			var likedPosts = this.props.stats.liked_posts
			var totalNumberOfLikes = this.totalLikes(stats.recent_posts)
		} else {
			var likedPosts = {}
			var totalNumberOfLikes = 0
		}

		return (
			<div className="overview">
				<h2>Stats Overview</h2>
				<Row id="overview-liked-pictures-row">
					<Col sm={6}>
						<h4>Liked Posts: {likedPosts.length}</h4>
					</Col>
					<Col sm={6}>
						<h4>3 Most Recent Liked Posts:</h4>
					</Col>
				</Row>
				<Row>
					<Col sm={12}>
						<h4>Total Number of Likes: {totalNumberOfLikes}</h4>
					</Col>
				</Row>
			</div>
		)
	}

}

Overview.propTypes = {
	user: React.PropTypes.object,
	stats: React.PropTypes.object
}

export default Overview
