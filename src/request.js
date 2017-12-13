import axios from 'axios';
import { INFO_URL, BIRD_SPOT_URL } from './urls';

export const getInfo = () => axios.get(INFO_URL);
export const getBirdSpot = () => axios.get(BIRD_SPOT_URL);
