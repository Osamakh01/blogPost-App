// inside here, we'll import Axios and make a pre configured version of Axios
import axios from 'axios';

export default axios.create({
    baseURL: 'http://34ec-2400-adc1-159-4900-441f-a508-7e28-7d62.ngrok.io'
    // we've now got an Axios instance that is pre-configured to talk to URL 
});

// with Ngrok our baseURL is goin to change after every 2 hours unless you start paying for an account 