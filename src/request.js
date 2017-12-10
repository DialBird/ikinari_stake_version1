import axios from 'axios';
import { INFO_URL } from './urls';

export const getInfo = () => axios.get(INFO_URL);
