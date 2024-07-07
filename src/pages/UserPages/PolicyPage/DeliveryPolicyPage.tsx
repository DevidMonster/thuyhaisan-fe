import Title from "antd/es/typography/Title";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

function DeliveryPolicyPage() {
  return (
    <div className='main'>
      <Helmet>
        <title>Chính sách giao hàng</title>
      </Helmet>
      <section className='section-breadcrumb py-[15px] bg-[#f7f7f7] border-b-[1px] border-[#e2e2e2]'>
        <div className='cont mx-auto px-[15px] 3xl:w-[1380px] 2xl:w-[1320px] xl:w-[1170px]   lg:w-[970px]  md:w-[750px] flex max-lg:flex-wrap items-start relative'>
          <span>
            <Link to='/'>Trang chủ </Link>/ chính sách / Chính sách giao hàng
          </span>
        </div>
      </section>
      <div className=' mx-auto px-[15px] 3xl:w-[1380px] 2xl:w-[1320px] xl:w-[1170px]   lg:w-[970px]  md:w-[750px] '>
        <div className=' xl:w-[90%] lg:w-[60%] md:w-[70%] max-md:w-[100%] m-auto  '>
          <section className=' lg:py-[100px] md:py-[80px] max-md:py-[60px]'>
            <Title className='text-center font-extrabold primary-font-bg' level={1}>
              CHÍNH SÁCH GIAO HÀNG
            </Title>
            <div className="h-auto w-full flex flex-col gap-7" id="toc-content">
              <h3>&nbsp;</h3>

              <h3 className="text-2xl font-bold">1. Phạm vi giao hàng</h3>

              <p>Hiện tại chúng tôi hỗ trợ giao hàng trên toàn quốc. Dù bạn có ở bất kỳ nơi đâu trên lãnh thổ Việt Nam, chúng tôi đều có thể gửi hàng trực tiếp đến tận tay của bạn.</p>

              <h3 className="text-2xl font-bold">2.Thời gian giao hàng</h3>

              <p>Thời gian giao hàng được bắt đầu tính sau khi đơn hàng của quý khách được xác nhận thành công bằng cuộc gọi của nhân viên chăm sóc khách hàng của chúng tôi. Thời gian giao hàng dự kiến khoảng 3-7 ngày, tùy thuộc vào vị trí đặt hàng.</p>

              <h3 className="text-2xl font-bold">3. Phí giao hàng</h3>

              <p>Chúng tôi sẽ dựa vào địa điểm bạn đang sinh sống và khối lượng đơn hàng của bạn để tính phí vận chuyển. Phí vận chuyển này sẽ được chúng tôi thông báo trước khi giao hàng cho bạn.</p>

              <h3 className="text-2xl font-bold">4. Hủy đơn hàng</h3>

              <p>Đơn hàng của bạn sẽ bị hủy nếu sau 03 lần nhân viên giao hàng hay nhân viên chăm sóc khách hàng không liên lạc với bạn.</p>

              <p>Nếu bạn đã nhận đơn hàng nhưng không đồng ý nhận sản phẩm vì một lý do nào đó, thì bạn sẽ là người trực tiếp thanh toán tiền vận chuyển cho nhân viên giao nhận.</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default DeliveryPolicyPage;