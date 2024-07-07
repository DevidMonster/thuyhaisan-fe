import { useState, useEffect } from "react";
import { ProductInput } from "../interfaces/shipment";
import { message } from "antd";

type Props = {
  defaultProductData?: ProductInput[];
};

const useFormProductInShipment = ({ defaultProductData }: Props) => {
  const [productDataSubmit, setProductData] = useState<ProductInput[]>([]);
  useEffect(() => {
    if (!defaultProductData) return;
    setProductData(defaultProductData!);
  }, [defaultProductData]);
  const checkDuplicateItemInArray = (
    idProduct: string,
    index: number
  ): boolean => {
    let valid = false;
    valid =
      productDataSubmit.filter(
        (item, i) => item.idProduct === idProduct && index !== i
      ).length >= 1;

    return valid;
  };
  const dataSubmitFactory = (
    data: ProductInput | ProductInput[],
    index?: number
  ) => {
    if (Array.isArray(data)) {
      setProductData([...productDataSubmit, ...data]);
    } else {
      if (
        index !== undefined &&
        data.idProduct !== "" &&
        checkDuplicateItemInArray(data.idProduct, index)
      ) {
        message.error("Sản phẩm đã tồn tại");
        setProductData((prev) => {
          prev.splice(
            productDataSubmit.indexOf(
              productDataSubmit.find(
                (item) => item.idProduct === data.idProduct
              )!
            ),
            1,
            data
          );
          return prev;
        });
        return;
      }
      if (index !== undefined && data.idProduct !== "") {
        setProductData((prev) => {
          prev.splice(index, 1, data);
          return prev;
        });
        return;
      }
      setProductData([...productDataSubmit, data]);
    }
  };

  const removeProduct = (index: number) => {
    setProductData((prev) => prev.filter((_, i) => i !== index));
  };

  return { productDataSubmit, dataSubmitFactory, removeProduct };
};

export default useFormProductInShipment;
