type Method = 'get' | 'post';
type BuildableRequest = { url: string; method: Method; data?: object };

class RequestBuilder {
    url?: string;
    method?: Method;
    data?: object;

    setUrl(url: string): this & Pick<BuildableRequest, 'url'> {
        return Object.assign(this, { url });
    }

    setMethod(method: Method): this & Pick<BuildableRequest, 'method'> {
        return Object.assign(this, { method });
    }

    setData(data: object): this & Pick<BuildableRequest, 'data'> {
        return Object.assign(this, { data });
    }

    send(this: BuildableRequest) { }
}

new RequestBuilder().setUrl('foo').setMethod('get').send();
