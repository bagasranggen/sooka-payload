import { AccessArgs } from 'payload';

export const BaseAssetReadAccess = (props: AccessArgs): boolean => {
    const {
        req: { headers },
    } = props;

    const hostnames = [process.env.WEB_HOSTNAME, process.env.CMS_HOSTNAME].filter((item) => Boolean(item));
    const forwardedHostname = headers?.get('x-forwarded-host')?.split(':').shift();

    return hostnames.includes(forwardedHostname);
};
