import { GitHubIcon } from "../icons/github-icon";
import { InstaIcon } from "../icons/insta-icon";
import { LinkedInIcon } from "../icons/linkedin-icon";
import { TwitterIcon } from "../icons/twitter-icon";

import "./social-btns.scss"


export function SocialBtns(){
    return(
        <div className="social">
            <a href="https://www.instagram.com/_sama01__/" target="_blank">
                <InstaIcon/>
            </a>
            <a href="https://www.linkedin.com/in/sama010101/" target="_blank">
                <LinkedInIcon/>
            </a>
            <a href="https://github.com/Sama010101" target="_blank">
                <GitHubIcon/>
            </a>
            <a href="">
                <TwitterIcon/>
            </a>
        </div>
    )
}