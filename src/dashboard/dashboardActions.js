import axios from 'axios';
import config from '../config';

export function getSummary() {
    const request = axios.get(`${config.api}/billingCycles/summary`)
    return {
        type: 'BILLING_SUMMARY_FETCHED',
        payload: request
    }
}