import {config} from '../../environment.config';

export  const Constant = {
    URL : {
        NotifyURL :  `${config.BASEURL}/notify`,
        SMSURL : `${config.SMSBASEURL}/triggerSMS`
    },
}