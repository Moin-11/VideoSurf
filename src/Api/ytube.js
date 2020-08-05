import axios from 'axios';

export const KEY = "AIzaSyAA5hO2C3e-h6gKNKeWVk22nvYkhiFY9IA";


export default axios.create({
baseURL : "https://www.googleapis.com/youtube/v3",
});