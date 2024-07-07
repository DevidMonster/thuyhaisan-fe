import { useNavigate, useParams } from "react-router-dom";
import { useGetAllWithoutExpandQuery } from "../../../services/product.service";
import { useGetOneShipmentQuery, useUpdateShipmentMutation } from "../../../services/shipment.service";
import useFormProductInShipment from "../../../hooks/useFormProductInShipment";
import { message } from "antd";
import { InputShipment} from "../../../interfaces/shipment";
import { useDispatch } from "react-redux";
import { useClearTokenMutation } from "../../../services/auth.service";
import { deleteTokenAndUser } from "../../../slices/authSlice";
import { setItem } from "../../../slices/cartSlice";
import Loading from "../../../components/Loading/Loading";
import { Helmet } from "react-helmet";
import HeadForm from "../../../components/HeadForm/HeadForm";
import BlockForm from "../Product/BlockForm";
import FormProduct from "./components/FormProduct";
import PlusIcon from "../../../components/Icons/PlusIcon";
import dayjs from "dayjs";
import { useEffect } from "react";

export const UpdateShipment = () => {
    const { id } = useParams();
    const { data: shipment, isLoading: fetchLoading, isError: fetchError } = useGetOneShipmentQuery(id!)
    const { data } = useGetAllWithoutExpandQuery({ limit: 3000 }, { refetchOnMountOrArgChange: true });
    const [handleSubmit, { isLoading, isError }] = useUpdateShipmentMutation();
    const navigate = useNavigate();
    const { productDataSubmit, dataSubmitFactory, removeProduct } = useFormProductInShipment({});

    useEffect(() => {
        if (shipment?.body?.data?.products) {
            const products = shipment?.body?.data?.products.map((data) => {
                return ({
                    idProduct: data.idProduct._id,
                    productName: data.productName,
                    date: dayjs(data.date),
                    originWeight: +data.originWeight,
                    originPrice: data.originPrice
                })
            }
            )
            dataSubmitFactory(products)
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [shipment])

    const handleSubmitForm = async () => {
        if (productDataSubmit.length === 0 || productDataSubmit.find((item) => item.idProduct === '')) {
            message.error('Hãy hoàn thành sản phẩm ');
            return;
        }
        const totalMoney = productDataSubmit.reduce((money, product) => {
            const originPrice: number = Number(product.originPrice);
            const weight: number = Number(product.originWeight);
            return (money += originPrice * weight);
        }, 0);
        const dataForm: InputShipment = { totalMoney, products: productDataSubmit };
        try {
            await handleSubmit({ isDisable: false, ...dataForm, idShipment: id! }).unwrap().then(() => {
                navigate('/manage/shipments');
            }).catch((err) => {
                if (err.data.message == "Refresh Token is invalid" || err.data.message == "Refresh Token is expired ! Login again please !") {
                    onHandleLogout()
                }
            });
            if (isError) return;

        } catch (error) {
            console.log(error);
        }
    };
    const dispatch = useDispatch()
    const [clearToken] = useClearTokenMutation();
    const onHandleLogout = () => {
        dispatch(deleteTokenAndUser());
        dispatch(setItem());
        clearToken();
        navigate('/login');
    };
    if (isLoading || fetchLoading || fetchError) return <Loading sreenSize='lg' />;
    return (
        <>
            <Helmet>Cập nhật lô hàng</Helmet>
            <div className='w-full min-h-screen flex justify-center '>
                <div className='w-[100%] mt-20 pb-2'>
                    <HeadForm
                        placeHolder='Cập nhật lô hàng'
                        linkBack='/manage/shipments'
                        hasName={false}
                        onSubmit={handleSubmitForm}
                    />
                    <BlockForm title='Sản phẩm lô hàng' className='mt-[50px] relative mb-[50px]'>
                        <div className='mt-[20px] min-h-[100px] relative '>
                            {productDataSubmit?.length > 0 &&
                                productDataSubmit.map((item, index) => (
                                    <FormProduct
                                        key={index}
                                        products={data ? data.body.data.filter((product) => product.isSale !== true)! : []}
                                        submitProduct={(data, index) => dataSubmitFactory(data, index)}
                                        removeProduct={() => removeProduct(index)}
                                        data={item}
                                        itemIndex={index}
                                        productData={productDataSubmit}
                                    />
                                ))}
                            <button
                                onClick={() =>
                                    dataSubmitFactory({
                                        idProduct: '',
                                        date: '',
                                        originPrice: '',
                                        originWeight: '',
                                        productName: ''
                                    })
                                }
                                className=' flex justify-start py-2 rounded-md px-5 items-center gap-5 bg-greenbbf7d0 hover:bg-greenP500 duration-300 '
                            >
                                <PlusIcon />
                                <span className='text-greenP800'>Thêm sản phẩm</span>
                            </button>
                        </div>
                    </BlockForm>
                    <HeadForm
                        placeHolder='Tạo lô hàng'
                        linkBack='/manage/shipments'
                        hasName={false}
                        onSubmit={handleSubmitForm}
                    />
                </div>
            </div>
        </>
    );
}

export default UpdateShipment
