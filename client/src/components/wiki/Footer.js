import React from "react";
import Box from '@mui/material/Box'

export default function Footer(props) {
    return (
        <Box component='footer'>
            {/* <section className="bottom-l">
                <h2>Find us around the web!</h2>
                <p className="links">
                    <a href="https://soundcloud.com/survivalcheck" ><img alt="some alt text" src="/assets/orange_white_64-94fc761.png" /></a>
                    <a href="https://www.instagram.com/survivalcheckshow/" ><img alt="some alt text" src="/assets/Instagram_AppIcon_Aug2017.png" /></a>
                    <a href="https://www.youtube.com/channel/UCcy6WP0aF5JSOe3gmNAStqQ" ><img alt="some alt text" src="/assets/youtube_social_squircle_red.png" /></a>
                </p>
                <p className="top-button"><a href="#top">TOP</a></p>
            </section>
            <section className="bottom-m">
                <h2>Make your own article with our template!</h2>

                <a href="DnD_World_Setting_Site_template.html" className="download-button">Template</a>


            </section> */}
            <section className="bottom-r">
                <h2>Contact Us Here!</h2>
                <p>Want to add value to this campaign setting?</p>
                <form method="POST" action="mailto: tevisreilly1@hotmail.com">
                    <label htmlFor="fname">First Name</label>
                    <input type="text" id="fname" name="firstname" placeholder="Your first name.." required="" />
                    <label htmlFor="lname">Last Name</label>
                    <input type="text" id="lname" name="lastname" placeholder="Your last name.." required="" />
                    <label htmlFor="email">Your Email Address</label>
                    <input type="text" id="email" name="email" placeholder="you@something.net" required="" />
                    <label htmlFor="subject">Subject</label>
                    <textarea id="subject" name="subject" placeholder="Write something.." required=""></textarea>
                    <input type="submit" value="Submit" />
                </form>
            </section>

        </Box>
    )
}