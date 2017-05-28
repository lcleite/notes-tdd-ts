import RequestData = Interactor.RequestData;
import ResponseData = Interactor.ResponseData;

export interface Interactor<T extends RequestData, U extends ResponseData>{ //TODO: fazer uma versão onde callbacks são usados </3
  interact(requestData: T): Promise<U>;
}

export namespace Interactor{
  export interface RequestData {}
  export interface ResponseData {}
}
