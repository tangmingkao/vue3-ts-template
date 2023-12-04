import { abstractionRequest } from "@/http-server";

export function queryCurrencyRate(params: object = {}): any {
  return abstractionRequest("get", "/v2/queryCurrencyRate", params);
}
