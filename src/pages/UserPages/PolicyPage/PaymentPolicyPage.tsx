import Title from "antd/es/typography/Title"
import { Helmet } from "react-helmet"
import { Link } from "react-router-dom"

const PaymentPolicyPage = () => {
    return (
        <div className='main'>
            <Helmet>
                <title>Chính sách thanh toán</title>
            </Helmet>
            <section className='section-breadcrumb py-[15px] bg-[#f7f7f7] border-b-[1px] border-[#e2e2e2]'>
                <div className='cont mx-auto px-[15px] 3xl:w-[1380px] 2xl:w-[1320px] xl:w-[1170px]   lg:w-[970px]  md:w-[750px] flex max-lg:flex-wrap items-start relative'>
                    <span>
                        <Link to='/'>Trang chủ </Link>/ chính sách / Chính sách thanh toán
                    </span>
                </div>
            </section>
            <div className=' mx-auto px-[15px] 3xl:w-[1380px] 2xl:w-[1320px] xl:w-[1170px]   lg:w-[970px]  md:w-[750px] '>
                <div className=' xl:w-[90%] lg:w-[60%] md:w-[70%] max-md:w-[100%] m-auto  '>
                    <section className=' lg:py-[100px] md:py-[80px] max-md:py-[60px]'>
                        <Title className='text-center font-extrabold primary-font-bg' level={1}>
                            CHÍNH SÁCH THANH TOÁN
                        </Title>
                        <div className="h-auto w-full flex flex-col gap-7" id="toc-content">
                            <p>&nbsp;</p>

                            <p>Khi quý khách đồng ý mua hàng tại website chúng tôi có các hình thức thanh toán sau:</p>

                            <h3 className="font-bold">Thanh toán tại nhà</h3>

                            <p>Chúng tôi sẽ xác nhận đơn hàng và tổng giá trị đơn hàng với khách hàng. Sau khi xác nhận, nhân viên giao nhận sẽ chuyển sản phẩm tới địa chỉ của khách hàng và thu tiền trực tiếp tại địa chỉ của khách hàng.</p>

                            <h3 className="font-bold">Thanh toán chuyển khoản qua ngân hàng</h3>

                            <p>Quý khách vui lòng chuyển khoản vào tài khoản :</p>

                            <p>Chủ tài khoản:&nbsp;&nbsp;CTY CP NÔNG SẢN XNK HOÀNG MINH L.A&nbsp;</p>

                            <p>Số tài khoản:&nbsp;<strong>6937091129&nbsp;</strong></p>

                            <p>Tại Ngân hàng Quân Đội (MB Bank) - chi nhánh Đức Hòa, Long An</p>

                            <h3 className="font-bold">Thanh toán tại Văn phòng công ty</h3>

                            <p>Địa chỉ:&nbsp;15-16 ĐƯỜNG SỐ 12, KDC TRẦN ANH, MỸ HẠNH NAM, ĐỨC HÒA LONG AN</p>

                            <p>Ngay sau khi nhận được đơn hàng, Chúng tôi sẽ xác nhận với bạn qua điện thoại lại về đơn đặt hàng, tổng số tiền thanh toán và tiến hành thanh toán theo đơn đặt hàng.</p>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    )
}

export default PaymentPolicyPage