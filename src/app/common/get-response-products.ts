import { Product } from "./product";

export interface GetResponseProducts {
    _embedded: {
        products: Product[];
    }
}
