import React from 'react';
import { BsGithub, BsLinkedin } from 'react-icons/bs';
import { FaTwitter } from 'react-icons/fa';
import { data } from '../constants';

const SocialMedia = () => (
  <div className="app__social">
    <div>
      <a href={data.GITHUB_LINK} target='__blank'>
        <BsGithub />
      </a>
    </div>
    <div>
      <a href={data.LINKEDIN_LINK} target='__blank'>
        <BsLinkedin />
      </a>
    </div>
    <div>
      <a href={data.TWITTER_LINK} target='__blank'>
      <FaTwitter />
      </a>
    </div>
  </div>
);

export default SocialMedia;
