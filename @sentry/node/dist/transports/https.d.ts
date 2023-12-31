import { Event, Response, Session, SessionAggregates, TransportOptions } from '@sentry/types';
import { BaseTransport } from './base';
/** Node https module transport */
export declare class HTTPSTransport extends BaseTransport {
    options: TransportOptions;
    /** Create a new instance and set this.agent */
    constructor(options: TransportOptions);
    /**
     * @inheritDoc
     */
    sendEvent(event: Event): Promise<Response>;
    /**
     * @inheritDoc
     */
    sendSession(session: Session | SessionAggregates): PromiseLike<Response>;
}
//# sourceMappingURL=https.d.ts.map