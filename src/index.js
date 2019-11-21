// Create SVG sprite
import '../assets/svg/community.svg';
import '../assets/svg/faq.svg';
import '../assets/svg/guides.svg';
import '../assets/svg/star.svg';

import '../assets/css/style.css';

import { loadPosts } from './loadPosts';

$(document).ready(function() {
  loadPosts();
});
