import React from 'react';

function Footer() {
	return (
		<footer>
			<div>
				<div>
					<span>facebook</span>
					<span>twitter</span>
					<span>instargram</span>
					<span>youtube</span>
					<span>twitch</span>
					<span>reddit</span>
					<span>steam</span>
					<span>discord</span>
				</div>
				<div>
					<div>
						<select name="language" id="">
							<option selected value="en">
								English
							</option>
							<option value="de">Deutsch</option>
							<option value="nl">Dutch</option>
							<option value="fr">Français</option>
							<option value="it">Italiano</option>
						</select>
					</div>
					<div>
						<select name="region" id="">
							<option selected value="US">
								North America
							</option>
							<option value="DE">Europe</option>
							<option value="AU">Oceania</option>
						</select>
					</div>
				</div>
			</div>
			<div>
				<div>
					<h4>CONTACT</h4>
					<ul>
						<li>Company</li>
						<li>Customer Support</li>
						<li>Submit a Request</li>
						<li>Support Center</li>
						<li>AM4 Bracket</li>
					</ul>
				</div>
				<div>
					<h4>ABOUT NZXT</h4>
					<ul>
						<li>Founder Q & A</li>
						<li>Careers</li>
						<li>Customer Reviews</li>
					</ul>
				</div>
				<div>
					<h4>COMMUNITY</h4>
					<ul>
						<li>Our Discord</li>
						<li>Newsroom & Blog</li>
					</ul>
				</div>
				<div>
					<h4>SOFTWARE</h4>
					<ul>
						<li>CAM</li>
						<li>CAM Feedback</li>
					</ul>
				</div>
				<div>
					<h4>ACCOUNT</h4>
					<ul>
						<li>Manage Your Account</li>
					</ul>
				</div>
				<div>
					<h4>NZXT STORE</h4>
					<ul>
						<li>Build a Custom PC</li>
						<li>Refurbished Builds</li>
						<li>Refurbished Components</li>
						<li>FAQ</li>
						<li>Find a Retailer</li>
					</ul>
				</div>
			</div>
			<div>
				<div>
					<p>NZXT</p>
					<p>© NZXT Inc. 2021 All Rights Reserved</p>
				</div>

				<div>
					<span>Legal</span>
					<span>Privacy Policy</span>
					<span>Manage Cookie Preferences</span>
				</div>
			</div>
		</footer>
	);
}

export default Footer;
