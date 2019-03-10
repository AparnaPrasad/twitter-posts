import axios from 'axios';
import TweetService from '../services';

export default axios.create({
    baseURL: `/TweetService`
});
