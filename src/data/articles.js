import React from "react";

function article_1() {
	return {
		date: "Apr 2023 - July 2023",
		title: "React.js and Node.js Developer Internship",
		description:
			"In this internship I have done 2 real-time project regarding to this internship and I have learnt some skills like ReactJS, NodeJS, Express, HTML, CSS, JavaScript, REST APIs, Bootstrap frameworks.",
		keywords: [
			"Frontend and Backend Development",
			"Teja Sriram",
			"Teja Sriram S",
			"Teja Sriram Sangani",
		],
		style: `
				.article-content {
					display: flex;
					flex-direction: column;
					align-items: center;
				}

				.randImage {
					align-self: center;
					outline: 2px solid red;
				}
				`,
		body: (
			<React.Fragment>
				<div className="article-content">
					<h2 className="paragraph">Content of React.js and Node.js Development</h2>
					{/* <img
						src="https://picsum.photos/200/300"
						alt="random"
						className="randImage"
					/> */}
					<div>In this internship i have done 2 real-time projects. they are<br></br>
						1.Text to Speech and Speech to Text Converter.<br></br>
						2.Text to QRcode Generetor.
					</div>
				</div>
			</React.Fragment>
		),
	};
}

function article_2() {
	return {
		date: "Sep 2022 - Nov 2022",
		title: "AWS Cloud Virtual Internship",
		description:
			"In this Internship I have learn cloud operations and how to build a cloud functions and how attach the data and security tricks",
		style: ``,
		keywords: [
			"AWS Cloud Operations",
			"Teja",
			"Teja Sriram",
			"Teja Sriram Sangani",
		],
		body: (
			<React.Fragment>
				<h1>Content of AWS Cloud virtual internship</h1>
			</React.Fragment>
		),
	};
	
}

const myArticles = [article_1, article_2];

export default myArticles;
